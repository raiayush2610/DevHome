import "./Feature.css"

import image1 from '../../imgs/7.jpg';
import image2 from '../../imgs/9.jpg';
import image3 from '../../imgs/8.jpg';


import React  from 'react'

import {  NavLink, useNavigate } from "react-router-dom";



function Feature() {
 const navigator = useNavigate()

  const Card1 = ()=>{
    navigator('/plan')
  }

  return (
          <>
     
      
      <div className="feature">
          <div className="feature-title center">
            <h5 className="">Feature</h5>
          </div>
          <div className="feature-body">
             {/* card 1 */}
           <div className="card1">
            <NavLink to ="/contact" className="a-nav nav-link">
                <img  className="card-img"src={image1} alt="" srcset="" />
              <div className="card-body">
              <div className="card-title">
                <h5 >3 bedrooms duplex</h5>
                <p> Shivpur Varanasi</p>
                <h4>₹4500 Crore</h4>
                </div>
                <div className="list-item">
                 <div className="item1"><p>3BHK </p> 
                     <p> duplex</p><p> House</p></div>
                    <div className="item2"><p>1950 sft</p></div>
                    <div className="item3"><p>5</p></div>
                </div>
              </div>
              </NavLink>
              <button className="card-button" type="button" onClick={Card1}>Book Now</button>
              
              </div>
              {/* card 2 */}
            <div className="card2">
            <img  className="card-img"src={image2} alt="" srcset="" />
            <div className="card-body">
                <div className="card-title">
                  <h5 >3 bedrooms duplex</h5>
                  <p> Shivpur Varanasi</p>
                  <h4>₹4500 Crore</h4>
                </div>
                {/* 3 bedrooms duplex */}
                <div className="list-item">
                 <div className="item1"><p>3 </p> 
                     <p> Bedroom</p><p> Duplex</p></div>
                    <div className="item2"><p>1950 sft</p></div>
                    <div className="item3"><p>5</p></div>
                </div>
              </div>
              <button className="card-button" type="button">Click Me!</button>
            </div>

            {/* card 3 */}
            <div className="card3">
            <img  className="card-img"src={image3} alt="" srcset="" />
              <div className="card-body">
                <div className="card-title">
                  <h5>Dev Residency</h5>
                  <p>RingRoad Varanasi</p>
                  <h4>₹45 Crore</h4>
                </div> 
                <div className="list-item">
                 <div className="item1"><p>3 </p> 
                     <p> Bedroom</p><p>Duplex</p></div>
                    <div className="item2"><p>1950 sft</p></div>
                    <div className="item3"><p>5</p></div>
                </div>
              </div>
              <button className="card-button" type="button">Click Me!</button>
              </div>
          </div>

      </div>

   

      
    
    
  
    
    
    
    
    
    </>
  
  )
}

export default Feature;
