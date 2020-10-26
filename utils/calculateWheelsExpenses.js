
import Tyres from '../hardcoded/tyres.json';
import TyrePrices from '../hardcoded/tyre-price.json';
import DiskPrices from '../hardcoded/disk-price.json';


export default function calculateWheelsExpenses(carType, wheelType, option) {
  const oneWheel = Tyres[carType];
  const oneTirePrice = TyrePrices[wheelType];
  const oneDiskPrice = DiskPrices[wheelType];

  let expensesArray = new Array(5).fill(0)

  let TPS = 950;
// 
  let fixedFirstYearExpenses;

  let oneYearWheelsExpenses;
  
  if (option === 'tyres') {
    fixedFirstYearExpenses = oneTirePrice * 4
    oneYearWheelsExpenses = (oneWheel.balancing[wheelType] + oneWheel.tirefitting[wheelType] + oneWheel.mounting[wheelType]) * 4 * 2;

    return expensesArray.map((el, idx) => {
      if (idx === 0) {
        return fixedFirstYearExpenses + oneYearWheelsExpenses
      }
      return Math.floor(oneYearWheelsExpenses * (1 + (0.02 * idx)))
    })

    // return expensesArray
  }

  if (option === 'tyresPlus') {
    fixedFirstYearExpenses = (oneTirePrice + oneDiskPrice + TPS) * 4;
    oneYearWheelsExpenses = (oneWheel.mounting[wheelType]) * 4 * 2;

    return expensesArray.map((el, idx) => {
      if (idx === 0) {
        return fixedFirstYearExpenses + oneYearWheelsExpenses
      }
      return Math.floor(oneYearWheelsExpenses * (1 + (0.02 * idx)))
    })

    // return expensesArray
  }

  
  return expensesArray

}