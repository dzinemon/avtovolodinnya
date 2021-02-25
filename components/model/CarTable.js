import React from 'react'
import dynamic from "next/dynamic"
import formatNumber from '../../utils/formatNumber'

import CarChart from './CarChart';
import CarTableRow from './CarTableRow';

import sumTheArray from '../../utils/sumTheArray'

const DynamicChart = dynamic(() => import("./CarChart"), {ssr: false})

import {
  MAINTENANCE_EXPENSES,
  REPAIR_EXPENSES,
  NAMING
} from '../../hardcoded/hardcoded';

function CarTable(props) {
  const { 
    hasFullInsurance,
    taxExpensesArray,
    fuelConsumptionArray,
    // lossOfPriceArr,
    // parkingExpensesArray,
    insuranceExpenses,
    eachYearExpensesArray,
    otherExpensesArray,
    costOfOwn
  } = props;

 

  // tax
  const totalTaxExpenses = sumTheArray(taxExpensesArray);

  // fuel
  const totalFuelConsumption = sumTheArray(fuelConsumptionArray);

  // depreciation
  // const totalDepreciation = lossOfPriceArr.reduce((acc, cur) => {
  //   return acc + Number(cur.depreciationAmount);
  // }, 0);

  // const depreciationArray = lossOfPriceArr.map((i) => i.depreciationAmount);

  // maintenance
  const totalMaintenance = sumTheArray(MAINTENANCE_EXPENSES);

  // insurance
  const totalInsurance = sumTheArray(insuranceExpenses);

  // repairs
  const totalRepairs = sumTheArray(REPAIR_EXPENSES);

  //other expenses
  const totalOtherExpenses = sumTheArray(otherExpensesArray)

  // calculate Each Year
  const fiveYearTDs = eachYearExpensesArray.map((i, idx) => {
    return (
      <td className="p-2 font-semibold" key={idx.toString()}>
        {formatNumber(i)}
      </td>
    );
  });

  const AllCosts = [
    {
      name: "totalInsurance",
      value: totalInsurance,
      array: insuranceExpenses,
    },
    {
      name: "totalMaintenance",
      value: totalMaintenance,
      array: MAINTENANCE_EXPENSES,
    },
    {
      name: "totalRepairs",
      value: totalRepairs,
      array: REPAIR_EXPENSES,
    },
    {
      name: "totalFuelConsumption",
      value: totalFuelConsumption,
      array: fuelConsumptionArray,
    },
    {
      name: "totalTaxExpenses",
      value: totalTaxExpenses,
      array: taxExpensesArray,
    }
    
  ];
  let sortedCosts;
  if (totalOtherExpenses > 0) {
     sortedCosts = [...AllCosts, {
      name: "totalOtherExpenses",
      value: totalOtherExpenses,
      array: otherExpensesArray,
    }]
  } else {
     sortedCosts = AllCosts;
  }

  // const sortedCosts = AllCosts.sort((a, b) => b.value - a.value)
  // const sortedCosts = AllCosts;

  const tableRows = sortedCosts.map((i, idx) => {
    return (
      <CarTableRow
        hasFullInsurance={hasFullInsurance}
        key={idx}
        index={idx + 1}
        currentArray={i.array}
        currentName={NAMING[i.name]}
        currentValue={i.value}
      />
    );
  });

  return (
    <div className="overflow-hidden">
      <DynamicChart 
        costOfOwn={costOfOwn}
        sortedCosts={sortedCosts}
      />
 
      <div className="xl:container mx-auto px-4 sm:overflow-y-hidden overflow-y-scroll">
        <section>
          <table className="table-auto text-sm sm:text-base w-full bg-gray-100 border-gray-200 border-2 rounded overflow-hidden border-collapse">
            <thead className="font-semibold bg-gray-100">
              <tr>
                <td className="p-2"></td>
                <td className="p-2 w-32 sm:text-base text-xs">1-й рік</td>
                <td className="p-2 w-32 sm:text-base text-xs">2-й рік</td>
                <td className="p-2 w-32 sm:text-base text-xs">3-й рік</td>
                <td className="p-2 w-32 sm:text-base text-xs">4-й рік</td>
                <td className="p-2 w-32 sm:text-base text-xs">5-й рік</td>
                <td className="p-2 font-bold w-32">Всього</td>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
            <tfoot className="bg-gray-200">
              <tr>
                <td className="font-bold p-2 font-bold">
                  Загальна Вартість Володіння
                </td>
                {fiveYearTDs}
                <td className="p-2 font-bold">{formatNumber(costOfOwn)}</td>
              </tr>
            </tfoot>
          </table>
          
        </section>
      </div>
      <div className="xl:container mx-auto px-4">
        <p className="text-xs text-gray-700 my-4">
          * Дані розрахунки зроблені на 5-ти річний термін володіння і пробігу 15,000 км
            на рік.
        </p>
      </div>
    </div>
  );
}

export default CarTable;