import React from 'react';

function CarInfoBar(props) {
  const { 
    cars,
    uniqueid
   } = props

   const currentCar = cars.filter(i => i.uniqueid === uniqueid)[0]
   console.log(typeof cars)
   console.log(typeof uniqueid)
  //  console.log(JSON.stringify(currentCar))
  if (typeof cars !== 'undefined' && typeof uniqueid !== 'undefined') {
    return (
      <div className="xl:container mx-auto px-4">
        {/* {JSON.stringify(currentCar)} */}
        <div>
          {/* <h2 className="font-semibold text-lg sm:text-2xl text-gray-700">Вартість володіння за 5 років</h2> */}
          <p className="text-gray-700 font-semibold text-lg sm:text-2xl">
            Обрана модель: {` `} 
            {currentCar.model} {` `}
            {currentCar.configuration} {` `}
            {currentCar.engine.engine_displacement.toFixed(1)}л {` `}
            ({currentCar.engine.power}к.с.) {` `}
            {currentCar.transmission.transmission === 'front-wheel drive'? 'FWD': ''}
            {currentCar.transmission.transmission === 'all-wheel drive'? 'AWD': ''}
            {currentCar.transmission.transmission === 'rear-wheel drive'? 'RWD': ''} {` `}
            {currentCar.transmission.count !== 0 ? currentCar.transmission.count : ''}
            {currentCar.transmission.name}
  
            
          </p>
        </div>
      </div>
    )
  }

  return ''

  
}

export default CarInfoBar