import React from 'react';

import CarCardImage from '../manufacturer/carcardimage'

import getArrayToStr from '../../utils/getArrayToStr'

function CarCardItem(props) {

  const { image, modelName, price, hp } = props;

  const finalPriceString = getArrayToStr(price);
  const finalHpString = getArrayToStr(hp);

  return(
    <div className="max-w-xs rounded overflow-hidden shadow-md md:shadow-lg my-2 hover:shadow-2xl transition transition-shadow duration-500">
      <CarCardImage className="w-full h-32 md:h-40 object-cover object-center" 
      imageSrc={image} 
      imageAlt={modelName}
      width={320}
      height={160}/>

      <div className="px-2 py-1">
        <div className="font-semibold text-sm md:text-base uppercase">{modelName}</div>
        
        <div className="text-sm text-gray-800 font-semibold">Ціна: {finalPriceString} грн.</div>
        <div className="text-xs text-gray-700 ">Потужність: {finalHpString} к.с.</div>
      </div>
    </div>
  )
}

export default CarCardItem