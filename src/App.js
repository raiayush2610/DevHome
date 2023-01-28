

import React from 'react'
import Home from './Component/pages/Home/Home';
import Admin from './Component/pages/Admin/Admin';
import NoPage from './Component/pages/NoPage/nopage';
import Footer from './Component/Footer/footer'
import Navbar from './Component/Navbar/Navbar';
import Contact from './Component/pages/Contact/Contact';
import Feature from './Component/pages/Home/Feature';
import Plan from './Component/pages/Plan/Plan';
import About from './Component/pages/Aboutus/About';
import List from './Component/pages/ListProper/List'
import Card1 from './Component/pages/Card/card1';

 import Property from './Component/pages/Property/Property'
 import Property2 from './Component/pages/Property/Propety2'
 import Property3 from './Component/pages/Property/Property3'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// sd
function App() {
  return (
    
    <>
     <Router>
     <Navbar/>
     <Home/>
                <Routes>
                  
                    <Route path = "/" element = {<Feature/>}/>
                    <Route path = "/aboutus" element = {<About/>}/>
                    <Route path = "/contact" element = {<Contact />}/>
                    <Route path = "/Feature" element = {<Feature/>}/>
                    <Route path = "/c" element = {<Card1/>}/>
                    
                    <Route path = "/listprov" element = {<List/>}/>
                    <Route path = "/plan" element = {<Plan/>}/>
                    <Route path = "/p" element = {<Property/>}/>
                    <Route path = "/p2" element = {<Property2/>}/>
                    <Route path = "/p3" element = {<Property3/>}/>
                    <Route path = "/admin" element = {<Admin />}/>
                    <Route path= '*' element ={<NoPage/>}/>
                    
                    
                    </Routes>
                    <Footer/> 
          </Router>   
    </>
  )
}

export default App;
