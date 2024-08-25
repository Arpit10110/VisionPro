import React from 'react'
import { HashRouter as Router,Routes,Route } from 'react-router-dom'
//pages
import Home from "./Pages/Home.jsx"
//Css
import "./Style/Style.css"
//locomotive
import LocomotiveScroll from 'locomotive-scroll';
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
   </Router>
  )
}

export default App
