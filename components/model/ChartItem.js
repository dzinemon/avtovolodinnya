import React from 'react'
import formatNumber from '../../utils/formatNumber'
import calculatePercentage from '../../utils/calculatePercentage';
import {NAMING} from '../../hardcoded/hardcoded'

function ChartItem(props) {

  const {
    costOfOwn, 
    colorTone, 
    parameter, 
    parameterName, 
    isOdd, 
    isMobile} = props;

  const cp = `${calculatePercentage(parameter,costOfOwn)}%`;

  return (
    <div 
    title={String(isOdd)}
    className={`${isOdd? ` w-0 duration-1000 chart-item flex flex-sart  sm:flex-col-reverse sm:self-auto self-end sm:flex-col sm:justify-end`: `
    w-0 duration-1000 chart-item flex flex-sart sm:flex-col flex-row-reverse sm:self-auto self-start sm:flex-col sm:justify-end`} `} 

      // className={`w-0
      //   duration-1000
      //   chart-item flex flex-sart sm:flex-col sm:justify-end 
      //   sm:flex-col${isOdd? `-reverse sm:self-auto self-end`: ` flex-row-reverse sm:self-auto self-start`} 
      //   `} 
      style={{
        height: isMobile? cp : 'auto',
        width: isMobile? 'auto' : cp,
        transitionProperty: isMobile? 'height' : 'width'
      }}
      >
      <div className={`chart-bar bg-blue-${colorTone}00 sm:h-12 h-auto w-24 sm:w-auto`}></div>
      <div 
        // className={`section-caption sm:items-none items-center justify-center sm:justify-none flex sm:flex-col${isOdd? `-reverse `: ` flex-row-reverse`}`}
        className={`${isOdd? `section-caption sm:items-none items-center justify-center sm:justify-none flex sm:flex-col-reverse `: ` section-caption sm:items-none items-center justify-center sm:justify-none flex sm:flex-col flex-row-reverse`}`}
      >
        <div 
          // className={`pointer flex flex-row sm:flex-col${isOdd? `-reverse`: ` flex-row-reverse`} items-center text-center`}
          className={`${isOdd? `pointer flex flex-row sm:flex-col-reverse items-center text-center` : `pointer flex flex-row sm:flex-col flex-row-reverse items-center text-center`}`}
          >
          <div className={`line bg-blue-${colorTone}00`}></div>
          <div className={`circle bg-blue-${colorTone}00`}></div>
        </div>
        <div className={`caption h-10 flex flex-col items-center text-center text-xs sm:text-base w-20 sm:w-56`}>
          <div className="text-xs sm:text-sm leading-none relative sm:w-56">
            {NAMING[parameterName]}
          </div>
          <span className="text-xs font-semibold text-gray-800 relative sm:w-40">{formatNumber(parameter)} <span className="text-gray-700">грн</span></span>
        </div>
      </div>
    </div>
  )
}

export default ChartItem