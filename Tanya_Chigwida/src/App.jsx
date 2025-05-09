import { useState } from 'react'
import './App.css'
import Landing from './LandingPage'
import Sidebar from './Sidebar'
import About from './AboutMe'
import Skills from './Skill'



function App() {

  return (
    <>

    <div>
      <Sidebar />
    </div>
      <div>
      <Landing />
      </div>
        <div>
          <About />
        </div>
        <div>
          <Skills />
        </div>


        
    </>
  )
}

export default App
