import { useEffect } from "react"

import Breadcrumbs from '../../components/breadcrumbs'

import fs from 'fs'
import path from 'path'

function Manufacturer({availableModels}) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ ] );

  return (
    <div>
      
      
      <Breadcrumbs />
      
      <div>
        Manufacturer page
      </div>

      {availableManufacturers.map((i, idx) => (
            <div key={idx} className="w-64 p-4">
              <Link href={`/${i.filename.toLowerCase()}`}>
                <a className="block hover:text-blue-600 transition transition-transform hover:scale-105 transform duration-500">
                <div className="font-bold text-base md:text-xl">{i.filename.toUpperCase()}</div>
                </a>
              </Link>
            </div>
          ))}
      
    </div>
  )
}

export async function getStaticProps()

export default Manufacturer