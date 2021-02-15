// import Image from 'next/image'
import Link from 'next/link'

function SectionReviews(props) {
  const {reviewsData} = props 
  return (
    <div>
      <section className="xl:container mx-auto py-10 px-4">
        <div className="flex flex-wrap flex-row">
          <div className="sm:w-6/12 md:w-4/12 lg:w-4/12 w-full mb-6">
            <h3 className="mt-2 text-2xl sm:text-3xl mb-4 leading-8 font-extrabold tracking-tight text-gray-900  sm:leading-10">
              Обзори, статті та Тести нових авто
            </h3>
            <p>
              <Link href={`/reviews`}>
                <a className="inline-block font-bold px-3 tracking-wider rounded py-2 hover:bg-blue-500 bg-blue-600 text-white transition transition-all duration-300">
                  Переглянути всі статті
                </a>
              </Link>
            </p>
          </div>
          
          {reviewsData.map((i,idx) => {
            return (
              <div key={`reviews-data-${idx}`}  className="sm:w-6/12 md:w-4/12 lg:w-4/12 w-full grid gap-8 grid-cols-1">
                <div className="border-l-4 border-blue-600 border-right my-2 w-full mx-auto p-4">
                  <div className="text-2xl text-gray-900 font-bold">
                    <h4 className="leading-tight mb-2">{i.data.title}</h4>
                  </div>
                    
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

export default SectionReviews;
