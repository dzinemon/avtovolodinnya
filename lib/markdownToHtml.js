import remark from 'remark'
import html from 'remark-html'

export default async function markdownToHtml(markdown) {
  let result = await remark().use(html).process(markdown)

  const oldContent = result.contents

  const classNamesP = 'leading-relaxed text-lg text-gray-700 mb-4' 
  const classNamesH1 = 'leading-relaxed text-4xl font-bold text-gray-900 mt-14 mb-5' 
  const classNamesH2 = 'leading-relaxed text-3xl font-bold text-gray-800 mt-10 mb-4' 
  const classNamesH3 = 'leading-relaxed text-2xl font-bold text-gray-700 mt-8 mb-3' 
  const regexP = /<p>/g;
  const regexH1 = /<h1>/g;
  const regexH2 = /<h2>/g;
  const regexH3 = /<h3>/g;
  const newContent = oldContent
    .replace(regexP, `<p class="${classNamesP}">`)
    .replace(regexH1, `<p class="${classNamesH1}">`)
    .replace(regexH2, `<p class="${classNamesH2}">`)
    .replace(regexH3, `<p class="${classNamesH3}">`)

  result.contents = newContent

  return result.toString()
}