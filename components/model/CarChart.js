import React from 'react'
import ChartItem from './ChartItem'

function CarChart(props) {
  const {
    costOfOwn,
    sortedCosts,
    isMobile
  } = props

  const ChartItems = sortedCosts.map((i,idx) => {

    if (idx%2 === 0) {
      return (
        <ChartItem 
          key={i.name} 
          colorTone={8 - idx} 
          parameterName={i.name} 
          costOfOwn={costOfOwn} 
          parameter={i.value} 
          isOdd={true}
          isMobile={isMobile}
          />
      )
    }

    return (
      <ChartItem 
        key={i.name} 
        colorTone={8 - idx} 
        parameterName={i.name} 
        costOfOwn={costOfOwn} 
        parameter={i.value} 
        isOdd={false}
        isMobile={isMobile}
      />
    )
  })

  return (
    <>
    <style global jsx>{`
    .pointer {
      height: 27px;
    }
    
    .circle {
      border-radius: 50%;
      height: 7px;
      width: 7px;
    }
    
    .chart-wrap.horizontal .line {
      height: 20px;
      width: 1px;
    }
    .chart-wrap.vertical .line {
      height: 1px;
      width: 20px;
    }
    
    .chart-bar {
      /* height: 52px; */
    }
    
    .chart-wrap.horizontal {
      height: 182px;
    }
    
    .chart-wrap.vertical {
      height: 360px;
      width: 310px;
    }
      `}</style>
    <div className="xl:container mx-auto px-4 sm:block">
    <div className="px-4 my-6">
      <div 
        className={`${isMobile? 'flex flex-col justify-start chart-wrap mx-auto vertical' : 'flex justify-start flex-row chart-wrap mx-10 horizontal'}`}
        >
      {ChartItems} 
      </div>
    </div>
  </div>
  </>
  )
}


export default CarChart