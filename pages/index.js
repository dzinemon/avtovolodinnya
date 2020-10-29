import Link from 'next/link'

import Seo from '../components/seo'
import Nav from '../components/nav'

import GaWrapper from '../components/gawrapper'

import SectionOne from '../components/home/sectionOne'
// import SectionTwo from '../components/home/sectionTwo'
import Footer from '../components/footer'

import fs from 'fs'
import path from 'path'

// availableManufacturers will be populated at build time by getStaticProps()
function Home({availableManufacturers}) {
  return (

    <>
    <GaWrapper>
      <Seo />
      <Nav />
      <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-36 xl:py-20 flex flex-wrap">
        <div className="text-center lg:text-left lg:w-7/12 w-full">
          <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Вартість володіння
            <br className="xl:hidden"/>
            <span className="text-blue-600"> новим авто</span>
          </h1>
          <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Розрахуйте вартість володіння автомобілем
          </p>
        </div>
  
        <div className="lg:w-5/12 w-full ">
          <div className="flex flex-wrap justify-center items-center">
            {availableManufacturers.map((i, idx) => (
              <div key={idx} className="p-4">
                <Link href={`/${i.filename.toLowerCase()}`}>
                  <a className="block hover:text-blue-600 transition transition-transform hover:scale-105 transform duration-500">
                    <div className="max-w-xs rounded overflow-hidden">
                      
                      <div className="px-3 py-2 text-center">
                        <div className="font-bold text-base md:text-xl">{i.filename.toUpperCase()}</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
  
        <div className="text-center lg:text-left lg:w-2/3 w-full">
        <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Система розраховує додаткові витрати, які ви, можливо, не врахували при розгляді вашої наступної покупки автомобіля. 
          </p>
          <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Ці додаткові витрати включають: податки та збори, страхові внески, витрати на паливо, технічне обслуговування, ремонт та інше. Перегляньте витрати на володіння будь-яким авто.</p>
        </div>
      </main>
      <SectionOne />
      {/* <SectionTwo /> */}
      <Footer />
    </GaWrapper>
  </>
   
  )
}

export async function getStaticProps() {
  const manufacturerDirectory = path.join(process.cwd(), 'public', 'manufacturers')
  const filenames = fs.readdirSync(manufacturerDirectory)
  const availableManufacturers = filenames.filter(i => i.indexOf('.') === -1).map((filename) => ({filename}))

  return {
    props: {
      availableManufacturers,
    }
  }
}




export default Home;