import remark from 'remark'
import html from 'remark-html'

import fs from 'fs'
import path from 'path'

import getCarEntity from '../utils/top-car-entity'

export default async function markdownToHtml(markdown) {
  let result = await remark().use(html).process(markdown)

  const oldContent = result.contents

  // '(?<=\[car2])(.*)(?=\[\/car2])'
  const carRegex = /(?<=\[car\d]\n?)(.*)(?=\n?\[\/car\d])/mgi;
  const allCarRegexToReplace = /(\[car\d]\n?)(.*)(\n?\[\/car\d])/mgi;
  const oneCarRegexToReplace = /(\[car\d]\n?)(.*)(\n?\[\/car\d])/mi;

  const cars = await oldContent.match(carRegex);

  let toReplaceContent = oldContent

  
  const carsToData = cars
    .map(i => JSON.parse(i))
    .map((i, idx) => {
      let currentPosition = idx + 1
      const currPath = i.path
      const currUid = i.uniqueid
      const currMade = i.manufacturer
      const rawData = fs.readFileSync(currPath)
      const parsedData = JSON.parse(rawData).filter((k) => {
        return k.uniqueid === currUid
      }).map((car) => {
        return getCarEntity(currentPosition, car, currMade)
      })
      return parsedData
    }).forEach((el, idx) => {
      toReplaceContent = toReplaceContent.replace(oneCarRegexToReplace, el)
    });

  


  const classNamesP = 'leading-relaxed text-lg text-gray-700 mb-4' 
  const classNamesH1 = 'leading-relaxed text-4xl font-bold text-gray-900 mt-14 mb-5' 
  const classNamesH2 = 'leading-relaxed text-3xl font-bold text-gray-800 mt-10 mb-4' 
  const classNamesH3 = 'leading-relaxed text-2xl font-bold text-gray-700 mt-8 mb-3' 
  const regexP = /<p>/g;
  const regexH1 = /<h1>/g;
  const regexH2 = /<h2>/g;
  const regexH3 = /<h3>/g;
  const newContent = toReplaceContent
    .replace(regexP, `<p class="${classNamesP}">`)
    .replace(regexH1, `<p class="${classNamesH1}">`)
    .replace(regexH2, `<p class="${classNamesH2}">`)
    .replace(regexH3, `<p class="${classNamesH3}">`)
    .replace(allCarRegexToReplace, '')

  result.contents = newContent

  

  return result.toString()
}