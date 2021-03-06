import React from 'react';

import CarCardImage from '../manufacturer/carcardimage'

function CarCardItem(props) {

  const { image, modelName, price, hp } = props;

  return(
    <div className="max-w-xs rounded overflow-hidden shadow-md md:shadow-lg my-2 hover:shadow-2xl transition transition-shadow duration-500 mx-auto">
      <CarCardImage
      imageSrc={image} 
      imageAlt={modelName}
      width={320}
      height={160}/>

      <div className="px-2 py-1">
        <div className="font-semibold text-sm md:text-base uppercase">{modelName}</div>
        <div className="text-xs text-gray-800">Ціна: {price} грн.</div>
        <div className="text-xs text-gray-700 font-light">Потужність: {hp} к.с.</div>
      </div>
    </div>
  )
}

export default CarCardItem