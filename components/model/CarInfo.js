import React from 'react';
// import Image from 'next/image'

// import CarImage from '../images/AUDI_A4_0.png'
import formatNumber from '../../utils/formatNumber'

import SelectDropdown from './SelectDropdown'

function CarInfo(props) {

  const {
    price, 
    costOfOwn, 
    residualPrice, 
    image, 
    cars,
    uniqueid
  } = props

  const currentCar = cars.filter(i => i.uniqueid === uniqueid)[0]

  let currentPriceStr = !isNaN(price) ? formatNumber(price) : 0;
  let currentCostOfOwn = !isNaN(costOfOwn) ? formatNumber(costOfOwn) : 0;
  let currentResidualPrice = !isNaN(residualPrice) ? formatNumber(residualPrice) : 0;
  let perKm = formatNumber(props.perKm)

  return (
    <div className="xl:container mx-auto px-4 mb-3">

      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2">
            <img 
              src={image} 
              alt={currentCar.model.replace('_', ' ')} 
              className="object-cover object-center" 
              width={608}
              height={342}
              />
          
        </div>
        <div className="w-full sm:w-1/2 px-4">
          <div className="my-4 sm:my-6 ">
            <label className="block text-gray-700 text-xs mb-2" htmlFor="model">
              Комплектація:
            </label>
            <div className="relative">
              <SelectDropdown
                cars={props.cars}
                handleChange={props.handleChange}
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="my-4 sm:my-6 flex flex-wrap justify-center">
            <div className="pb-2 bg-gray-100 p-2 rounded w-6/12 sm:w-full md:w-6/12 mb-2">
              <p className="text-lg text-gray-700 leading-none font-light">
                Вартість володіння <sup>*</sup>
              </p>
              <div className="text-gray-800 text-xl sm:text-2xl md:text-3xl font-bold">
                <span className="text-gray-700 text-xs">від </span>{currentCostOfOwn}{" "}
                <span className="text-gray-700 text-lg">грн</span>
              </div>
              <div className="text-xs leading-none text-gray-800">
                <sup>*</sup> Всі витрати на утримання
              </div>
            </div>
            <div className="pb-2 bg-blue-800 p-2 rounded w-6/12 sm:w-full md:w-6/12 mb-2">
              <p className="text-lg text-white leading-none font-light">
                Ціна нового автомобіля <sup>**</sup>
              </p>
              <div className="text-blue-100 text-xl sm:text-2xl md:text-3xl font-bold">
                <span className="text-gray-100 text-xs">від </span>{currentPriceStr}{" "}
                <span className="text-gray-100 text-lg">грн</span>
              </div>
              <div className="text-xs leading-none text-gray-100">
                <sup>**</sup> Ціна авто в автосалоні
              </div>
            </div>
            <div className="pb-2 bg-gray-100 p-2 border border-blue-200 rounded opacity-25 hidden">
              <p className="text-lg text-gray-800 leading-none font-light">
                Вартість після 5-и років <sup>***</sup>
              </p>
              <div className="text-gray-800 text-xl sm:text-2xl md:text-3xl font-bold">
                {currentResidualPrice}{" "}
                <span className="text-gray-700 text-lg">грн</span>
              </div>
              <div className="text-xs leading-none text-gray-800">
                <sup>***</sup> Вигода при продажу
              </div>
            </div>
            <div className="pb-2 bg-gray-100 p-2 border border-blue-200 rounded opacity-25 hidden">
              <p className="text-lg text-blue-900 leading-none font-light">
                Вартість 1 км
              </p>
              <div className="text-blue-800 text-xl sm:text-2xl md:text-3xl font-bold">
                {perKm} <span className="text-gray-700 text-lg">грн</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarInfo