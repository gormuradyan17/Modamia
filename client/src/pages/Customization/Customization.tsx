import { ChangeEvent, useEffect, useRef, useState } from "react";
import { canvasModelInit } from "../../shared/helpers/canvasHelpers";
import "./style.scss";
import CustomizationFeatures from "components/Customization/features/CustomizationFeatures";
import Container from "layout/Container/Container";
import CustomizationInfo from "components/Customization/customizationInfo/CustomizationInfo";
import { useDispatch, useSelector } from "react-redux";
import {
  getMannequinActiveCategory,
  getMannequinActiveColor,
  getMannequinActivePrint,
  getMannequinLoading,
  getMannequinPosition,
  getMannequinPrice,
  getMannequinType,
  getMannequinUrl,
  getSize,
  getTestModelData,
  setActiveCategory,
  setActiveColor,
} from "redux/reducers/mannequinReducer";
import CustomizationLoader from "components/Customization/customizationLoader/CustomizationLoader";
import SilhouettePositionBtn from "components/Customization/contents/SilhouetteContent/SilhouettePositionBtn";
import ChangeSize from "components/Customization/contents/ChangeSize";
import AddToCart from "components/Customization/contents/AddToCart";
import { getProductName, getProductPrice, setActiveMannequinProduct, setProductBack, setProductFront, setProductGarment, setProductName, setProductPrice, setProductSleeve } from "redux/reducers/addToCartReducer";
import { useParams } from "react-router-dom";
import { getSelectedGarment } from "services/garmentService";
import { garmentDetails } from "redux/reducers/garmentReducer";
import { convertDefaultValue } from "shared/helpers/helpers";
import { getModelData } from "services/modelDataService";

