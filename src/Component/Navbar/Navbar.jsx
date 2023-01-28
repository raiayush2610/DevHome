import React from 'react'
import {NavLink} from "react-router-dom";
import "./navbar.css"
function Navbar() {

  return (
    <div>
      <nav class="navbar  navbar-expand-lg navbar-dark bg-dark">
        <div className='nav'>
        <NavLink to = "/" className="navbar-brand">Dev Home
        </NavLink>
        </div>
        
        <button class=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><NavLink to = "/listprov" className="a-nav nav-link active">Listing Properties</NavLink></li>
        <li class="nav-item"><NavLink to = "/aboutus" className="a-nav nav-link active">About Us</NavLink></li>
        <li class="nav-item"><NavLink to = "/plan" className="a-nav nav-link active">Future Plan</NavLink></li>
        <li class="nav-item"><NavLink to ="/contact" class="a-nav nav-link active" className="a-nav nav-link active" >Contact Us</NavLink>
        </li>        
      </ul>
      </div>
    
  </nav> 
    </div>
  )
}

export default Navbar
