import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import FetchData from './FetchData'
import Error from './Error'
import Footer from './Footer'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/> } />
    <Route path='About' element= {<About/> }/>
    <Route path='Contact' element ={<Contact/> }/>
    <Route path='/*' element ={<Error/> } />
    </Routes>
    </BrowserRouter>
    <FetchData/>
    <Footer/>
      </>
  )
}

export default App
