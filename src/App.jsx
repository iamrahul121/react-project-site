import React from 'react'
import Home from './components/Home';
import AboutUs from './Pages/AboutUs'
import Service from './Pages/Service'
import Contact from './Pages/ContactUs'
import Error from './Pages/Error'
import {Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
   <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/about" element={<AboutUs/>} />
    <Route exact path="/service" element={<Service/>} />
    <Route exact path="/contact" element={<Contact/>} />
    <Route path='*' element={<Error/>}></Route>
</Routes>
    </>
  )
}

export default App;