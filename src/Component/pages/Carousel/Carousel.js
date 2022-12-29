import React from 'react'
import "./cardor.css"

export const Carousel = ({Image1,Image2,Image3})=>{
  return (
    <>
    
     <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className='carso-img' src={Image1} class="carso-img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  className='carso-img'src={Image2} class="carso-img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img   className='carso-img' src={Image3} class="carso-img" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 



    </>
)};

