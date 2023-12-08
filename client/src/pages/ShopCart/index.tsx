import React, { useRef, useEffect, useState } from 'react'
import Container from "layout/Container/Container";
import { useSelector } from "react-redux";
import './style.scss'
import { canvasModelInit } from 'shared/helpers/canvasHelpers';
import { getActiveMannequin } from 'redux/reducers/mannequinReducer';
import ShopCartContent from 'components/ShopCart';


const ShopCart = () => {
  const mannequins = useSelector(getActiveMannequin)
  const [modelData, setModelData] = useState<any>([])
  const [refUpdate, setRefUpdate] = useState(false)
  const canvasRefs = useRef([]);


  useEffect(() => {
    if (modelData.length) {
      canvasRefs.current = Array.from({ length: modelData.length }, (_, index) => canvasRefs.current[index] || React.createRef());
      setRefUpdate(true)
    }
  }, [modelData]);


  useEffect(() => {
    if (localStorage.hasOwnProperty('basket')) {
      setModelData(JSON.parse(localStorage.getItem('basket') || '[]'))
    }
  }, [])

  useEffect(() => {
    if (modelData.length) {
      modelData.forEach((item: any, index: number) => canvasModelInit(.3, item.modelData, 'fronts', canvasRefs.current[index], item.activeMannequin, item.modelData, true))
    }
  }, [modelData, mannequins, refUpdate])

  return (
    <Container>
      {!modelData.length ? <h1>Basket is empty</h1> :
        <div className="shop_container">
          {(refUpdate && modelData.length) ? canvasRefs.current.map((canvasRef, index) => (
            <div key={index} className='product_canvas'>
              <canvas ref={canvasRef}>
              </canvas>
              <div className="product_info_body">
                <ShopCartContent modelData={modelData[index]} />
              </div>
            </div>

          )) : <h2>loadingg</h2>}
        </div>
      }
    </Container>
  )
}


export default ShopCart;