import React from 'react';
// import sumTheArray from '../utils/sumTheArray'

function Parking(props) {

  const { parking, parkingPrice } = props;

  return (
    <div className="bg-gray-100  rounded p-2">
      <h3 className="font-semibold text-lg text-gray-700 mb-1">
        АвтоСтоянка
      </h3>
      
      <div className="flex flex-row items-center justify-start px-1">
        <input type="radio" id="contactChoice1"
          className="border border-gray-500 px-2 py-1 mr-1 cursor-pointer"
          name="parking" 
          value="free"
          onChange={props.calculateParking}
          checked={parking === 'free'? true : false }
            />
        <label className="cursor-pointer leading-tight sm:leading-normal hover:bg-gray-200" htmlFor="contactChoice1">Не враховувати
        </label>
      </div>
      <div className="flex flex-row items-center justify-start px-1">
        <input type="radio" id="contactChoice2"
          className="border border-gray-500 px-2 py-1 mr-1 cursor-pointer"
          name="parking" 
          value="paid"
          onChange={props.calculateParking}
          checked={parking === 'paid'? true : false }
          />
        <label className="cursor-pointer leading-tight sm:leading-normal hover:bg-gray-200" htmlFor="contactChoice2">Платний паркінг
        </label>
      </div>
      
      <div className={(props.parking === 'paid') ? 'block' : 'hidden'}>
        <label className="block text-gray-700 text-xs mb-1 mt-2" htmlFor="parking-price">
          Введіть витрати на паркінг на місяць на даний момент
        </label>
        <input id="parking-price"
          name="parking-price"
          placeholder={parkingPrice}
          className="block appearance-none w-full sm:w-1/2 bg-gray-100 border border-blue-500 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          // value={parkingPrice}
          onChange={props.updateParkingPrice}
        />
      </div>

      <div className="text-xs py-1">
        <div className="flex flex-row items-start">
          <div className="px-1">
            <div className="w-4 h-4 rounded-full px-1 text-center bg-blue-300 text-white font-bold"> 
              i
            </div>
          </div>
          <div className="px-1 text-gray-700">
          
          {props.parking === 'paid' &&  `Витрати: ${parkingPrice} грн/місяц`}
          {props.parking === 'free' &&  `Ніяких витрат`} 
          
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Parking