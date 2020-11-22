import getArrayToStr from '../../utils/getArrayToStr'

const { default: Manufacturer } = require("../../pages/[manufacturer]")

function ModelHeader(props) {
  const { manufacturer, 
          model, 
          designation, 
          price,
          data
        } = props
        
  const configurations = data.filter(i => typeof i.model === 'string')
  
  const getAllPrices = configurations.map(i => i.price).sort((a,b) => a-b);

  const getAllConsumptions = configurations
    .map(i => i.fuel.fuel_consumption_urban)
    .sort((a,b) => a-b)
  const getConsumptionsStr = getArrayToStr(getAllConsumptions)

  const getAllEngines = configurations
    .map(i => i.engine.engine_displacement.toFixed(1))
    .sort((a,b) => a-b)
  // .filter((value, index, self) => self.indexOf(value) === index)

  const getAllEnginesStr = getArrayToStr(getAllEngines)

  return (
    <div className="xl:container mx-auto px-4 mb-3">
      <div className="my-4">
        <h1 className="font-semibold text-base sm:text-2xl text-gray-700">
          Вартість володіння 
          <span> {manufacturer.toUpperCase()} </span>
          <span> {model.replace('_', ' ').toUpperCase()} </span>
          <span> {designation} </span>
          <span> за <strong>5</strong> років</span>
        </h1>
        <p className="text-sm">
          Двигуни: {getAllEnginesStr} л
        </p>
        <p className="text-sm">
          Витрата пального: {getConsumptionsStr} л/100км
        </p>
      </div>
    </div>
  )
}

export default ModelHeader