import { useEffect, useRef, useState } from "react";
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
  getDetailsModelData,
  setActiveCategory,
  setActiveColor,
  getDetailsData,
  getDetailsDataLoading,
  setDetailsModelData,
  setDetailsDataLoading,
  setDetailsData,
} from "redux/reducers/mannequinReducer";
import CustomizationLoader from "components/Customization/customizationLoader/CustomizationLoader";
import SilhouettePositionBtn from "components/Customization/contents/SilhouetteContent/SilhouettePositionBtn";
import ChangeSize from "components/Customization/contents/ChangeSize";
import AddToCart from "components/Customization/contents/AddToCart";
import { getProductName, getProductPrice, setActiveMannequinProduct, setProductBack, setProductFront, setProductGarment, setProductName, setProductPrice, setProductSleeve } from "redux/reducers/addToCartReducer";
import { useParams } from "react-router-dom";
import { getSelectedGarment } from "services/garmentService";
import { garmentDetails } from "redux/reducers/garmentReducer";
import { ObjectType, convertDefaultValue } from "shared/helpers/helpers";
import { getModelData } from "services/modelDataService";
import EditGarment from "components/Customization/contents/EditGarment/EditGarment";

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

  const detailsModelData = useSelector(getDetailsModelData)
  const detailsData = useSelector(getDetailsData)
  const detailsDataLoading = useSelector(getDetailsDataLoading)
  const { mannequin = {} } = activeGarment;

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

  const dispatchFields = (data: ObjectType) => {
    for (const key in data) {
      for (const item of data[key]) {
        priceCount += item.price || 0;
        dispatch(setProductPrice(priceCount))
      }
    }
    if (Object.keys(mannequin).length) {
      dispatch(setActiveMannequinProduct(mannequin))

    }
    const model = convertDefaultValue(data, silhouettes)

    if (Object.keys(data).length) {
      dispatch(setProductName(activeGarment?.garment?.name));
      dispatch(setProductGarment(activeGarment?.garment?._id));
      dispatch(setProductFront([data.fronts[1].src ? { ...data.fronts[1] } : { ...model.fronts[1] }, data.fronts[0].src ? { ...data.fronts[0] } : { ...model.fronts[0] }]));
      dispatch(setProductBack([data.backs[1].src ? { ...data.backs[1] } : { ...model.backs[1] }, data.backs[0].src ? { ...data.backs[0] } : { ...model.backs[0] }]));
      dispatch(setProductSleeve([data.sleeves[0].src ? { ...data.sleeves[0] } : { ...model.sleeves[0] }]));
    }
  }

  const drawManequin = async (data: ObjectType) => {
    const copyData = structuredClone(data);
    const convertValue = convertDefaultValue(copyData,silhouettes)
    copyData[frontBack].forEach((elem: any, i: any) => {
      if (copyData[frontBack][1]) copyData[frontBack][1].activeCategory = activeCategory;
      copyData[frontBack][0].activeCategory = activeCategory;
      switch (activeType) {
        case "tops":
          copyData[frontBack][1].src = activeImgUrl;
          copyData[frontBack][1].price = price;
          copyData[frontBack][1].width = sizes.width
          copyData[frontBack][1].height = sizes.height
          break;
        case "bottoms":
          copyData.fronts[0].src = activeImgUrl;
          copyData.backs[0].src = activeImgUrl;
          copyData.fronts[0].price = price;
          copyData.fronts[0].width = sizes.width
          copyData.fronts[0].height = sizes.height
          break;
        case "all":
          if (activeColor) {
            copyData.fronts[i].color = activeColor;
            copyData.backs[i].color = activeColor;
            copyData.sleeves[0].color = activeColor;
          }
          if (activePrint) {
            copyData.fronts[i].activeCategory = activeCategory
            copyData.backs[i].activeCategory = activeCategory
            if (copyData.sleeves[i]) copyData.sleeves[i].activeCategory = activeCategory
            copyData.fronts[i].printImageURL = activePrint?.highresurl;
            copyData.backs[i].printImageURL = activePrint?.highresurl
            if (copyData.sleeves[i]) copyData.sleeves[i].printImageURL = activePrint?.highresurl
          }
          break;
        case "sleeves":
          copyData.sleeves[0].src = activeImgUrl;
          copyData.sleeves[0].price = price;
          copyData.sleeves[0].width = sizes.width
          copyData.sleeves[0].height = sizes.height
          break;
        case "top":
          copyData[frontBack][1].color = activeColor
          if (frontBack === "sleeves") {
            copyData.fronts[1].color = activeColor
            copyData.sleeves[0].color = activeColor
            copyData.fronts[1].printImageURL = activePrint?.highresurl
          }
          if (activePrint) {
            copyData.sleeves[0].printImageURL = activePrint?.highresurl
            copyData[frontBack][1].printImageURL = activePrint?.highresurl;
          }
          break;
        case "bottom":
          if (activePrint) {
            copyData[frontBack][0].printImageURL = activePrint?.highresurl;
          }
          if (frontBack === "sleeves") {
            copyData.fronts[0].color = activeColor
          } else {
            copyData[frontBack][0].color = activeColor;
          }
          break;
        default:
        // modelData[frontBack][i].color = activeColor;
        // modelData[frontBack][i].printImageURL = activePrint?.highresurl;
      }

    });
    await canvasModelInit(rangeValue, copyData, frontBack, canvasRef, mannequin, Object.keys(detailsModelData).length ? detailsModelData : convertValue, false);
    await setModelData({ ...copyData });
  };

  useEffect(() => {
    if (id) getSelectedGarment(dispatch, id)
    dispatch(setActiveColor(""));
    dispatch(setActiveCategory("silhouette"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  
  useEffect(() => {
    if (!detailsDataLoading && (detailsModelData && Object.keys(detailsModelData).length)) {
      setTimeout(() => {
        drawManequin(detailsModelData)
      }, 0);
    }
  },[detailsDataLoading])

  useEffect(() => {
    dispatchFields(modelData)
  }, [modelData])


  useEffect(() => {
    if (activeGarment?.mannequin?._id && !detailsDataLoading) drawManequin(modelData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailsDataLoading, activeGarment, id, activeColor, activePrint, activeCategory, activeImgUrl, activeType, frontBack, silhouettes, rangeValue]);

  useEffect(() => {
    return () => {
      canvasRef.current = null;
      dispatch(setDetailsModelData({}))
      dispatch(setDetailsDataLoading(true))
      dispatch(setDetailsData({}))
      setModelData({
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
    }
  },[])

  return (
    <Container>
      <div className="customization">
        <SilhouettePositionBtn />
        <div className="customization-body">
          {isLoading && <CustomizationLoader />}
          <canvas className="canvas" id="canvas" ref={canvasRef}></canvas>
        </div>
        <div className="customization-body customization-body-info">
          <CustomizationInfo infoData={{ name, price: totalPrice }} />
          <CustomizationFeatures range={rangeValue} setRange={setRangeValue} />
          <div className="customization-body-actions">
            <ChangeSize />
            {detailsData?.isCart ? <EditGarment id={id} /> : <AddToCart />}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Customization;