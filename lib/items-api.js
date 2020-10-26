import fs from 'fs'

import { join } from 'path'


const allManufacturersDirectory = path.join(process.cwd(), 'manufacturers', 'json') 

export function getallManufacturersDirectoryItems() {
  return fs.readdirSync(allManufacturersDirectory)
}

// export function getallManufacturersDirectory(item, fields=[]) {
//   const realName = 
// }