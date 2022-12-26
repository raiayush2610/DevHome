

import React from 'react'
import Home from './Component/pages/Home/Home';
import Admin from './Component/pages/Admin/Admin';
import NoPage from './Component/pages/NoPage/nopage';
import Footer from './Component/Footer/footer'
import Navbar from './Component/Navbar/Navbar';
import Contact from './Component/pages/Contact/Contact';
import Feature from './Component/pages/Home/Feature';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Carousel from './Component/pages/Carousel/Carousel';
function App() {
  return (
    
    <>
     <Router>
     <Navbar/>
                <Routes>
                  
                    <Route path = "/" element = {<Home />}/>
                    <Route path = "/contact" element = {<Contact />}/>
                    <Route path = "/Feature" element = {<Feature/>}/>
                    <Route path = "/caro" element = {<Carousel/>}/>
                    <Route path = "/admin" element = {<Admin />}/>
                    <Route path= '*' element ={<NoPage/>}/>
                    
                    
                    </Routes>
                    <Footer/> 
          </Router>   
    </>
  )
}

export default App;
