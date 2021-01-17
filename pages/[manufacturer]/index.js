import ignore from '../../ignore'

import Link from 'next/link'

import Seo from '../../components/seo'
import CarCard from '../../components/manufacturer/CarCard'
import Layout from '../../components/layout'

import GaWrapper from '../../components/gawrapper'

import getArrayToStr from '../../utils/getArrayToStr'

import fs from 'fs'
import path from 'path'

function Manufacturer({availableModels, manufacturer}) {
  return (
    <GaWrapper>
      <Layout>
        <Seo title={`Перелік моделей автовиробника ${manufacturer.toUpperCase()} з актуальними цінами та витартами на володіння `}
          description={`Всі моделі автовиробника ${manufacturer.toUpperCase()} доступні для перегляду вартості та витрат на володіння`}
          currentPath={manufacturer.toLowerCase()}/>
        
        <div className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              <img className="mx-auto h-10 w-auto hidden" alt={manufacturer}/>
              Виберіть модель {manufacturer.toUpperCase()}
            </h3>
            <p>
              Автовиробник {manufacturer.toUpperCase()} представлений на українському ринку {` `}
              {availableModels.length} {` `} моделями
            </p>
          </div>
  
          <div className="mt-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 sm:text-base text-sm gap-4 grid-2">
            {availableModels.sort((a,b) => {
              return a.price[0] - b.price[0]
            })
              .map((i, idx) => {
                const model = i.filename.replace(`${manufacturer}_`, '')
                const price = getArrayToStr(i.price)
                const hp = getArrayToStr(i.hp)
                const modelImagePath = i.modelImagePath
                return (
                <div key={idx} className="mb-2 sm:mb-0">
                  <Link href={`/${manufacturer}/${model}`}>
                    <a className="text-blue-800 hover:text-blue-900">
                      <CarCard
                        price={price}
                        hp={hp}
                        image={modelImagePath} 
                        modelName={`${manufacturer} ${model}`} 
                      />
                    </a>
                  </Link>
                </div>
              )})}
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </GaWrapper>
  )
}

export async function getStaticPaths() {
  const manufacturersDirectory = path.join(process.cwd(), 'public', 'manufacturers')
  const filenames = fs.readdirSync(manufacturersDirectory)
  const availableManufacturers = filenames
    .filter(i => i.indexOf('.') === -1)
    .filter(i => {
      if (!ignore.ignore.includes(i)) {
        return i
      }
    })
    .map((filename) => ({filename}))
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

  const listOfFiles = filenames
    .filter(i => i.indexOf('.DS_Store') === -1)
    .filter(i => i.includes('json'))

  const availableModels = listOfFiles.reduce((acc, item) => {
    const currentPath = `public/manufacturers/${params.manufacturer}/${item}`
    
    let modelImagePath = ''
    const currentImage = `public/manufacturers/${params.manufacturer}/images/${item.replace('.json', '')}_0.jpg`

    if (fs.existsSync(currentImage)) {
      modelImagePath = currentImage.replace('public', '')
    } else {
      modelImagePath = `/logo@3x.png`
    }

    const rawData = fs.readFileSync(currentPath)
    const data = JSON.parse(rawData)

    const getCurrentIdArr = data.filter(j => !j.deprecated).map(j => j.uniqueid)

    if (getCurrentIdArr.length > 0) {
      let priceArray = []

      getCurrentIdArr.map(k => {      
        const currentJPath = `public/manufacturers/${params.manufacturer}/prices/${k}.json`
        function LoadCurrentPrices(filepath) {
          const currentRawJData = fs.readFileSync(currentJPath, 'utf8')
          const currentJData = JSON.parse(currentRawJData)
          const currentJPrice = currentJData[currentJData.length - 1].price
          priceArray.push(currentJPrice)
        }
        
        LoadCurrentPrices(currentJPath)
      })

      const priceArr = priceArray.filter(i => typeof i !== 'undefined').sort((a, b) => {
        return a - b
      })
      
      const horsePowerArr = data.map(j => {
        return j.engine.power
      }).filter(i => typeof i !== 'undefined').sort((a, b) => {
        return a - b
      })

      // const finalPriceString = getArrayToStr(priceArr);
      // const finalHpString = getArrayToStr(horsePowerArr);

      return [...acc, {
        filename: item.replace('.json', ''),
        price: priceArr,
        hp: horsePowerArr,
        modelImagePath: modelImagePath
      }]
        
      
    }
    return acc     
  },[])

  return {
    props: {
      availableModels,
      manufacturer: params.manufacturer
    }
  }
}


export default Manufacturer