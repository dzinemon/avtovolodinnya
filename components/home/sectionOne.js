function SectionOne(props) {

  const { manufacturers, models } = props
  const manufacturersLength = manufacturers.reduce((acc, cur) =>  acc + 1, 0)
  const modelssLength = models.reduce((acc, cur) => acc + 1, 0)
  return (
    <section className="xl:container mx-auto py-10 px-4">
      <div className="flex flex-wrap flex-row justify-between">
        <div className="sm:w-5/12 w-full">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Все, що вам потрібно, ми зібрали в одному місці
          </h2>
        </div>
        <div className="sm:w-6/12 w-full grid gap-8 grid-cols-1 lg:grid-cols-2">
          
            <div className=" rounded shadow-lg my-2 w-full mx-auto transition transition-shadow duration-500 p-4">
              <div className="text-4xl text-gray-900 font-bold">
                <span className="border-b-2 border-blue-600">{manufacturersLength}</span>
              </div>
              <div className="text-gray-700">
                автовиробників з повним переліком моделей
              </div>
            </div>
          
            <div className=" rounded shadow-lg my-2 w-full mx-auto transition transition-shadow duration-500 p-4">
              <div className="text-4xl text-gray-900 font-bold">
                <span className="border-b-2 border-blue-600">{modelssLength}</span>
              </div>
              <div className="text-gray-700">
                моделей з актуальними цінами
              </div>
            </div>
          
        </div>
      </div>

      </section>
  );
}

export default SectionOne