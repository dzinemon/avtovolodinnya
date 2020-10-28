function SectionOne() {
  return (
    <section className="max-w-4xl mx-auto py-10">
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
        <div className="max-w-xs rounded overflow-hidden shadow-lg md:shadow-2xl my-2 mx-auto transition transition-shadow duration-500 p-4">
          <div className="text-4xl text-gray-900 font-bold text-center">
            5
          </div>
          <div className="text-gray-700 text-center">
            автовиробників з повним переліком моделей
          </div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg md:shadow-2xl my-2 mx-auto transition transition-shadow duration-500 p-4">
          <div className="text-4xl text-gray-900 font-bold text-center">
            69
          </div>
          <div className="text-gray-700 text-center">
            моделей з актуальними цінами
          </div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg md:shadow-2xl my-2 mx-auto transition transition-shadow duration-500 p-4">
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