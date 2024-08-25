import React, { useEffect, useRef } from 'react';
import "./Section4.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Section4 = () => {
    const canvasRef2 = useRef(null);
    const imageCollection = [];
    let countLoad = 1;
    
    const imagesDetails = {
      currentIndex: 1,
      lastIndex: 824,
    };
  
    const uploading = () => {
      for (let i = 1; i <= imagesDetails.lastIndex; i++) {
        const imgUrl = `/SecondFrames/frame_${i.toString().padStart(4, "0")}.jpeg`;
        console.log(imgUrl);
        const image = new Image();
        image.src = imgUrl;
        image.onload = () => {
          countLoad++;
          if (countLoad === imagesDetails.lastIndex) {
             console.log("imgUrl");
            loadImage(imagesDetails.currentIndex);
            startAnimation();
          }
        };
        imageCollection.push(image);
      }
    };
  
    const loadImage = (index) => {
      const canvas = canvasRef2.current;
      const ctx = canvas.getContext('2d');
      const img = imageCollection[index];
  
      // Set canvas dimensions to match the window size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      // Calculate scaling factor to maintain aspect ratio
      const scaleX = canvas.width / img.width;
      const scaleY = canvas.height / img.height;
      const scale = Math.max(scaleX, scaleY);
  
      // Calculate the new dimensions of the image
      const newWidth = img.width * scale;
      const newHeight = img.height * scale;
  
      // Calculate the offset to center the image on the canvas
      const offsetX = (canvas.width - newWidth) / 2;
      const offsetY = (canvas.height - newHeight) / 2;
  
      // Clear the canvas before drawing the new image
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Enable smooth image scaling
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
  
      // Draw the image on the canvas with the calculated scaling and offset
      ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
  
      // Update the current index
      imagesDetails.currentIndex = index;

    };
  
    const startAnimation = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section4",
          start: "top top",
          scrub: 2,
        },
      });
  
      tl.to(imagesDetails, {
        currentIndex: imagesDetails.lastIndex,
        onUpdate: () => loadImage(Math.floor(imagesDetails.currentIndex)),
      });
    };
  
    useEffect(() => {
      uploading();
    }, []);
  
  return (
   <>
   <div className="Section4-main">
    <div className="section4">
        <div className="section4-upperSticky">
        <canvas ref={canvasRef2}></canvas>
        </div>
    </div>
   </div>
   </>
  )
}

export default Section4
