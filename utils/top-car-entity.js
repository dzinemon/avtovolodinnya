import formatNumber from '../utils/formatNumber'

export default function getCarEntity (pos, car, manufacturer) {
  const HTMLtoReturn = `<div class="mb-6 mt-16" key="pos-${pos}">
  <div class="flex flex-row flex-wrap justify-start items-center w-full">
    <div class="w-auto font-bold text-2xl sm:text-3xl pr-2">${pos}.</div>
    <div class="w-auto ">
      <h2 class="text-xl font-bold sm:text-3xl w-auto capitalize">
        ${manufacturer} ${car.model.replace('_', ' ')} 
        ${car.configuration} 
        ${Number(car.engine.engine_displacement).toFixed(1)}л 
        ${car.transmission.count}${car.transmission.name}
        </h2> 
    </div>
    <div class="sm:w-auto w-full text-gray-700 pl-2 text-md sm:text-2xl font-semibold">(Прискорення : ${car.speed.acceleration100} c) </div>
    
  </div>

  <img 
    class="my-6" 
  src="/manufacturers/${manufacturer}/images/${manufacturer}_${car.model}_0.jpg" />
  
  <ul class="my-6 text-dark-900">
    <li>Ціна: {-price-} грн</li>
    <li>Витрата пального: ${car.fuel.fuel_consumption_combined} л/100км</li>
    <li>Потужність: ${car.engine.power} к.с.</li>
    <li>Acceleration 0-100: ${car.speed.acceleration100} сек</li>
    <li>Двигун: ${Number(car.engine.engine_displacement).toFixed(1)}л </li>
    <li>Трансмісія: ${car.transmission.count}${car.transmission.name}</li>
  </ul>
  <p>
  <a href="/${manufacturer}/${car.model}/" class="text-blue-600 w-3/12 font-semibold capitalize">Вартість володіння 
  ${manufacturer} ${car.model.replace('_', ' ')} 
  </a>
  </p>
</div>`

  return HTMLtoReturn
}