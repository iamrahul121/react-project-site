import React from 'react'
import NavBar from './NavBar';
import Header from './Header';
import WorkQuality from './WorkQuality';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import '../Main.css'
import '../MediaQuries.css'


const Home = () => {
  return (
    <>
      <NavBar/>
      <Header/>
      <WorkQuality/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home;