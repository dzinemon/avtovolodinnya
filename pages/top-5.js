import Link from "next/link";

import fs from 'fs'

import Seo from "../components/seo";
import Nav from "../components/nav";

import GaWrapper from "../components/gawrapper";
import Footer from "../components/footer";

import CarEntity from '../components/top-5-enity'

function TopFive({data}) {
  return (
    <GaWrapper>
      <Seo />
      <Nav />

      <div className="xl:container mx-auto">
        <section
          className="relative overflow-hidden"
          style={{ paddingTop: "40%" }}
        >
          <div className="absolute inset-0 z-0">
            <img
              className="object-cover object-center w-full"
              src="/image/section-image_1.jpg"
            />
            <div className="absolute inset-0 z-0"></div>
          </div>
          <div className="absolute inset-0">
            <div className="xl:container mx-auto my-4 px-4">
              <h1 
              style={{ backgroundColor: "rgba(49, 130, 206, 0.65)" }}
              className="text-3xl sm:text-5xl relative z-10 font-bold py-2 px-2">
                <span
                  
                  className="text-white"
                >
                  Топ 5 найекономічніших авто з бензиновими двигунами
                </span>
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div className="xl:container mx-auto my-4 px-4">
        <div className="sm:text-xs text-sm">
          <a className="text-gray-700 hover:text-gray-500" href="/">
            Головна
          </a>
          {/* <span className="text-gray-400"> / </span>
          <a className="text-gray-700 hover:text-gray-500 capitalize" href="">
            Топ 5 обзоры
          </a> */}
          <span className="text-gray-400"> / </span>
          <span className="text-gray-700 capitalize">Самі економічні автомобілі з бензиновими двигунами</span>
        </div>
      </div>
      <div className="xl:container mx-auto my-4 px-4 sm:text-xs text-sm">
        Опубликовано: <strong>Avtovolodinnya</strong> | <strong>25/12/2020</strong> 
      </div>
      <main className="my-6 sm:my-10">
        <div className="xl:container mx-auto my-4 px-4 flex flex-wrap">
          <div className="sm:w-8/12">
          <p className="my-4">
            Багато водіїв хочуть заощадити паливо при покупці автомобіля. Значення споживання базуються на стандартних методах вимірювання на випробувальний стенд.
          </p>
          <p className="my-4">
            На avtovolodinnya.com ми зібрали значення споживання палива для 5 найекономічніших авто з бензиновими двигунами (витрата на 100 кілометрів у змішаному циклі).
          </p>
          {
            data.map((i, idx) => {
                return (
                  <div className="my-5" key={`top5-car-${idx}`}>
                    <CarEntity pos={++idx} car={i} />
                    
                  </div>
                    
                )
              })
          }

          </div>
          <div className="sm:w-4/12 my-4 pl-10">
            <p>
              <a 
                className="text-blue-600 hover:text-blue-400"
                href="mailto:avtovolodinnya@gmail.com"><strong>Contact us</strong></a>
              
            </p>
          </div>

          
        </div>
      </main>

      <Footer />
    </GaWrapper>
  );
}



export async function getStaticProps(context) {


  const url = `public/top5.json`
  const rawData = fs.readFileSync(url)

  const data = JSON.parse(rawData)

  //read price
  const getPrice = data.map(i => {
    const idsh = i.uniqueid

    const priceUrl = `public/manufacturers/${i.manufacturer}/prices/${i.uniqueid}.json`

    const currentRawJData = fs.readFileSync(priceUrl, 'utf8')
    const currentJData = JSON.parse(currentRawJData)
    const currentJPrice = currentJData[currentJData.length - 1].price

    return {...i, price: currentJPrice}
  })

  return {
    props: {
      data: getPrice
    }, // will be passed to the page component as props
  }
}

export default TopFive;
