import Link from 'next/link'
import FeedbackForm from './model/FeedbackForm'

function Footer() {
  return (
    <>
    <footer className="pt-10">
      <div className="bg-gray-100">
        <div className="xl:container mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          
            <div className="py-4">
              <div className="justify-start flex flex-row items-center">
                <Link href="/">
                  <a 
                    className="border border-blue-600 rounded-full p-1 hover:border-blue-400 inline-block"
                  >
                    <img className="block h-8 w-auto" src="/logo.svg" alt="Вартість володіння"/>
                  </a>
                </Link>
                <span className="ml-2 font-semibold">Автоволодіння</span>
              </div>
            </div>
            <div className="py-4 mt-3 text-sm">
              <p className="font-semibold mb-2">АвтоВиробники</p>
              <ul>
                <li><a className="capitalize text-blue-600 hover:text-blue-400" href="/audi">audi</a></li>
                <li><a className="capitalize text-blue-600 hover:text-blue-400" href="/bmw">bmw</a></li>
                <li><a className="capitalize text-blue-600 hover:text-blue-400" href="/mazda">mazda</a></li>
                <li><a className="capitalize text-blue-600 hover:text-blue-400" href="/nissan">nissan</a></li>
                <li><a className="capitalize text-blue-600 hover:text-blue-400" href="/renault">renault</a></li>
              </ul>
            </div>
            <div className="py-4 mt-3 text-sm">
              <p className="text-sm">
                Виникли питання чи пропозиції? <br/>
                Напишіть нам <span  >avtovolodinnya@gmail.com</span>
              </p>
            </div>
            <div className="py-4 mt-3 text-sm">
            <p>
              <span>Вартість володіння авто на сайті avtovolodinnya.com</span>
            </p>
            </div>
        </div>
        <hr className="my-4 border-gray-200"/>
      </div>
    </footer>
    <FeedbackForm />
    </>
  )
}

export default Footer