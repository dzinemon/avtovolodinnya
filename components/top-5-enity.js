import formatNumber from '../utils/formatNumber'

export default function Entity (props) {
  const { pos, car, key } = props


  return (
    <div className="my-10" key={`pos-${pos}`}>
      <div className="flex flex-row justify-start items-center w-full">
        <div className="w-1/12 font-bold text-4xl">{pos}.</div>
        <div className="w-auto ">
          <h2 className="text-4xl w-auto capitalize">{car.manufacturer} {car.model.replace('_', ' ')} {car.configuration} {car.engine.engine_dispalcement}</h2> 
        </div>
        <div className="w-auto text-gray-700 pl-2 text-2xl font-semibold">(Витрата: {car.fuel.fuel_consumption_combined} л) </div>
        {/* <a href={`/${car.manufacturer}/${car.model}/`} className="text-blue-600 w-3/12 font-semibold">Більше </a> */}
      </div>

      <img 
        className="my-6" 
      src={`/manufacturers/${car.manufacturer}/images/${car.manufacturer}_${car.model}_0.jpg`} />
      
      <ul className="my-6 text-dark-900">
        <li>Ціна: {formatNumber(car.price)} грн</li>
        <li>Витрата пального: {car.fuel.fuel_consumption_combined} л/100км</li>
        <li>Потужність: {car.engine.power} к.с.</li>
        <li>Acceleration 0-100: {car.speed.acceleration100} сек</li>
        <li>Двигатель: {Number(car.engine.engine_displacement).toFixed(1)}л </li>
        <li>Трансмісія: {car.transmission.count}{car.transmission.name}</li>
      </ul>
      
      {car.descriptione.map((i,idx) => {
        return (<p 
          className="my-6" 
          key={`${car.model}-par-${idx}`}
        >{i}</p>)
      })}
      

      <p className="my-6">
        <a 
          href={`/${car.manufacturer}/${car.model}/`}
          className="text-blue-600 hover:text-blue-400 font-bold cursor-pointer">
          Дізнайтеся більше про витрати при володінні <span className="capitalize">{car.manufacturer} {car.model.replace('_', ' ')}</span> &rarr;
        </a>
      </p>
    </div>

  )
}