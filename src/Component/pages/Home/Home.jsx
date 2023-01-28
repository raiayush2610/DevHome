import React ,{useState,useEffect} from 'react'

import main from '../../imgs/6.jpg';

import './home.css'
//ejkfddcfkkfewrhjfhejwefh
function Home() {
  const[fadepro,setfadepro]= useState({
    fade: 'midle-h2'}
  )

  useEffect(()=>{
    setTimeout(() => {
     if(fadepro.fade === 'midle-h2'){
      setfadepro({fade:'middle-h2'})
     }
   }, 2000);
  },[fadepro])
 
  return (
          <>
      
        <div className="middle-container">
      <img src = {main} alt="food" className="middle-img"/>
      <div className={fadepro.fade}>
          <h1 id="codespeedy"> DEV HOMES </h1>
          <h1 id="codespeedy" className='title-city'> VARANASI</h1>
      </div>
      </div>
       
      
        
    </>
        );
    };


export default Home
