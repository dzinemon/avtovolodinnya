import Link from 'next/link'

import Breadcrumbs from '../../components/breadcrumbs'

import fs from 'fs'
import path from 'path'

function Manufacturer({availableModels, manufacturer}) {
  return (
    <div>
      <Breadcrumbs />
      <div>
        Manufacturer page
      </div>
      {availableModels.map((i, idx) => (
        <div key={idx} className="w-64 p-4">
          <Link href={`/${manufacturer}/${i.filename.toLowerCase().replace(`${manufacturer}_`, '')}`}>
            <a className="block hover:text-blue-600 transition transition-transform hover:scale-105 transform duration-500">
            <div className="font-bold text-base md:text-xl">{i.filename.toLowerCase().replace(`${manufacturer}_`, '').toUpperCase()}</div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export async function getStaticPaths() {
  const manufacturerDirectory = path.join(process.cwd(), 'manufacturers', 'json')
  const filenames = fs.readdirSync(manufacturerDirectory)
  const availableManufacturers = filenames.filter(i => i.indexOf('.') === -1).map((filename) => ({filename}))
  const manufacturerModels = Object.values(availableManufacturers)
  const manufacturerModelsPaths = manufacturerModels.map(i => `/${i.filename}`)
  return {
    paths: manufacturerModelsPaths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const currentManufacturerDir = path.join(process.cwd(), 'manufacturers', 'json', params.manufacturer)
  const filenames = fs.readdirSync(currentManufacturerDir)
  const availableModels = filenames.filter(i => i.indexOf('.DS_Store') === -1).map((filename) => ({filename: filename.replace('.json', '')}))
  return {
    props: {
      availableModels,
      manufacturer: params.manufacturer
    }
  }
}


export default Manufacturer