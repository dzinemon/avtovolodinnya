import React from 'react';

function CarWash(props) {

  const {carwash,setNumberOfCarWash} = props;
  return (
    <div className="bg-gray-100  rounded p-2">
      <h3 className="font-semibold text-lg text-gray-700 mb-1">АвтоМийка</h3>
      <div>
        <label htmlFor="carwash" className="leading-tight sm:leading-normal">
          Виберіть кількість автомийок в місяць
        </label>

        <div className="mt-2">
          <input
            id="carwash"
            className="cursor-pointer leading-tight sm:leading-normal"
            type="range"
            defaultValue={carwash}
            min="0"
            step="1"
            max="10"
            list="tickmarks"
            onChange={setNumberOfCarWash}
            // readOnly
          />
          <datalist id="tickmarks">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </datalist>
        </div>

        <div className="text-xs py-1">
          <div className="flex flex-row items-start">
            <div className="px-1">
              <div className="w-4 h-4 rounded-full px-1 text-center bg-blue-300 text-white font-bold">
                i
              </div>
            </div>
            <div className="px-1 text-gray-700">
              {`Кількість мийок на місяць: ${carwash}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarWash