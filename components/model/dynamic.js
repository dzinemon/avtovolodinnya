import { useState, useEffect } from 'react'

// import Seo from '../seo'

import CarInfo from "./CarInfo";
import CarInfoBar from "./CarInfoBar";
import CarTable from "./CarTable";
import CarDataGrid from "./CarDataGrid";
import ExpensesBar from "./ExpensesBar";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import calculateWheelsExpenses from "../../utils/calculateWheelsExpenses";
import taxesToPay from "../../utils/taxesToPay";


import {
  DEPRECIATION_RATES,
  INSURANCE_EXPENSES,
  FUEL_CONS_CHANGE,
  FIXED_INSURANCE,
  MAINTENANCE_EXPENSES,
  REPAIR_EXPENSES,
  ALL_FUELS,
  CARWASH_EXPENSES,
  PLATE_EXPENSES,
} from '../../hardcoded/hardcoded';

function ModelDynamic(props) {

  const {
    image,
    data
  } = props

  let priceUrl;
  const url = `/manufacturers/${props.manufacturer}/${props.manufacturer}_${props.model.toUpperCase()}.json`;

  const getCurrentCars = data.filter(i => typeof i.model === 'string');
  const getCurrentDate = data.filter(i => typeof i.model !== 'string');

  const [cars, setCars] = useState(getCurrentCars);

  function updateParkingPrice(e) {
    if (!isNaN(+e.target.value) && +e.target.value < 50000) {
      setParkingPrice(e.target.value);
    }
  }

  function calculateParking(e) {
    setParking(e.target.value);
    if (parking === "free") {
      setParkingPrice(0);
    }
  }

  function calculateWheels(e) {
    setWheels(e.target.value);
  }

  function setNumberOfCarWash(e) {
    setCarWash(e.target.value);
  }

  function handleChange(e) {
    e.preventDefault();
    updateCar(e.target.value);
  }

  function handleCheckClick(e) {
    setInsurance(!hasFullInsurance);
  }

  const vehicleType = "car";

  const { width } = useWindowDimensions();

  let isMobile = width < 640 ? true : false;

  const [uniqueid, setUniqueid] = useState();
  const [parkingPrice, setParkingPrice] = useState(0);
  const [parking, setParking] = useState("free");
  const [carwash, setCarWash] = useState(0);
  const [wheels, setWheels] = useState("tyresNo");
  
  // const [ otherExpenses, setOtherExpenses ] = useState(0)
  const [model, setModel] = useState('');
  const [average_fuel_consumption, setAFC] = useState(
    0
  );
  const [configuration, setConfiguration] = useState('');
  const [designation, setDesignation] = useState('');
  const [price, setPrice] = useState(0);
  const [horsepower, setHorsepower] = useState(0);
  const [fuel, setFuel] = useState('petrol');
  const [hasFullInsurance, setInsurance] = useState(true);
  const [wheelSize, setWheelSize] = useState('17');

  if (typeof uniqueid != undefined) {
    priceUrl = `/manufacturers/${props.manufacturer}/prices/${uniqueid}.json`;
  }

  useEffect(() => {
    fetch(url).then(response => {
      // console.log(response);
      
      return response.text();
    }).then(data => {
      const carsData0 = JSON.parse(data);
      const carsData = carsData0.filter(i => typeof i.model === 'string');
      setCars(carsData);
      setModel(carsData[0].model);
      setAFC(carsData[0].fuel.fuel_consumption_combined);
      setConfiguration(carsData[0].configuration);
      setDesignation(carsData[0].designation);
      // setPrice(carsData[0].price);
      setHorsepower(carsData[0].engine.power);
      setUniqueid(carsData[0].uniqueid);
      if (carsData[0].fuel === 'petrol' || carsData[0].fuel === 'hybrid') {
        setFuel('petrol');
      } else {
        setFuel('diesel');
      }
      
      if (carsData[0].hasOwnProperty('tire')) {
        setWheelSize(carsData[0].tire.radius);
      }

    }).catch(err => {
      // Do something for an error here
      console.log("Error Reading data " + err);
    });
  }, [url])


  useEffect(() => {
    fetch(priceUrl).then(response => {
      console.log(response);
      
      return response.text();
    }).then(data => {
      const currentCarPrices = JSON.parse(data);
      const actualPrice = currentCarPrices[currentCarPrices.length - 1].price;
      // const carsData = carsData0.filter(i => typeof i.model === 'string');
      console.log(actualPrice)
      setPrice(actualPrice)

    }).catch(err => {
      // Do something for an error here
      console.log("Error Reading data " + err);
    });
  }, [ uniqueid ] );

  const parkingExpenses = parking === "free" ? 0 : parkingPrice * 12;
  const parkingExpensesArray = new Array(5);
  parkingExpensesArray.fill(parkingExpenses);

  const otherExpensesArray = [];
  const carwashExpensesArray = new Array(5);

  const carwashExpenses = carwash < 1 ? 0 : CARWASH_EXPENSES * 12 * carwash;
  carwashExpensesArray.fill(carwashExpenses);

  const wheelsExpenses = calculateWheelsExpenses(
    vehicleType,
    wheelSize,
    wheels
  );

  [0, 0, 0, 0, 0].map((e, idx) => {
    let cur = (
      (carwashExpensesArray[idx] +
        parkingExpensesArray[idx] +
        wheelsExpenses[idx]) *
      (idx * 0.02 + 1)
    ).toFixed(0);
    return otherExpensesArray.push(cur);
  });


  function updateCar(el) {
    let updatedCar = cars.filter(i => typeof i.model === 'string');
    setModel(updatedCar[el].model);
    setAFC(updatedCar[el].fuel.fuel_consumption_combined);
    setConfiguration(updatedCar[el].configuration);
    setDesignation(updatedCar[el].designation);
    setPrice(updatedCar[el].price);
    setHorsepower(updatedCar[el].engine.power);
    setUniqueid(updatedCar[el].uniqueid);

    if (updatedCar[el].fuel === 'petrol' || updatedCar[el].fuel === 'hybrid') {
      setFuel('petrol');
    } else {
      setFuel('diesel');
    }

    if (updatedCar[el].hasOwnProperty('tire')) {
      setWheelSize(updatedCar[el].tire.radius);
    } 
  }
  // tax
  const taxExpensesArray = new Array(5);
  taxExpensesArray[0] = taxesToPay(price) + Number(PLATE_EXPENSES);
  taxExpensesArray.fill(0, 1);

  // fuel

  const fuelConsumptionArray = FUEL_CONS_CHANGE.map((i) => {
    if (fuel === "petrol") {
      return (150 * average_fuel_consumption * ALL_FUELS.petrol_95 * i).toFixed(
        0
      );
    }
    return (150 * average_fuel_consumption * ALL_FUELS.diesel * i).toFixed(0);
  });

  // depreciation
  let valueOfACar = price;
  const lossOfPriceArr = DEPRECIATION_RATES.map((i) => {
    let purchasePrice = valueOfACar;
    valueOfACar = (valueOfACar * (1 - i / 100)).toFixed(0);
    let depreciationAmount = (purchasePrice - valueOfACar).toFixed(0);
    return { valueOfACar, depreciationAmount };
  });

  // insurance
  const insuranceExpenses = INSURANCE_EXPENSES.map((i, idx) => {
    const baseFixedIns = FIXED_INSURANCE;
    let insIndex;

    if (horsepower <= 70) {
      insIndex = 1;
    } else if (horsepower > 70 && horsepower <= 100) {
      insIndex = 1.1;
    } else if (horsepower > 100 && horsepower <= 140) {
      insIndex = 1.2;
    } else if (horsepower > 140 && horsepower <= 190) {
      insIndex = 1.4;
    } else if (horsepower > 190 && horsepower <= 240) {
      insIndex = 1.6;
    } else if (horsepower > 240) {
      insIndex = 1.8;
    }

    if (hasFullInsurance) {
      return (
        (i * lossOfPriceArr[idx].valueOfACar) / 100 +
        insIndex * baseFixedIns
      ).toFixed(0);
    }
    return (insIndex * baseFixedIns).toFixed(0);
  });

  // calculate Each Year

  const eachYearExpenses = () => {
    let totalPerYear = new Array(5);
    totalPerYear.fill(0, 0);
    return totalPerYear.map((i, idx) => {
      return (
        Number(REPAIR_EXPENSES[idx]) +
        Number(insuranceExpenses[idx]) +
        Number(MAINTENANCE_EXPENSES[idx]) +
        // Number(lossOfPriceArr[idx].depreciationAmount) +
        Number(fuelConsumptionArray[idx]) +
        Number(taxExpensesArray[idx]) +
        Number(otherExpensesArray[idx])
      );
    });
  };

  const eachYearExpensesArray = eachYearExpenses();

  // cost of own
  const costOfOwn = eachYearExpensesArray.reduce((acc, cur) => {
    return acc + Number(cur);
  }, 0);

  const residualPrice = lossOfPriceArr[lossOfPriceArr.length - 1].valueOfACar;

  // calculate 1 km

  const irretrievablyLost = costOfOwn + price - residualPrice;

  const perKm = (irretrievablyLost / 75000).toFixed(2);

  return (
    <>
      <div className="App">
        
        {/* <div>
          width: {width} ~ height: {height}
        </div> */}
        
        <CarInfo
          image={image}
          configuration={configuration}
          designation={designation}
          price={price}
          horsepower={horsepower}
          cars={cars}
          handleChange={handleChange}
          costOfOwn={costOfOwn}
          residualPrice={residualPrice}
          perKm={perKm}
          model={model}
        />
        <CarInfoBar
          horsepower={horsepower}
          designation={designation}
          configuration={configuration}
        />

        {/* <ExpensesBar
          hasFullInsurance={hasFullInsurance}
          handleCheckClick={handleCheckClick}
          setNumberOfCarWash={setNumberOfCarWash}
          calculateParking={calculateParking}
          updateParkingPrice={updateParkingPrice}
          parking={parking}
          carwash={carwash}
          parkingExpensesArray={parkingExpensesArray}
          calculateWheels={calculateWheels}
          otherExpensesArray={otherExpensesArray}
          wheels={wheels}
          parkingPrice={parkingPrice}
        /> */}

        <CarTable
          isMobile={isMobile}
          hasFullInsurance={hasFullInsurance}
          taxExpensesArray={taxExpensesArray}
          fuelConsumptionArray={fuelConsumptionArray}
          lossOfPriceArr={lossOfPriceArr}
          insuranceExpenses={insuranceExpenses}
          eachYearExpensesArray={eachYearExpensesArray}
          costOfOwn={costOfOwn}
          parkingExpensesArray={parkingExpensesArray}
          otherExpensesArray={otherExpensesArray}
        />
        <CarDataGrid
          hasFullInsurance={hasFullInsurance}
          handleCheckClick={handleCheckClick}
          setNumberOfCarWash={setNumberOfCarWash}
          calculateParking={calculateParking}
          updateParkingPrice={updateParkingPrice}
          parking={parking}
          carwash={carwash}
          parkingExpensesArray={parkingExpensesArray}
          calculateWheels={calculateWheels}
          otherExpensesArray={otherExpensesArray}
          wheels={wheels}
          parkingPrice={parkingPrice}
        />
        
        
      </div>
      
    </>
  )
}

export default ModelDynamic