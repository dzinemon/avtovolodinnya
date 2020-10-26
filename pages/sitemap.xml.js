import React from 'react';
import fs from 'fs'
import path from 'path'

const EXTERNAL_DATA_URL = 'https://avtovolodinnya.com';

const createSitemap = (finalPaths) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${finalPaths
          .map((item) => {
            return `
                    <url>
                        <loc>${`${EXTERNAL_DATA_URL}/${item}`}</loc>
                    </url>
                `;
          })
          .join('')}
    </urlset>
    `;


export async function getServerSideProps({ res }) {
  const currentAllManufacturerPath = path.join(process.cwd(), 'public', 'manufacturers')

    // Get the array of all manufactureres 
    const manufacturersFileNames = fs.readdirSync(currentAllManufacturerPath)

    const manufacturersFilteredNames = manufacturersFileNames.filter(i => i.indexOf('.DS_Store') === -1)

    let manufacturerUrls = manufacturersFilteredNames;

    let modelsUrls = [];

    manufacturersFilteredNames.map(i => {
      const currentManufacturerPath = path.join(process.cwd(), 'public', 'manufacturers', i)
      const modelFileNames = fs.readdirSync(currentManufacturerPath) 
  
      const availableCurrentModels = modelFileNames
        .filter(i => i.indexOf('.DS_Store') === -1)
        .filter(i => i.includes('json'))
        .map(cur => {
          cur = encodeURIComponent(cur.trim())
          return cur
        })
        .map((filename) => ({model: filename.replace('.json', '').toLowerCase().replace(`${i}_`, '')}))
    
  
      const availableCurrentModelsValues = Object.values(availableCurrentModels)  
      const addCurrentManufacturer = availableCurrentModelsValues.map(el => {
        el.manufacturer = i
        return el
      })
  
      let curUrls = addCurrentManufacturer.map(item => {
        return `${item.manufacturer}/${item.model}`
      })
  
      modelsUrls = modelsUrls.concat(curUrls)  
    })
    const finalPaths = manufacturerUrls.concat(modelsUrls);
    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(finalPaths));
    res.end();

  return {
    props: {},
  }
}
    

const Sitemap = () => null
export default Sitemap