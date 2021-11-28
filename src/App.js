import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { AppContext } from 'AppContext'

import ReportMap from 'views/ReportMap'

import Login from 'views/Login'

import Navbar from "Navbar"
import Sidebar from "Sidebar"

import { get } from "utils"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userData, setUserData] =  useState({})
  const [position, setPosition] = useState(null)
  const [reports, setReports] = useState([])
  const [tick, setTick] = useState(0)
  const [selectedReport, setSelectedReport] = useState(null)

    const updateTick = async () => {
      setTick(tick => tick + 1)
    }

    useEffect(async () => {
      updateTick()
      const interval = setInterval(updateTick, 5000)
      return () => clearInterval(interval)
    }, [])

    const updateReports = async () => {
      const data = await get('/api/reports')
      if (data.length != reports.length) {
        setReports(data)
      }
    }

    useEffect(updateReports, [tick])

  return (
    <AppContext.Provider value={{
      // Application-wide state should be defined here!
      sidebarOpen,
      setSidebarOpen,
      userData,
      setUserData,
      position,
      setPosition,
      reports,
      setReports,
      updateReports,
      selectedReport,
      setSelectedReport
    }}>
      <div className="App w-full h-full bg-indigo-210 relative">
        <div className="flex h-full flex-col m-0 p-0">

          <Router>
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>

              <Route exact path="/">
                <Redirect from="/" to="/login" />
              </Route>
              <Route>
                <div className="w-full">
                  <Sidebar />
                  <Navbar />
                </div>
                <div className="flex-grow">
                  <Router>
                    <Switch>
                      <Route exact path="/map">
                        <ReportMap />
                      </Route>

                      <Route exact path="/reports">

                      </Route>
                    </Switch>
                  </Router>
                </div>
              </Route>

            </Switch>
          </Router>
        </div>
      </div>

    </AppContext.Provider>
  );
}

export default App;
