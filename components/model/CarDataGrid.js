import React from 'react'
import Wheels from './Wheels'
import Parking from './Parking'
import CarWash from './CarWash'
// import Alarms from './Alarms'

function CarDataGrid(props) {
  return (
    <div className="xl:container mx-auto">
      <section className="px-4 mt-6">
        <h2 className="font-semibold text-lg sm:text-2xl text-gray-800 mb-2">
          Основні витрати
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <div className="bg-gray-100  rounded p-2">
            <h3 className="font-semibold text-lg text-gray-700 mb-1">Стахування</h3>

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
        </div>
      </section>
      <section className="px-4 mt-6">
        <h2 className="font-semibold text-lg sm:text-2xl text-gray-800 mb-2">
          Інші витрати
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
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
          {/* <Alarms /> */}
        </div>
      </section>
    </div>
  );
}

export default CarDataGrid