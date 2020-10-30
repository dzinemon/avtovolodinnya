function SectionOne(props) {

  const { manufacturers, models } = props
  const manufacturersLength = manufacturers.reduce((acc, cur, idx) =>  acc + 1, 0)
  const modelssLength = models.reduce((acc, cur, idx) => acc + 1, 0)
  return (
    <section className="max-w-4xl mx-auto py-10">
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
        <div className="max-w-xs rounded overflow-hidden shadow-lg md:shadow-2xl my-2 w-full mx-auto transition transition-shadow duration-500 p-4">
          <div className="text-4xl text-gray-900 font-bold text-center">
            {manufacturersLength}
          </div>
          <div className="text-gray-700 text-center">
            автовиробників з повним переліком моделей
          </div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg md:shadow-2xl my-2 w-full mx-auto transition transition-shadow duration-500 p-4">
          <div className="text-4xl text-gray-900 font-bold text-center">
          {modelssLength}
          </div>
          <div className="text-gray-700 text-center">
            моделей з актуальними цінами
          </div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg md:shadow-2xl my-2 w-full mx-auto transition transition-shadow duration-500 p-4">
          <div className="text-4xl text-gray-900 font-bold text-center">
            7+
          </div>
          <div className="text-gray-700 text-center">
            показників основних та інших витрат
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne