import React from 'react';

function Alarms() {
  return (
    <div className="bg-gray-100  rounded p-2">
      <p className="font-semibold text-lg">
      Автозащита
      </p>
      <div className="flex flex-row items-center justify-start px-1">
        <label className="bg-blue-100 px-1 rounded mt-1" htmlFor="alarm">Автосигнализация
        <input 
          id="alarm" 
          type="checkbox" 
          className="border border-gray-500 px-2 py-1 ml-2 align-middle"
          // onChange={props.handleCheckClick}  
          // checked={(props.hasFullInsurance)}
        />
        </label>
      </div>
      <div className="flex flex-row items-center justify-start px-1">
        <label className="bg-blue-100 px-1 rounded mt-1" htmlFor="gps-tracker">GPS Tracker
        <input  
          id="gps-tracker" 
          type="checkbox" 
          className="border border-gray-500 px-2 py-1 ml-2 align-middle"
        />
        </label>
      </div>
      <div className="flex flex-row items-center justify-start px-1">
        <label className="bg-blue-100 px-1 rounded mt-1" htmlFor="blocker-tm">Блокиратор КПП
        <input  
          id="blocker-tm" 
          type="checkbox" 
          className="border border-gray-500 px-2 py-1 ml-2 align-middle"
        />
        </label>
      </div>
      <div className="flex flex-row items-center justify-start px-1">
        <label className="bg-blue-100 px-1 rounded mt-1" htmlFor="blocker-st">Блокиратор Руля
        <input  
          id="blocker-st" 
          type="checkbox" 
          className="border border-gray-500 px-2 py-1 ml-2 align-middle"
        />
        </label>
      </div>
    </div>
  )
}

export default Alarms