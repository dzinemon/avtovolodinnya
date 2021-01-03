  

function SelectDropdown(props) {

  const CarsArray = Array.from(props.cars);

  const options = CarsArray.filter(i => typeof i.model === 'string').map((i,idx) => {
    return (
      <option key={idx} value={i.uniqueid}>
        {i.designation} {i.configuration} {i.engine.engine_displacement.toFixed(1)}л ({i.engine.power} к.с.) 
        {` `}
        {i.transmission.transmission === 'front-wheel drive'? 'FWD': ''}
        {i.transmission.transmission === 'all-wheel drive'? 'AWD': ''}
        {i.transmission.transmission === 'rear-wheel drive'? 'RWD': ''} {` `}
        {i.transmission.count !== 0 ? i.transmission.count : ''}
        {i.transmission.name}
      </option>
    )
  })

  return (
    <select 
      className="block appearance-none w-full bg-gray-100 border border-blue-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      id="model"
      onChange={props.handleChange}
      >
      {options}
    </select>
  )
}

export default SelectDropdown