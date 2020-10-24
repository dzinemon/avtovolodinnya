import React from 'react';

function CarCardItem(props) {

  const { image, modelName } = props;

  return(
    <div className="max-w-xs rounded overflow-hidden shadow-md md:shadow-lg my-2 hover:shadow-2xl transition transition-shadow duration-500">
      <img className="w-full h-32 md:h-40 object-cover object-center" src={image} alt={modelName}/>
      <div className="px-2 py-1">
        <div className="font-semibold text-sm md:text-lg">{modelName}</div>
      </div>
    </div>
  )
}

export default CarCardItem