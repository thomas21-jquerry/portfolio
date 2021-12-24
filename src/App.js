import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState} from 'react';
import Navbar from './Component/navbar';
import Header from "./Component/header";
import Contact from "./Component/Contact";
import AboutMe from './Component/aboutMe';



function App() {
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()

  window.addEventListener('mousemove',e => {
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })

  return (
     

      
      <div className="outerBody">
         
        
        <div className="navbarcolor">
          <Navbar />
        </div>
        <Header />
        <AboutMe />
        <Contact />


        <div className='cursor' style={{
        left: cursorX+2 +"px",
        top: cursorY+2+"px"
      }}> </div>
      <div className='cursor' style={{
        left: cursorX +"px",
        top: cursorY+"px"
      }}> </div>
        
      </div>
    
  );
}

export default App;
