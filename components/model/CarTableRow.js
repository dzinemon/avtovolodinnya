import React from 'react'
import formatNumber from '../../utils/formatNumber'

import InsuranceData from './InsuranceData'

function CarTableRow(props) {

  const { currentName, currentValue, currentArray, index, hasFullInsurance } = props;

  const currentArrayTDs = currentArray.map((i,idx) => {
    return (
      <td className="p-2" key={idx.toString()} >{formatNumber(i)}</td>
    )
  });


  
  return (
    <tr className={`${index%2 === 0? 'bg-gray-100' : 'bg-gray-200' }`}>
      <td className="p-2 font-semibold">{currentName}
        {(currentName === 'Страхование') && <InsuranceData hasFullInsurance={hasFullInsurance} />}
      </td>
      {currentArrayTDs}
      <td className="p-2 font-semibold">{formatNumber(currentValue)}</td>
    </tr>
  )
}

export default CarTableRow