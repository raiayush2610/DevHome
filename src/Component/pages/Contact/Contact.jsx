import React from 'react'
import "./contact.css"
import profile from '../../imgs/profile.png';
import { Mail } from '../../Icon/Mail';
import { Phone } from '../../Icon/Phone';
function Contact() {
  return (
    <div className="middle-container2" >
      <div className='image-div'>
        <img  className="profile-img" src={profile} alt="" srcset=""/>
      </div>
    <div className="profile-row">
        <h1>Anil Singh</h1>
        <p> Dev Home </p>
       
        <p>BHEL GATE Tarana Shivpur</p>
        <div className="contract-details">
        <p><a className="btn" href="mailto:ayushayushravi@gmail.com"><Mail/></a></p>
        <p><a className="btn" href="tel:+918115164343"><Phone/></a>  </p>
        <p><a className="btn" href="tel:+916307108908"><Phone/></a>  </p>
       
        </div>
      </div>
      
      
  
    </div>
  )
}

export default Contact
