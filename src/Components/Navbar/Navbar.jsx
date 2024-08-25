import React from 'react'
import "./Navbar.css"
//icons
import AppleIcon from '@mui/icons-material/Apple';
const Navbar = () => {
  return (
   <>
   <nav>
    <div className="logo">
        <h3><span className='NavIcon'><AppleIcon className='appleIcon'  /> </span>Apple Vision Pro</h3>
    </div>
    <div className="navlinks">
        <a href="/">Overview</a>
        <a href="https://www.apple.com/apple-vision-pro/guided-tour/">Guided</a> 
        <a href="https://www.apple.com/apple-vision-pro/specs/">TourTech Specs</a>
        <a href="https://www.apple.com/us/shop/goto/buy_vision/apple_vision_pro">Buy</a>
    </div>
   </nav>
   </>
  )
}

export default Navbar
