import "./Feature.css"
import image1 from '../../imgs/7.jpg';
import image2 from '../../imgs/9.jpg';
import image3 from '../../imgs/8.jpg';
import image4 from '../../imgs/4.jpeg';
import { Card } from "../Card/Card";
import {Carousel} from "../Carousel/Carousel";

import React  from 'react'

import { useNavigate } from "react-router-dom";

function Feature() {
 const navigator = useNavigate()

  const Card1 = ()=>{
    navigator('/p')
  }
const Card2 =()=>{
  navigator('/p2')
}
const Card3 =()=>{
  navigator('/p3')
}

  return (
          <>
     
      
      <div className="feature">
          <div className="feature-title center">
            <h5 className="">Feature</h5>
          </div>
          <div className="feature-body">
             
             <Card Image={image4}  Title1={" Duplex House"}palace={"Shivpur Varanasi"}price={"₹40 Lakh "}item2={"600 +600 sq"}p1={"3BHK" }p2={ "Duplex"}p3={"House"}item3={5}btn1={Card1} />
             <Card Image={image2}  Title1={" 3 bedrooms duplex"}palace={"Shivpur Varanasi"}price={"₹4500"}item2={"15250 sq"}p1={"3BHK" }p2={ "duplex"}p3={"House"}item3={5}btn1={Card2} />
             <Card Image={image3}  Title1={" Dev Residency"}palace={"RingRoad Varanasi"}price={"₹4500"}item2={"15250 sq"}p1={"3BHK" }p2={"duplex"}p3={"House"}item3={5}btn1={Card3} />
             
          </div>
             <Carousel Image1={image3} Image2={image2} Image3={image1}/>
         
      </div>
    </>
  
  )
}

export default Feature;
