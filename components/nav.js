import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <nav className="">
      <div className="xl:container mx-auto">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/">
                <a className="flex flex-row items-center text-blue-600 hover:text-blue-400">
                  <span className="border border-blue-600 rounded-full p-1 inline-block">
                    <img className="block h-8 w-auto" src="/logo.svg" alt="Вартість володіння"/>
                  </span>
                  <span className="ml-2">Автоволодіння</span>
                </a>
              </Link>

              
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            
          </div>
        </div>
      </div>

      <div className="hidden sm:hidden">
        <div className="px-2 pt-2 pb-3">
          
        </div>
      </div>
    </nav>
  )
}

export default Nav