import React from 'react';

function Wheels(props) {
  return (
    <div className="bg-gray-100  rounded p-2">
      <h3 className="font-semibold text-lg text-gray-700 mb-1">Колеса</h3>

      <div className="flex flex-row items-center justify-start">
        <input
          type="radio"
          id="tyresNo"
          className="border border-gray-500 px-2 py-1 mr-1 cursor-pointer"
          name="tyres"
          value="tyresNo"
          defaultChecked
          onChange={props.calculateWheels}
        />
        <label
          className="cursor-pointer leading-tight sm:leading-normal hover:bg-gray-200"
          htmlFor="tyresNo"
        >
          Не враховувати
        </label>
      </div>
      <div className="flex flex-row items-center justify-start">
        <input
          type="radio"
          id="tyres"
          className="border border-gray-500 px-2 py-1 mr-1 cursor-pointer"
          name="tyres"
          value="tyres"
          onChange={props.calculateWheels}
        />
        <label
          className="cursor-pointer leading-tight sm:leading-normal hover:bg-gray-200"
          htmlFor="tyres"
        >
          Комплект сезонних Шин
        </label>
      </div>
      <div className="flex flex-row items-center justify-start">
        <input
          type="radio"
          id="tyresPlus"
          className="border border-gray-500 px-2 py-1 mr-1 cursor-pointer"
          name="tyres"
          value="tyresPlus"
          onChange={props.calculateWheels}
        />
        <label
          className="cursor-pointer leading-tight sm:leading-normal hover:bg-gray-200"
          htmlFor="tyresPlus"
        >
          Комплект шин з дисками і датчиками
        </label>
      </div>

      <div className="text-xs py-1">
        <div className="flex flex-row items-start">
          <div className="px-1">
            <div className="w-4 h-4 rounded-full px-1 text-center bg-blue-300 text-white font-bold">
              i
            </div>
          </div>
          <div className="px-1 text-gray-700">
            {props.wheels === "tyresNo" && ` ніякіх витрат `}
            {props.wheels === "tyres" &&
              ` покупка комплекту сезонних шин в перший рік і щорічно (2 рази на рік) витрати на шиномонтаж, балансування, зняття / встановлення`}
            {props.wheels === "tyresPlus" &&
              ` покупка комплекту сезонних шин, дисків, датчиків тиску в перший рік і щорічно (2 рази на рік) витрати на зняття / встановлення коліс`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wheels