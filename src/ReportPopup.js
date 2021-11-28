import React, { useState } from 'react'

import { ImCross } from 'react-icons/im'
import { useAppContext } from "AppContext"


const ReportPopup = () => {

  const { selectedReport, setSelectedReport } = useAppContext()

  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex items-center justify-center rounded-md shadow-md z-40">
      <div className="bg-gray-100 flex-grow h-full w-full rounded-md shadow-md">


        <div className="flex justify-end" >
          <div className="ml-auto text-sm borders rounded-full p-3 mt-2 mr-2 text-md text-gray-400 hover:bg-gray-300"
            onClick={() => setSelectedReport(false)}
          >
            <ImCross />
          </div>
        </div>

        <div className="flex flex-col space-y-2 p-3 justify-center">
          <p className="text-center text-xl text-indigo-800 font-semibold mb-3">{ selectedReport.title }</p>
          <p className="text-center text-lg text-gray-800 font-semibold mb-3">{selectedReport.description}</p>
          {selectedReport.media.length && <img className="w-3/4" src={selectedReport.media[0]} />}
        </div>

      </div>
    </div>
  )
}

export default ReportPopup