const Customization = () => {
  const activeColor = useSelector(getMannequinActiveColor)
  const activePrint = useSelector(getMannequinActivePrint)
  const activeCategory = useSelector(getMannequinActiveCategory)
  const isLoading = useSelector(getMannequinLoading)
  const activeImgUrl = useSelector(getMannequinUrl)
  const activeType = useSelector(getMannequinType)
  const frontBack = useSelector(getMannequinPosition)
  const name = useSelector(getProductName)
  const price = useSelector(getMannequinPrice)
  const activeGarment = useSelector(garmentDetails)
  const totalPrice = useSelector(getProductPrice)
  const sizes = useSelector(getSize)

  const testModelData = useSelector(getTestModelData)

  let priceCount = 0;


  const { silhouettes = {} } = activeGarment;
  const [modelData, setModelData] = useState<any>({
    fronts: [
      { position: "bottom", src: "", color: "", printImageURL: "", activeCategory, price: 200, width: "", height: "", order: "" },
      { position: "top", src: "", color: "", printImageURL: "", activeCategory, price: 300, width: "", height: "", order: "" },
    ],
    backs: [
      { position: "bottom", src: "", color: "", printImageURL: "", activeCategory, price: 0, width: "", height: "", order: "" },
      { position: "top", src: "", color: "", printImageURL: "", activeCategory, price: 0, width: "", height: "", order: "" },
    ],
    sleeves: [
      { position: "top", src: "", color: "", printImageURL: "", activeCategory, price: 0, width: "", height: "", order: "" },
      { position: "bottom", src: "", color: "", printImageURL: "", activeCategory, price: 0, width: "", height: "", order: "" }
    ]
  })

  const params = useParams()
  const { id = '' } = params;

  const dispatch = useDispatch()
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [rangeValue, setRangeValue] = useState<number>(0.1);
  
  useEffect(() => {
    if (id) getSelectedGarment(dispatch, id)
    dispatch(setActiveColor(""));
    dispatch(setActiveCategory("silhouette"));
    // if (id) getModelData(dispatch, id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    if ((Object.keys(testModelData)?.length)) {
      // console.log('testModelData => ', testModelData)
      // setModelData(testModelData)
    }
  },[testModelData])


  useEffect(() => {
    const convertValue = convertDefaultValue(modelData, silhouettes)
    if (activeGarment?.mannequin?._id) {
      const { mannequin = {} } = activeGarment;

      const drawManequin = async () => {
        modelData[frontBack].forEach((elem: any, i: any) => {
          modelData[frontBack][1].activeCategory = activeCategory;
          modelData[frontBack][0].activeCategory = activeCategory;
          switch (activeType) {
            case "tops":
              modelData[frontBack][1].src = activeImgUrl;
              modelData[frontBack][1].price = price;
              modelData[frontBack][1].width = sizes.width
              modelData[frontBack][1].height = sizes.height
              break;
            case "bottoms":
              modelData.fronts[0].src = activeImgUrl;
              modelData.backs[0].src = activeImgUrl;
              modelData.fronts[0].price = price;
              modelData.fronts[0].width = sizes.width
              modelData.fronts[0].height = sizes.height
              break;
            case "all":
              if (activeColor) {
                modelData.fronts[i].color = activeColor;
                modelData.backs[i].color = activeColor;
                modelData.sleeves[0].color = activeColor;
              }
              if (activePrint) {
                modelData.fronts[i].activeCategory = activeCategory
                modelData.backs[i].activeCategory = activeCategory
                modelData.sleeves[i].activeCategory = activeCategory
                modelData.fronts[i].printImageURL = activePrint?.highresurl;
                modelData.backs[i].printImageURL = activePrint?.highresurl
                modelData.sleeves[i].printImageURL = activePrint?.highresurl
              }
              break;
            case "sleeves":
              modelData.sleeves[0].src = activeImgUrl;
              modelData.sleeves[0].price = price;
              modelData.sleeves[0].width = sizes.width
              modelData.sleeves[0].height = sizes.height
              break;

            case "top":
              modelData[frontBack][1].color = activeColor
              if (frontBack === "sleeves") {
                modelData.fronts[1].color = activeColor
                modelData.sleeves[0].color = activeColor
                modelData.fronts[1].printImageURL = activePrint?.highresurl
              }
              if (activePrint) {
                modelData.sleeves[0].printImageURL = activePrint?.highresurl
                modelData[frontBack][1].printImageURL = activePrint?.highresurl;
              }
              break;
            case "bottom":
              if (activePrint) {
                modelData[frontBack][0].printImageURL = activePrint?.highresurl;
              }
              if (frontBack === "sleeves") {
                modelData.fronts[0].color = activeColor
              } else {
                modelData[frontBack][0].color = activeColor;
              }
              break;
            default:
            // modelData[frontBack][i].color = activeColor;
            // modelData[frontBack][i].printImageURL = activePrint?.highresurl;
          }

        });
        console.log('{ ...modelData } => ', { ...modelData })
        console.log('testModelData => ', testModelData)
        setModelData({ ...modelData });
        await canvasModelInit(rangeValue, modelData, frontBack, canvasRef, mannequin, convertValue, false);

      };

      drawManequin();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeGarment, id, activeColor, activePrint, activeCategory, activeImgUrl, activeType, frontBack, silhouettes, rangeValue]);

  useEffect(() => {
    const { mannequin = {} } = activeGarment;
    for (const key in modelData) {
      for (const item of modelData[key]) {
        priceCount += item.price;
        dispatch(setProductPrice(priceCount))
      }
    }
    if (Object.keys(mannequin).length) {
      dispatch(setActiveMannequinProduct(mannequin))

    }
    const model = convertDefaultValue(modelData, silhouettes)

    if (Object.keys(modelData).length) {
      dispatch(setProductName(activeGarment?.garment?.name));
      dispatch(setProductGarment(activeGarment?.garment?._id));
      dispatch(setProductFront([modelData.fronts[1].src ? { ...modelData.fronts[1] } : { ...model.fronts[1] }, modelData.fronts[0].src ? { ...modelData.fronts[0] } : { ...model.fronts[0] }]));
      dispatch(setProductBack([modelData.backs[1].src ? { ...modelData.backs[1] } : { ...model.backs[1] }, modelData.backs[0].src ? { ...modelData.backs[0] } : { ...model.backs[0] }]));
      dispatch(setProductSleeve([modelData.sleeves[0].src ? { ...modelData.sleeves[0] } : { ...model.sleeves[0] }]));
    }

  }, [modelData, silhouettes])

  return (
    <Container>
      <div className="customization">
        <SilhouettePositionBtn />
        <div className="customization-body">
          {isLoading && <CustomizationLoader />}
          <canvas className="canvas" id="canvas" ref={canvasRef}></canvas>
        </div>
        <div className="customization-body">
          <CustomizationInfo infoData={{ name, price: totalPrice }} />
          <CustomizationFeatures range={rangeValue} setRange={setRangeValue} />
          <ChangeSize />
          <AddToCart />
        </div>
      </div>
    </Container>
  );
};

export default Customization;