import fs from 'fs'

export default function getCurrentPrice(path) {
  const data = JSON.parse(fs.readFileSync(path, 'utf-8'))
  return data[data.length - 1].price
}