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
    navigator('/contact')
  }


  return (
          <>
     
      
      <div className="feature">
          <div className="feature-title center">
            <h5 className="">Features</h5>
          </div>
          <div className="feature-body">
             
             <Card Image={image4} Link={"/p"} Title1={"Archana Vihar Project"}palace={"Shivpur Varanasi"}price={"₹40 & 70 Lakh "}item2={"Dream Duplex"}p1={"Available " }p2={ "Here"}p3={""}item3={21}btn1={Card1} />
             <Card Image={image4} Link={"/p"} Title1={"Duplex House"}palace={"Shivpur Varanasi"}price={"₹40 Lakh "}item2={"600 +600 sq"}p1={"" }p2={ "Duplex"}p3={"House"}item3={21}btn1={Card1} />
             <Card Image={image4} Link={"/p"} Title1={"Duplex House"}palace={"Shivpur Varanasi"}price={"₹70 Lakh "}item2={"1000 +1000 sq"}p1={"" }p2={ "Duplex"}p3={"House"}item3={21}btn1={Card1} />
             
          </div>
             <Carousel Image1={image3} Image2={image2} Image3={image1}/>
         
      </div>
    </>
  
  )
}

export default Feature;
