import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { garmentDetails } from "redux/reducers/garmentReducer";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import './style.scss'
import { isExpanded } from "redux/reducers/asideReducer";

const AsideGarment = () => {

    const details = useSelector(garmentDetails)
    const expanded = useSelector(isExpanded)
    
    return (
        <div className='aside-garment'>
            <div className='aside-garment__layer'>
                <FontAwesomeIcon className="aside-garment__layer-icon" icon={faLayerGroup} />
                <HeadingUI text={`Layers - ${details?.name}`} classN={`_ellipsis${expanded ? ' _expanded' : ''}`} size="16px" />
            </div>
        </div>
    );
};

export default AsideGarment;