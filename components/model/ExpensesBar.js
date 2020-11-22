import React from 'react'
import Wheels from './Wheels'
import Parking from './Parking'
import CarWash from './CarWash'
// import Alarms from './Alarms'

function ExpensesBar(props) {
  return (
    <div className="xl:container mx-auto px-4 bg-blue-100 rounded px-4">
      <section className="mt-6">
        
        <div className="flex flex-row">
          <div className=" w-40 rounded py-2">
            <h3 className="text-base text-gray-700 mb-1">Стахування</h3>

            <div className="flex flex-row items-center justify-start px-1">
              <input
                id="kasko"
                type="checkbox"
                className="border border-gray-500 px-2 py-1 mr-1 cursor-pointer"
                onChange={props.handleCheckClick}
                checked={props.hasFullInsurance}
              />
              <label
                className="cursor-pointer leading-tight sm:leading-normal hover:bg-gray-200"
                htmlFor="kasko"
              >
                КАСКО
              </label>
            </div>
            <div className="flex flex-row items-center justify-start px-1">
              <input
                disabled
                defaultChecked
                id="osago"
                type="checkbox"
                className="border border-gray-500 px-2 py-1 mr-1 cursor-pointer"
              />
              <label
                className="cursor-pointer leading-tight sm:leading-normal hover:bg-gray-200"
                htmlFor="osago"
              >
                ОСАГО
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
                  {props.hasFullInsurance && ` КАСКО и ОСАГО `}
                  {!props.hasFullInsurance && ` тільки ОСАГО `}
                </div>
              </div>
            </div>
          </div>

          <Parking
            calculateParking={props.calculateParking}
            parking={props.parking}
            parkingPrice={props.parkingPrice}
            parkingExpensesArray={props.parkingExpensesArray}
            updateParkingPrice={props.updateParkingPrice}
          />

          <CarWash
            carwash={props.carwash}
            setNumberOfCarWash={props.setNumberOfCarWash}
          />

          <Wheels
            wheels={props.wheels}
            calculateWheels={props.calculateWheels}
          />
        </div>
      </section>
    
    </div>
  );
}

export default ExpensesBar