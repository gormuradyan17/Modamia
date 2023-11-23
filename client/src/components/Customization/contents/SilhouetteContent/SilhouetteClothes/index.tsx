
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMannequinType, setMannequinUrl } from "redux/reducers/mannequinReducer";
import { BASE_UPLOADS_SILHOUETTES_URL } from "shared/constants/genericApiRoutes";

export default function SilhouetteClothes({ data, type }: any) {
  const [activeImageUrl, setActiveImageUrl] = useState<string>()
  const [activeType, setActiveType] = useState<string>(type)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setMannequinUrl(activeImageUrl))
    dispatch(setMannequinType(activeType))
  }, [activeImageUrl, activeType])

  return (
    <div className="clothes_content customXScrollbar">
      {data && Boolean(data.length) ? data.map((clothes: any, idx: number) => (
        <div key={idx} className={`clothes_item ${type === "tops" ? "clothes_tops" : "clothes_bottoms"}`}
          onClick={() => {
            setActiveImageUrl(`${BASE_UPLOADS_SILHOUETTES_URL}${type}/${clothes.silhouetteurl}`)
            setActiveType(type)
          }}>
          <img key={clothes._id} src={`${BASE_UPLOADS_SILHOUETTES_URL}${type}/${clothes.silhouetteurl}`} alt="" />
        </div>
      )): null}
    </div>
  )
}
