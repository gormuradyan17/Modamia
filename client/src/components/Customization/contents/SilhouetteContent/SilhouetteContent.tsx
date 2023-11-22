import {useEffect,useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { availableSilhouettes } from "redux/reducers/silhouetteReducer";
import { getAvSilhouettes } from "services/silhouetteService";
import SilhouetteCntrlHolder from "./SilhouetteCntrlHolder";
import './style.scss'
import SilhouetteContentTabs from "./SilhouetteContentTabs";

const SilhouetteContent = () => {
    const silhouettes = useSelector(availableSilhouettes)
    const [kindSilhouette,setKindSilhouette]=useState("front")

const dispatch=useDispatch()
    useEffect(() => {
        getAvSilhouettes(dispatch)
    }, [])


    return (
        <div id="customization" className="ds_content dotted-bdr-top mt-0 clearfix mob-mTB0">
            <div className="cntrlHolderrowtop">
            <SilhouetteCntrlHolder cntrlData={silhouettes} setKindSilhouette={setKindSilhouette}/>
            <SilhouetteContentTabs silhouettesData={silhouettes[kindSilhouette]}/>
            </div>
        </div>
    );
};

export default SilhouetteContent;