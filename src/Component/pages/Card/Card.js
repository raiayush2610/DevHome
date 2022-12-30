import React from 'react'
import './card.css'
import {  NavLink } from "react-router-dom";

export const Card  = ({Link,Image,Title1,palace,price,item2,p1,p2,p3,item3,btn1})=>{
  return (
    <>
      <div className="card1">
            <NavLink to ={Link} className="a-nav nav-link">
                <img  className="card-img"src={Image} alt="" srcset="" />
              <div className="card-body">
              <div className="card-title">
                <h5 >{Title1}</h5>
                <p> {palace}</p>
                <h4>{price} </h4>
                </div>
                <div className="list-item">
                 <div className="item1"><p>{p1} </p> 
                     <p> {p2}</p><p>{ p3}</p></div>
                    <div className="item2"><p>{item2}</p></div>
                    <div className="item3"><p>{item3}</p></div>
                </div>
              </div>
              </NavLink>
              <button className="card-button" type="button" onClick={btn1}>Book Now</button>
              
              </div>
          </>

)};


