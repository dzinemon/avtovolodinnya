import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 text-white flex items-center flex-row font-bold">
              <Link href="/">
                <a ><img className="block h-8 w-auto mr-1" src="/logo.svg" alt="Вартість володіння"/></a>
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