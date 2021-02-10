// import Image from 'next/image'
import Link from 'next/link'

function SectionTop(props) {
  const {topData} = props
  return (
    <div>
      <section className="xl:container mx-auto py-10 px-4">
        <div className="flex flex-wrap flex-row">
          <div className="sm:w-4/12 w-full mb-6">
            <div>
              <span className="italic border border border-blue-600 font-bold px-2 py-1 rounded text-blue-600 tracking-wider">#AVTOP5</span>
            </div>
            <h3 className="mt-2 leading-8 font-extrabold tracking-tight text-gray-900 mb-4 sm:leading-10">
              <span className="text-2xl sm:text-3xl">Новий розділ <br></br>"Avtovolodinnya Top"</span> 
            </h3>
            <p>
              <Link href={`/top`}>
                <a className="inline-block font-bold px-3 tracking-wider rounded py-2 hover:bg-blue-500 bg-blue-600 text-white transition transition-all duration-300">
                  Переглянути #AVTOP статті
                </a>
              </Link>
            </p>
          </div>

          {topData.map((i,idx) => {
            return (
              <div className="sm:w-4/12 w-full grid gap-8 grid-cols-1">
                <div className="border-l-4 border-blue-600 border-right my-2 w-full mx-auto p-4">
                  <div className="text-2xl text-gray-900 font-bold">
                    <h4 className="leading-tight mb-2">{i.data.title}</h4>
                  </div>
                    <p>
                      {i.data.description}
                    </p>
                    <p>
                    <Link href={`/reviews/${i.data.slug}`}>
                      <a className="inline-block font-bold tracking-wider text-blue-600 transition transition-all duration-300">
                        Переглянути
                      </a>
                    </Link>
                  </p>
                  
                </div>
                
              </div>
            )
          })}
          
        </div>
      </section>
    </div>
  );
}

export default SectionTop;
