// import Image from 'next/image'
import Link from 'next/link'

function SectionTwo() {
  return (
    <div>
      <section className="xl:container mx-auto py-10 px-4">
        <div className="flex flex-wrap flex-row justify-between">
          <div className="sm:w-5/12 w-full">
            <div>
              <span className="italic border bg-blue-600 font-bold px-2 py-1 rounded text-white tracking-wider">#AVTOP5</span>
            </div>
            <h3 className="mt-2 leading-8 font-extrabold tracking-tight text-gray-900  sm:leading-10">
              <span className="text-2xl sm:text-3xl">Новий розділ <br></br>"Avtovolodinnya Top 5"</span> 
            </h3>
          </div>
          <div className="sm:w-6/12 w-full grid gap-8 grid-cols-1">
            <div className="border-l-4 border-blue-600 border-right my-2 w-full mx-auto p-4">
              <div className="text-2xl text-gray-900 font-bold">
                <h4 className="leading-tight mb-2">Топ 5 найекономічніших авто з бензиновими двигунами</h4>
              </div>
              
                <p className="mb-4 text-gray-700">Ми зібрали значення споживання палива для 5 найекономічніших авто з
            бензиновими двигунами</p>
                <p>
                 <Link href={`/top-5-fuel-efficient-cars`}>
                  <a className="inline-block font-bold px-3 tracking-wider rounded py-2 hover:bg-blue-500 bg-blue-600 text-white transition transition-all duration-300">
                    Переглянути наш AVTOP5
                  </a>
                </Link>
              </p>
              
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionTwo;
