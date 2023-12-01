/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAvSilhouettes } from "services/silhouetteService";
import SilhouetteCntrlHolder from "./SilhouetteCntrlHolder";
import SilhouetteContentTabs from "./SilhouetteContentTabs";
import { setMannequinType, setMannequinPosition } from "redux/reducers/mannequinReducer";
import './style.scss'
import { garmentDetails } from "redux/reducers/garmentReducer";

const SilhouetteContent = () => {
    const activeGarment = useSelector(garmentDetails)
    const { silhouettes = {} } = activeGarment
    const [kindSilhouette, setKindSilhouette] = useState("fronts")
    const dispatch = useDispatch()

    useEffect(() => {
        getAvSilhouettes(dispatch)
    }, [])

    useEffect(() => {
        dispatch(setMannequinType(kindSilhouette))
        dispatch(setMannequinPosition(kindSilhouette))
    }, [kindSilhouette])
    return (
        <div className="customization-contents">
            <div className="cntrlHolderrowtop">
                <SilhouetteCntrlHolder cntrlData={silhouettes} setKindSilhouette={setKindSilhouette} />
                <SilhouetteContentTabs silhouettesData={silhouettes[kindSilhouette]} kindSilhouette={kindSilhouette} />
            </div>
        </div>
    );
};

export default SilhouetteContent;