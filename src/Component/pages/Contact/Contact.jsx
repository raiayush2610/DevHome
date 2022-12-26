import React from 'react'
import "./contact.css"
import propifle from '../../imgs/profile.png';
function Contact() {
  return (
    <div className="middle-container2" >
      <div className='image-div'>
        <img  className="profile-img" src={propifle} alt="" srcset=""/>
      </div>
    <div className="profile-row">
        <h1>Anil Singh</h1>
        <p>Head And Ceo of Dev Home </p>
       
        <p>BHEL GATE Tarana Shivpur</p>
        <div className="contract-details">
        <p><a className="btn" href="mailto:ayushayushravi@email.com">CONTACT ME THROUGHT MAIL</a></p>
        <p><a className="btn" href="tel:+5454548">Secondary Number</a>  </p>
       
        </div>
      </div>
      
      
  
    </div>
  )
}

export default Contact
