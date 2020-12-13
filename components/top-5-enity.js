
export default function Entity (props) {
  return (
    <div className="my-10">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="w-1/12 font-bold text-4xl">{props.pos}.</div>
        <div className="w-8/12 ">
          <h2 className="text-4xl w-auto">Toyota HILUX</h2> 
        </div>
        <a href="" className="text-blue-600 w-3/12 font-semibold">More info</a>
      </div>

      <img 
        className="my-6" 
        src="/manufacturers/toyota/images/toyota_HILUX_0.jpg" />
      
      <ul className="my-6 text-dark-900">
        <li>Цена: 1200000 грн</li>
        <li>Мощность: 190 л.с.</li>
        <li>Acceleration 0-100: 9.7 сек</li>
        <li>Двигатель: 2.8л </li>
        <li>Трансмиссия: АКПП</li>
        <li>Топливо: бензин</li>
        <li>Расход топлива</li>
      </ul>

      <p className="my-6">
        A arcu cursus vitae congue. Scelerisque purus semper eget duis at tellus. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Molestie at elementum eu facilisis. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. 
      </p>
      <p className="my-6">
      In arcu cursus euismod quis viverra nibh cras. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. A arcu cursus vitae congue. Scelerisque purus semper eget duis at tellus. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Molestie at elementum eu facilisis. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Id interdum velit laoreet id. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. 
      </p>

      <p className="my-6">
        <a className="text-blue-600 font-bold">
          Узнайте больше о содержании Toyota Hilux &rarr;
        </a>
      </p>
    </div>

  )
}