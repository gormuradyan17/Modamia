import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ObjectType } from 'shared/helpers/helpers';
import { useEffect,  useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isExpanded } from 'redux/reducers/asideReducer';


interface Props {
    child: ObjectType,
    isFirst: boolean,
    callBack: any,
}

const AsideSub = ({
    child,
    isFirst,
    callBack,
}: Props) => {

    const expanded = useSelector(isExpanded)
    const navigate  = useNavigate()
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const {location: {pathname}} = window

    const toggleChild = () => {
        setIsVisible(!isVisible)
    }
    const isActive =(pathname.charAt(pathname.length-1) !== '/' || pathname.charAt(pathname.length-1)==="" )  &&  pathname.includes(child.path)
    
    useEffect(() => {
        if ( isActive) {
            setIsVisible(true)
        }
        return () => {
            setIsVisible(false)
        }
    },[pathname])

    return (
        <div className={`user-aside__link${isVisible ? ' _collapsed' : ''}`}>
            <div onClick={() => navigate(child.path)}
                className={`user-aside__childItem user-aside__item${expanded ? ' _expanded' : ''}${isActive ? ' _active' : ''}${isFirst ? ' _first' : ''}`}>
                <FontAwesomeIcon className="user-aside__childItemIcon" icon={child.icon} />
                <span>{child.text}</span>
            </div>
            <FontAwesomeIcon
                className={`user-aside__item-arrow${expanded ? ' _expanded' : ''}`}
                icon={faChevronDown}
                onClick={() => toggleChild()}
            />
            <div className={`user-aside__children${expanded ? ' _expanded' : ''}`}>
                {callBack(child.children)}
            </div>
        </div>
    );
};

export default AsideSub;