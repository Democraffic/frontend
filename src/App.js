import React, { useState } from 'react';
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

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userData, setUserData] =  useState({})

  return (
    <AppContext.Provider value={{
      // Application-wide state should be defined here!
      sidebarOpen,
      setSidebarOpen,
      userData,
      setUserData
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
