// import Image from 'next/image'

function SectionTwo() {
  return (
    <div className="mt-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative border border-gray-200 rounded-lg px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-10 xl:p-14">
      <h2 className="text-2xl leading-8 font-semibold font-display text-gray-900 sm:text-3xl sm:leading-9">У нас буде ще більше...</h2>
      <p className="mt-2 max-w-2xl w-2/3 text-base leading-6 text-gray-500">
        Хочете дізнатися першим, коли ми додамо нові моделі? Підпишіться на нашу розсилку, і ми будемо надсилати вам електронного листа щоразу, коли ми випускаємо оновлення бази виробників .
      </p>
      
     <div className="hidden lg:block absolute inset-y-0 lg:left-2/3 xl:left-1/2 right-0 w-1/3">

        <img 
          className="object-cover object-left" 
          src="/image/section-image_1.jpg" 
          width={977}
          height={600}
          alt="Cars on the road"/>
      </div>
    </div>
  </div>
  )

}

export default SectionTwo

