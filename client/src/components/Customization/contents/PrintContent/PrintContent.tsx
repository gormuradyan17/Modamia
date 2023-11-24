import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activePaletteItem } from "redux/reducers/printReducer";
import { getAvPrintsPalettes, getAvPrintsVariants } from "services/printService";
import { BASE_UPLOADS_PRINTS_HIGHS_URL, BASE_UPLOADS_PRINTS_PREVIEWS_URL } from "shared/constants/genericApiRoutes";
import { ObjectType, appColor } from "shared/helpers/helpers";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import './style.scss'
import { setActivePrint, setMannequinType } from "redux/reducers/mannequinReducer";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";

const PrintContent = () => {
    const [activeType,setActiveType]=useState()
    const activePalette = useSelector(activePaletteItem)
    const dispatch = useDispatch()

    useEffect(() => {
        getAvPrintsVariants(dispatch)
        getAvPrintsPalettes(dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const updateActivePrint = (print: ObjectType) => {
        const obj = {
            highresurl: `${BASE_UPLOADS_PRINTS_HIGHS_URL}${print.highresurl}`,
            previewurl: `${BASE_UPLOADS_PRINTS_PREVIEWS_URL}${print.previewurl}`
        }
        dispatch(setActivePrint(obj))
    }
    
    const btns = [
        {
            id: 1,
            colorPosition: "All over",
            type:"all"
        },
        {
            id: 2,
            colorPosition: "Top",
            type:"top"
        },
        {
            id: 3,
            colorPosition: "Bottom",
            type:"bottom"
        },
    ]
    useEffect(() => {
        dispatch(setMannequinType(activeType))
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [activeType])
    return (
        <div className="print-content-container">
            <div className="btnContent">
                {btns.map((opt:any) => (
                    <ButtonUI key={opt.id} version="gray" onClick={()=>setActiveType(opt.type)}>{opt.colorPosition}</ButtonUI>
                ))}
            </div>
            <div className="print-content customYScrollbar">
                {activePalette?.prints?.map((print: ObjectType) => {
                    const { _id = '' } = print || {}
                    const { name = '', previewurl = '', highresurl = '' } = print?.prints?.[0] || {}
                    return <div
                        className="print-content-print"
                        key={_id}
                        onClick={() => updateActivePrint({
                            previewurl,
                            highresurl,
                        })}>
                        <HeadingUI classN="print-content-text _ellipsis" text={name} size="16px" color={appColor} />
                        <div className="print-content-image">
                            <img src={`${BASE_UPLOADS_PRINTS_PREVIEWS_URL}${previewurl}`} className="print-content-img" alt={name} />
                        </div>
                        <span></span>
                    </div>
                })}
            </div>

        </div>
    );
};

export default PrintContent;
