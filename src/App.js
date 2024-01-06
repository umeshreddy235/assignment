import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Projects from './components/Projects/index'
import About from './components/About/Index'

import Contact from './components/Contact/index'
import NavBar  from './components/Navbar/navbar'
import {Routes,Route} from 'react-router-dom'


const App = () => {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/Projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact/>}/>
       

      </Routes>
    </>
  )
}

export default App