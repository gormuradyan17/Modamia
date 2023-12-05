// import {useRef,useEffect,useState} from 'react'
import Container from "layout/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import './style.scss'
import { getAvMannequins } from 'services/mannequinService';
import { canvasModelInit } from 'shared/helpers/canvasHelpers';
import { availableMannequins, mannequinDetails } from 'redux/reducers/mannequinReducer';
import ShopCartContent from 'components/ShopCart';


// // const ShopCart=()=>{
// //     const mannequins = useSelector(availableMannequins)
// //     const [modelData,setModelData]=useState<any>([])
// //     const canvasRef = useRef<HTMLCanvasElement | null>(null);

// //   useEffect(() => {
// //     getAvMannequins(dispatch)
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [])

// //   useEffect(()=>{
// //     if(localStorage.hasOwnProperty('basket')){
// //         setModelData( JSON.parse(localStorage.getItem('basket') || '[]'))
// //     }
// //  },[])

// //   useEffect(()=>{
// //     console.log(modelData,"modelData");
    
// //     // if(Object.keys(modelData).length){
// //         // canvasModelInit(.3, modelData, 'front',canvasRef,mannequins);
// //     // }

// //   },[modelData,mannequins,canvasRef])
// //   const dispatch = useDispatch()
// //     return(
// //         <Container>
// //             {/* {!Object.keys(modelData).length ? <h1>Basket is empty</h1>  :
// //       <div className="shop_container">
// //         <div className="canvas-body">
// //           <canvas className="canvas" id="canvas" ref={canvasRef}></canvas>
// //         </div>
// //         <div className="product_info_body">
// //        <ShopCartContent modelData={modelData}/>
// //         </div>
// //       </div>
// // } */}
// //     </Container>
// //     )
// // }


// // export default ShopCart;
import React, { useEffect, useRef, useState } from 'react';

const ShopCart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mannequins = useSelector(availableMannequins)
  
  const [modelData,setModelData]=useState<any>([])
    useEffect(()=>{
    if(localStorage.hasOwnProperty('basket')){
        setModelData( JSON.parse(localStorage.getItem('basket') || '[]'))
    }
 },[])
 
  useEffect(() => {
    getAvMannequins(dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
     const dispatch = useDispatch()
     useEffect(() => {
      // Retrieve the array from localStorage
      const storedData = JSON.parse(localStorage.getItem('basket') || "[]");
  
      // Get the container for canvases
      const canvasContainer = document.getElementById('canvasContainer');
  
      // Loop through the array of objects and create canvases
      storedData.forEach((object:any, index:any) => {
        // Create a canvas element
        const canvas = document.createElement('canvas');
        canvas.width = 500; // Adjust as needed
        canvas.height = 500; // Adjust as needed
  
        // Append the canvas to the container
        canvasContainer && canvasContainer.appendChild(canvas);
  
        // Get the canvas context
        const ctx = canvas.getContext('2d');
  
        // Load the image
        const img = new Image();
        img.src = object.imageUrl; // Replace 'imageUrl' with the actual property name holding the image URL in your object
  
        // Draw the image on the canvas once it's loaded
        img.onload = () => {
          // Use object properties to draw on the canvas
          ctx &&  ctx.drawImage(img, object.x, object.y, object.width, object.height);
          // Add more drawing logic based on your object properties
        };
      });
    }, []); 


  return (
    <div>
      {/* {!!modelData.length && modelData.map((item:any, index:any) => {
        const canvasRef = useRef<HTMLCanvasElement | null>(null);
        canvasRefs.push(canvasRef);
        return (
          <canvas
            key={index}
            ref={canvasRef}
          
          />
        );
      })} */}
      <canvas ref={canvasRef} width={800} height={600} />

    </div>
  );
};

export default ShopCart;
