
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMannequinLoading, setMannequinType, setMannequinUrl, setMannequinPrice } from "redux/reducers/mannequinReducer";
import { BASE_UPLOADS_SILHOUETTES_URL } from "shared/constants/genericApiRoutes";

export default function SilhouetteClothes({ data, type }: any) {
  const [activeImageUrl, setActiveImageUrl] = useState<string>()
  const [activeType, setActiveType] = useState<string>(type)
  const [price, setPrice] = useState<number>(0)
  const dispatch = useDispatch()

  const isLoading = useSelector(getMannequinLoading)

  useEffect(() => {
    dispatch(setMannequinUrl(activeImageUrl))
    dispatch(setMannequinType(activeType))
    dispatch(setMannequinPrice(price))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImageUrl, activeType, price])
  return (
    <div className="clothes_content customXScrollbar">
      {data && Boolean(data.length) ? data.map((clothes: any, idx: number) => {
        const imgUrl = clothes?._id
          ? `${BASE_UPLOADS_SILHOUETTES_URL}${type}/${clothes.silhouetteurl}`
          : clothes?.silhouetteurl
        return <div key={idx} className={`clothes_item ${type === "tops" || type === 'sleeves' ? "clothes_tops" : "clothes_bottoms"}`}
          onClick={() => {
            setActiveImageUrl(clothes?._id ? imgUrl : '')
            setActiveType(type)
            setPrice(clothes.price)
          }}>
          <img key={clothes._id} src={imgUrl} alt="" />
        </div>
      }) : null}
    </div>
  )
}
