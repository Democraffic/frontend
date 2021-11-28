import React from 'react'

import { useAppContext } from 'AppContext'

const Sidebar = () => {

  const { sidebarOpen } = useAppContext()

  return (
    <div className={`transition-all absolute h-full lg:w-1/6 w-1/2 bg-indigo-200 top-0 p-4 text-xl z-50 shadow-md ${!sidebarOpen ? '-left-1/2' : 'left-0'}`}>

      <div className="flex flex-col divide-y space-y-3 mt-8 divide-indigo-300 text-indigo-700">
        <div className="flex items-center pt-2">Problems</div>
        <div className="flex items-center pt-2">Solutions</div>
        {/* Didnt know what to put here, this should change */}
        <div className="flex items-center pt-2">Voting</div>
      </div>
    </div>
  )
}

export default Sidebar
