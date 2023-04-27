import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <section className='nav_bg' id='nav'>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">TechyFame</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/service">Services</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/contact">Contact</NavLink>
        </li>
        
      </ul>
      <form class="d-flex" >
        <button class="btn nav_btn" type="submit">Login</button>
        <button class="btn nav_btn" type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</nav>
    </section>
    </>
  )
}

export default NavBar