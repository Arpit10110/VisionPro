import React from 'react'
import Section3img1 from "../../assets/Section3img1.jpg"
import Section3img2 from "../../assets/Section3img2.jpg"
import Section3img3 from "../../assets/Section3img3.jpg"
import "./Section3.css"
const Section3 = () => {
  return (
   <>
   <div className="section3">
    <div className="sub1sec3">
        <div className="sub1sec3cont">
            <h2>Innovation you can see, hear, and feel.</h2>
        </div>
        <div className="sub1sec3img">
            <img src={Section3img1} alt="Section3img1" />
        </div>
    </div>
    <div className="sub2sec3">
        <div className="sub2sec3cont">
            <h2>Responsive, precision eye tracking.</h2>
            <p>A high-performance eye-tracking system of LEDs and infrared cameras projects invisible light patterns onto each eye. This advanced system provides ultraprecise input without your needing to hold any controllers, so you can accurately select elements just by looking at them.</p>
        </div>
        <div className="sub2sec3img">
            <img src={Section3img2} alt="Section3img2" />
        </div>
    </div>
    <div className="sub3sec3">
        <div className="sub3sec3cont">
            <h2>A sophisticated sensor array.</h2>
            <p>A pair of high-resolution cameras transmit over one billion pixels per second to the displays so you can see the world around you clearly. The system also helps deliver precise head and hand tracking and real‑time 3D mapping, all while understanding your hand gestures from a wide range of positions.</p>
        </div>
        <div className="sub3sec3img">
            <img src={Section3img3} alt="Section3img3" />
        </div>
    </div>
   </div>
   </>
  )
}

export default Section3
