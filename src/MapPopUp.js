import React from 'react'

import { ImCross } from 'react-icons/im'

const MapPopUp = ({ mounted }) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex items-center justify-center rounded-md shadow-md z-40">
      <div className="bg-gray-100 flex-grow h-full w-full rounded-md shadow-md">

        <div className="flex justify-end" >
          <div className="ml-auto text-sm borders rounded-full p-2 mt-2 mr-2 text-red-800">
            <ImCross />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapPopUp
