// import {useRef,useEffect,useState} from 'react'
import Container from "layout/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import './style.scss'
import { getAvMannequins } from 'services/mannequinService';
import { canvasModelInit } from 'shared/helpers/canvasHelpers';
import { availableMannequins } from 'redux/reducers/mannequinReducer';
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
  const canvasRefs: React.MutableRefObject<HTMLCanvasElement | null>[] = [];
  const mannequins = useSelector(availableMannequins)
  const [modelData,setModelData]=useState<any>([])
    useEffect(()=>{
    if(localStorage.hasOwnProperty('basket')){
        setModelData( JSON.parse(localStorage.getItem('basket') || '[]'))
    }
 },[])
  useEffect(() => {
    canvasRefs.forEach((canvasRef, index) => {
      canvasModelInit(.3, modelData[index], 'front',canvasRef,mannequins);

    });
  }, [canvasRefs]);
  useEffect(() => {
    getAvMannequins(dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
     const dispatch = useDispatch()


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
    </div>
  );
};

export default ShopCart;
