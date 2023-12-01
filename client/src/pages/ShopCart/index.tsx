import {useRef,useEffect,useState} from 'react'
import Container from "layout/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import './style.scss'
import { getAvMannequins } from 'services/mannequinService';
import { canvasModelInit } from 'shared/helpers/canvasHelpers';
import { availableMannequins } from 'redux/reducers/mannequinReducer';
import ShopCartContent from 'components/ShopCart';


const ShopCart=()=>{
    const mannequins = useSelector(availableMannequins)
    const [modelData,setModelData]=useState<any>([])
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    getAvMannequins(dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(()=>{
    if(localStorage.hasOwnProperty('basket')){
        setModelData( JSON.parse(localStorage.getItem('basket') || '[]'))
    }
 },[])

  useEffect(()=>{
    if(modelData.length){
      modelData.forEach((item:any)=>(
        canvasModelInit(.3, item, 'front',canvasRef,mannequins)
      ))
    }

  },[modelData,mannequins,canvasRef])
  const dispatch = useDispatch()
    return(
        <Container>
            {!Object.keys(modelData).length ? <h1>Basket is empty</h1>  :
      <div className="shop_container">
        <div className="canvas-body">
          <canvas className="canvas" id="canvas" ref={canvasRef}></canvas>
        </div>
        <div className="product_info_body">
       <ShopCartContent modelData={modelData}/>
        </div>
      </div>
}
    </Container>
    )
}


export default ShopCart;