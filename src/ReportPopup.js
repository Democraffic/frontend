import React, { useState } from 'react'

import { ImCross } from 'react-icons/im'
import { useAppContext } from "AppContext"

import { post } from "utils"

const ReportPopup = () => {

  const { position, userData, updateReports, selectedReport, setSelectedReport } = useAppContext()

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [solution, setSolution] = useState('')
  const [loading, setLoading] = useState(false)

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

        <div className="flex flex-col space-y-2 p-3">
          <p className="text-center text-xl text-indigo-800 font-semibold mb-3">{ selectedReport.title }</p>


          <div className="text-sm font-bold text-gray-700 tracking-wide">Report Title</div>
          <input className="w-full text-lg py-2 text-gray-800 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Missing Bus Stop" onChange={(e) => setTitle(e.target.value)} />

          <div className="text-sm font-bold text-gray-700 tracking-wide">Report Description</div>
          <input className="w-full text-lg py-2 text-gray-800 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="I have to walk for hours" onChange={(e) => setDesc(e.target.value)} />

          <div className="text-sm font-bold text-gray-700 tracking-wide">Upload Image</div>

          <div className="text-sm font-bold text-gray-700 tracking-wide">Propose a solution</div>
          <input className="w-full text-lg py-2 text-gray-800 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Build one here please :)" onChange={(e) => setSolution(e.target.value)} />

          <flex className="flex justify-center">
            <div className="bg-indigo-700 text-lg text-center rounded-md shadow-md px-3 py-2">Report</div>
          </flex>
        </div>

      </div>
    </div>
  )
}

export default ReportPopup
