import { ChangeEvent, useEffect, useRef, useState, useMemo } from "react";
import { addModel, addImageProcess, getModelData, canvasModelInit } from "../../shared/helpers/canvasHelpers";
import {

  B_N,
  T_N,
} from "../../shared/constants/genericApiRoutes";
import "./style.scss";
import CustomizationFeatures from "components/Customization/features/CustomizationFeatures";
import Container from "layout/Container/Container";
import CustomizationInfo from "components/Customization/customizationInfo/CustomizationInfo";
import { useDispatch, useSelector } from "react-redux";
import {
  availableMannequins,
  getMannequinActiveCategory,
  getMannequinActiveColor,
  getMannequinActivePrint,
  getMannequinLoading,
  getMannequinPosition,
  getMannequinPrice,
  getMannequinType,
  getMannequinUrl,
  setMannequinLoading
} from "redux/reducers/mannequinReducer";
import { getAvMannequins } from "services/mannequinService";
import CustomizationLoader from "components/Customization/customizationLoader/CustomizationLoader";
import SilhouettePositionBtn from "components/Customization/contents/SilhouetteContent/SilhouettePositionBtn";
import ChangeSize from "components/Customization/contents/ChangeSize";
import AddToCart from "components/Customization/contents/AddToCart";
import { getProduct, getProductName, getProductPrice, setProductBack, setProductFront, setProductPrice, setProductSleeve } from "redux/reducers/addToCartReducer";

const Customization = () => {
  const mannequins = useSelector(availableMannequins)
  const activeColor = useSelector(getMannequinActiveColor)
  const activePrint = useSelector(getMannequinActivePrint)
  const activeCategory = useSelector(getMannequinActiveCategory)
  const isLoading = useSelector(getMannequinLoading)
  const activeImgUrl = useSelector(getMannequinUrl)
  const activeType = useSelector(getMannequinType)
  const frontBack = useSelector(getMannequinPosition)
  const name = useSelector(getProductName)
  const price = useSelector(getMannequinPrice)
  const productInfo = useSelector(getProduct)
  let   priceCount=0
  const totalPrice = useSelector(getProductPrice)
  const [modelData, setModelData] = useState<any>({
    front: [
      { position: "bottom", src: B_N, color: activeColor, printImageURL: activePrint?.highresurl, activeCategory, price: 200 },
      { position: "top", src: T_N, color: activeColor, printImageURL: activePrint?.highresurl, activeCategory, price: 300 },
    ],
    back: [
      { position: "bottom", src: B_N, color: activeColor, printImageURL: activePrint?.highresurl, activeCategory, price:0 },
      { position: "top", src: T_N, color: activeColor, printImageURL: activePrint?.highresurl, activeCategory, price: 0 },
    ],
    sleeve: [
      { position: "top", src: '', color: activeColor, printImageURL: activePrint?.highresurl, activeCategory, price: 0 }
    ]
  }
  )

  const dispatch = useDispatch()
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [rangeValue, setRangeValue] = useState<number>(0.1);

 

  useEffect(() => {
    getAvMannequins(dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (mannequins?.length) {
      const drawManequin = async () => {
        for (let i = 0; i < modelData[frontBack].length; i++) {
          const activeElem=modelData[frontBack][1] ? modelData[frontBack][1] : modelData[frontBack][0]

          modelData[frontBack][i].activeCategory = activeCategory;
          // console.log(activeType,"activeType");
          
          switch (activeType) {
            case "tops":
              modelData[frontBack][1].src = activeImgUrl;
              modelData[frontBack][1].price = price;
              setModelData({...modelData})
              break;
            case "bottoms":
              modelData.front[0].src = activeImgUrl
              modelData.back[0].src = activeImgUrl
              modelData.front[0].price = price
              setModelData({...modelData})
              break;
            case "sleeves":
              modelData.sleeve[0].src = activeImgUrl;
              modelData.sleeve[0].price = price;
              setModelData({...modelData})
              break;
            case "all":
              // console.log(modelData);
              
              modelData.front[i].color = activeColor
              modelData.back[i].color = activeColor
              modelData.sleeve[0].color = activeColor
              setModelData({...modelData})
              break;
            case "top":
              activeElem.color= activeColor
              if (activePrint) {
                activeElem.printImageURL = activePrint?.highresurl
              }
              setModelData({...modelData})
              break;
            case "bottom":
              modelData[frontBack][0].color = activeColor
              if (activePrint) {
                modelData[frontBack][0].printImageURL = activePrint?.highresurl
              }
              setModelData({...modelData})

              break;
            default:
              // modelData[frontBack][i].color = activeColor;
              // modelData[frontBack][i].printImageURL = activePrint?.highresurl
              // setModelData({...modelData})
          }

        }
        await canvasModelInit(.3, modelData, frontBack,canvasRef,mannequins);
      }
      drawManequin()
    
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mannequins, activeColor, activePrint, activeCategory, activeImgUrl, activeType, frontBack]);

  function changRange(e: ChangeEvent<HTMLInputElement>) {
    // console.log(e.target.value);
    // setRangeValue(Number(e.target.value));
    // canvasModelInit(Number(e.target.value), getModelData("", activeColor, activePrint, activeCategory));
  }

useEffect(()=>{
  for (const key in modelData) {
    for (const item of modelData[key]) {        
      priceCount+=item.price;          
     dispatch(setProductPrice(priceCount))
    }
  }
  dispatch(setProductFront([{...modelData.front[1]},{...modelData.front[0]}]));
  dispatch(setProductBack([{...modelData.back[1]},{...modelData.back[0]}]));
  dispatch(setProductSleeve([{...modelData.sleeve[0]}]));
},[modelData])
  
  return (
    <Container>
      <div className="customization">
        <SilhouettePositionBtn />
        <div className="customization-body">
          {isLoading && <CustomizationLoader />}
          <canvas className="canvas" id="canvas" ref={canvasRef}></canvas>
        </div>
        <div className="customization-body">
          <CustomizationInfo infoData={{ name, price:totalPrice }} />
          <CustomizationFeatures />
          <ChangeSize />
          <AddToCart />
        </div>
        {/* <input type="range" min="0.01" max="1" step="0.01" value={rangeValue} onChange={changRange} /> */}
      </div>
    </Container>
  );
};

export default Customization;
