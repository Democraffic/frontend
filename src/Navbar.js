import React from 'react'

import { useAppContext } from "AppContext"

const Navbar = () => {
  const { sidebarOpen, setSidebarOpen } = useAppContext()

  return (
    <div className="h-14 bg-indigo-800 shadow-xl flex items-center">
      <button class={`text-gray-300 w-12 h-12 relative focus:outline-none z-10 ${sidebarOpen ? 'text-indigo-800' : ''}`} onClick={() => setSidebarOpen(!sidebarOpen)}>
        <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
          <span aria-hidden="true" class={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${sidebarOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
          <span aria-hidden="true" class={`block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${sidebarOpen ? 'opacity-0' : ''}`}></span>
          <span aria-hidden="true" class={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${sidebarOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
        </div>
      </button >
      <div className="ml-2">
        <div className="font-bold text-2xl">
          Democraffic
        </div>
        <div className="text-sm -mt-1 text-center"> Traffic for citizens</div>
      </div>

    </div>
  )
}

export default Navbar
