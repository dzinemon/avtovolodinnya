import React from 'react';

function CarInfoBar(props) {
  return (
    <div className="xl:container mx-auto">
      <div className="px-4">
        {/* <h2 className="font-semibold text-lg sm:text-2xl text-gray-700">Вартість володіння за 5 років</h2> */}
        <p className="text-gray-700 font-semibold text-lg sm:text-2xl">
          Обрана модель:  
          <span> {props.designation} </span>
          {/* <span className=""> {props.configuration}</span> */}
          <span className=""> {props.horsepower} к.с.</span>
          
        </p>
      </div>
    </div>
  )
}

export default CarInfoBar