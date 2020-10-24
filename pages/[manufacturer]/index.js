import Link from 'next/link'

import Breadcrumbs from '../../components/breadcrumbs'
import CarCard from '../../components/manufacturer/CarCard'

import fs from 'fs'
import path from 'path'

function Manufacturer({availableModels, manufacturer}) {
  return (
    <div>
      <Breadcrumbs />
      <div className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            <img className="mx-auto h-10 w-auto hidden" alt={manufacturer}/>
            Виберіть модель {manufacturer}
          </h3>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 sm:text-base text-sm gap-4 grid-2">
          {availableModels.map((i, idx) => {
              const model = i.filename.toLowerCase().replace(`${manufacturer}_`, '')
              return (
              <div key={idx} className="mb-2 sm:mb-0">
                <Link href={`/${manufacturer}/${model}`}>
                  <a className="text-blue-600 hover:text-blue-800 uppercase font-bold">
                    <CarCard image={`/manufacturers/${manufacturer}/${i.filename}_0.jpg`} modelName={model} />
                  </a>
                </Link>
              </div>
            )})}
          </div>
        </div>
      </div>
    </div>
     
    </div>
  )
}

export async function getStaticPaths() {
  const manufacturerDirectory = path.join(process.cwd(), 'public', 'manufacturers')
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
  const currentManufacturerDir = path.join(process.cwd(), 'public', 'manufacturers', params.manufacturer)
  const filenames = fs.readdirSync(currentManufacturerDir)
  
  const availableModels = filenames
    .filter(i => i.indexOf('.DS_Store') === -1)
    .filter(i => i.includes('json'))
    .map((filename) => ({filename: filename.replace('.json', '')}))
  return {
    props: {
      availableModels,
      manufacturer: params.manufacturer
    }
  }
}


export default Manufacturer