import React from 'react'
import Navbar from "../Components/Navbar/Navbar.jsx"
import Section1 from "../Components/Section1/Section1.jsx"
import Section2 from "../Components/Section2/Section2.jsx"
import Section3 from "../Components/Section3/Section3.jsx"
import Section4 from "../Components/Section4/Section4.jsx"
import Footer from "../Components/Footer/Footer.jsx"
import LocomotiveScroll from 'locomotive-scroll';
const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
   <>
   <Navbar/>
   <Section1/>
   <Section2/>
   <Section3/>
   <Section4/>
   <Footer/>
   </>
  ) 
}

export default Home
