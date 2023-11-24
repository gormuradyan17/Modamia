/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect,useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { availableSilhouettes } from "redux/reducers/silhouetteReducer";
import { getAvSilhouettes } from "services/silhouetteService";
import SilhouetteCntrlHolder from "./SilhouetteCntrlHolder";
import './style.scss'
import SilhouetteContentTabs from "./SilhouetteContentTabs";
import { setMannequinType } from "redux/reducers/mannequinReducer";

const SilhouetteContent = () => {
    const silhouettes = useSelector(availableSilhouettes)
    const [kindSilhouette,setKindSilhouette]=useState("front")

const dispatch=useDispatch()
    useEffect(() => {
        getAvSilhouettes(dispatch)
    }, [])
    useEffect(() => {
        dispatch(setMannequinType(kindSilhouette))
    }, [kindSilhouette])

    return (
        <div className="customization-contents">
            <div className="cntrlHolderrowtop">
                <SilhouetteCntrlHolder cntrlData={silhouettes} setKindSilhouette={setKindSilhouette}/>
                <SilhouetteContentTabs silhouettesData={silhouettes[kindSilhouette]} kindSilhouette={kindSilhouette}/>
            </div>
        </div>
    );
};

export default SilhouetteContent;