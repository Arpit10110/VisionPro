import React from 'react'
import "./Section2.css"
import Section2Video from "../../assets/SectionVideo.mp4"
const Section2 = () => {
  return (
   <>
   <div className="section2">
    <div className="section2-Cont">
            <h2>Entertainment</h2>
            <p>The ultimate theater.Wherever you are.</p>
    </div>
    <div className="sec2-video">
        <video src={Section2Video} loop={true} muted={true} autoPlay={true} />
    </div>
   </div>
   </>
  )
}

export default Section2
