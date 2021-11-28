import React, { useState } from 'react'

import { TiWarningOutline } from 'react-icons/ti'

import MapPopUp from 'MapPopUp';


const ReportMap = () => {

  const [ popupMounted, setPopupMouted] = useState(false)

  return (
    <div className="relative h-full">
      { popupMounted && <div className="absolute top-0 left-0 h-full w-full items-center flex py-12 z-30 justify-items rounded-sm shadow-sm bg-gray-800 opacity-70"></div> }
      { popupMounted && <MapPopUp /> }
      <div className="absolute right-0 bottom-0 rounded-full bg-red-400 text-4xl shadow-md p-2 mr-5 mb-5 z-10" onClick={() => setPopupMouted(true)}>
        <TiWarningOutline />
      </div>
    </div>
  )
}

export default ReportMap
