import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activePaletteItem } from "redux/reducers/printReducer";
import { getAvPrintsPalettes, getAvPrintsVariants } from "services/printService";
import { BASE_UPLOADS_PRINTS_HIGHS_URL, BASE_UPLOADS_PRINTS_PREVIEWS_URL } from "shared/constants/genericApiRoutes";
import { ObjectType, appColor } from "shared/helpers/helpers";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import './style.scss'
import { setActivePrint } from "redux/reducers/mannequinReducer";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";

const PrintContent = () => {

    const activePalette = useSelector(activePaletteItem)
    const dispatch = useDispatch()

    useEffect(() => {
        getAvPrintsVariants(dispatch)
        getAvPrintsPalettes(dispatch)
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
            colorPosition: "All over"
        },
        {
            id: 2,
            colorPosition: "Top"
        },
        {
            id: 3,
            colorPosition: "Bottom"
        },
    ]

    return (
        <div className="print-content-container">
            <div className="btnContent">
                {btns.map(opt => (
                    <ButtonUI key={opt.id} version="gray">{opt.colorPosition}</ButtonUI>
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
