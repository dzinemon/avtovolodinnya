import remark from 'remark'
import html from 'remark-html'

import fs from 'fs'
import path from 'path'

import getCarEntity from '../utils/top-car-entity'
import getCurrentPrice from '../utils/getCurrentPrice'
import formatNumber from '../utils/formatNumber'

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
      const currModel = i.model
      const currTerm = i.term
      const currVal = i.value
      const templatePath = `public/manufacturers/${currMade}/${currMade}_${currModel}.json`
      const templatePricePage = `public/manufacturers/${currMade}/prices/${currUid}.json`
      const currPrice = getCurrentPrice(templatePricePage)
      const rawData = fs.readFileSync(templatePath)
      // console.log(`currPrice ${currPrice}`)
      const parsedData = JSON.parse(rawData).filter((k) => {
        return k.uniqueid === currUid
      }).map((car) => {
        return getCarEntity(currentPosition, car, currMade, currTerm, currVal)
      }).map(car => {
        return car.replace('{-price-}', formatNumber(currPrice))
      })
      return parsedData
    }).forEach((el, idx) => {
      toReplaceContent = toReplaceContent.replace(oneCarRegexToReplace, el)
    });

  


  const classNamesP = 'leading-relaxed text-lg text-gray-800 mb-4' 
  const classNamesUL = 'leading-relaxed text-lg text-gray-800 mb-4 list-disc list-inside' 
  const classNamesOL = 'leading-relaxed text-lg text-gray-800 mb-4 list-decimal list-inside' 
  const classNamesA = 'text-blue-500 hover:text-blue-700 hover:underline' 
  const classNamesH1 = 'leading-tight text-3xl md:text-4xl font-bold text-gray-900 mt-14 mb-5' 
  const classNamesH2 = 'leading-tight text-2xl md:text-3xl font-bold text-gray-800 mt-10 mb-4' 
  const classNamesH3 = 'leading-tight text-xl md:text-2xl font-bold text-gray-700 mt-8 mb-3' 
  const regexP = /<p>/g;
  const regexUL = /<ul>/g;
  const regexOL = /<ol>/g;
  const regexA = /<a/g;
  const regexH1 = /<h1>/g;
  const regexH2 = /<h2>/g;
  const regexH3 = /<h3>/g;
  const newContent = toReplaceContent
    .replace(regexP, `<p class="${classNamesP}">`)
    .replace(regexUL, `<ul class="${classNamesUL}">`)
    .replace(regexOL, `<ol class="${classNamesOL}">`)
    .replace(regexA, `<a class="${classNamesA}"`)
    .replace(regexH1, `<h1 class="${classNamesH1}">`)
    .replace(regexH2, `<h2 class="${classNamesH2}">`)
    .replace(regexH3, `<h3 class="${classNamesH3}">`)
    .replace(allCarRegexToReplace, '')

  result.contents = newContent

  return result.toString()
}