import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { availablePrints } from "redux/reducers/printReducer";
import { getAvPrints, getAvPrintsVariants } from "services/printService";
import { BASE_UPLOADS_PRINTS_HIGHS_URL, BASE_UPLOADS_PRINTS_PREVIEWS_URL } from "shared/constants/genericApiRoutes";
import { ObjectType } from "shared/helpers/helpers";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import './style.scss'
import { setActivePrint } from "redux/reducers/mannequinReducer";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";

const PrintContent = () => {

    const prints = useSelector(availablePrints)
    const dispatch = useDispatch()
    useEffect(() => {
        getAvPrintsVariants(dispatch)
    }, [])

    const updateActivePrint = (print: ObjectType) => {
        const obj = {
            highresurl: `${BASE_UPLOADS_PRINTS_HIGHS_URL}${print.highresurl}`,
            previewurl: `${BASE_UPLOADS_PRINTS_PREVIEWS_URL}${print.previewurl}`
        }
        dispatch(setActivePrint(obj))
    }
    const btns=[
        {
            id:1,
            colorPosition:"All over"
        },
        {
            id:2,
            colorPosition:"Top"
        },
        {
            id:3,
            colorPosition:"Bottom"
        },
    ]

    return (
        <div className="print-content-container">    
         <div className="btnContent">
            {btns.map(opt=>(
                <ButtonUI key={opt.id} version="gray">{opt.colorPosition}</ButtonUI>
            ))}
         </div>    
         <div className="print-content">
         {prints?.map((print: ObjectType) => {
                return <div 
                    className="print-content-print" 
                    key={print._id}
                    onClick={() => updateActivePrint(print)}>
                    <HeadingUI classN="print-content-text _ellipsis" text={print.name} size="16px" />
                    <div className="print-content-image">
                        <img src={`${BASE_UPLOADS_PRINTS_PREVIEWS_URL}${print.previewurl}`} className="print-content-img" alt={print.name} />
                    </div>
                    <span></span>
                </div>
            })}
            </div> 
            
        </div>
    );
};

export default PrintContent;
