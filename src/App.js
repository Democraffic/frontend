import React, { useState } from 'react';

import { AppContext } from 'AppContext'
import Navbar from "Navbar"
import Sidebar from "Sidebar"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (

    <AppContext.Provider value={{
      // Application-wide state should be defined here!
      sidebarOpen,
      setSidebarOpen
    }}>
      <div className="App w-full h-full bg-indigo-210 relative">
        <div className="flex h-full flex-col m-0 p-0">
          <div className="w-full">
            <Navbar />
            { sidebarOpen && <Sidebar />}
          </div>
          <div className="flex-grow">
            App Content
          </div>
        </div>
      </div>

    </AppContext.Provider>
  );
}

export default App;
