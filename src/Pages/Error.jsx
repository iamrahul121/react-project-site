import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Error = () => {
  return (
    <>
    <NavBar/>
    <div className='container error_page'><h3 className='main_heading'>404 - Page Not Found</h3></div>
    <Footer/>
    </>
  )
}

export default Error