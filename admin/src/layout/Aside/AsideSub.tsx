import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ObjectType } from 'shared/helpers/helpers';
import { useEffect, useRef, useState } from 'react';
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
    const isActive = child.path === '/' && pathname === '/admin' || child.path !== '/' && pathname.includes(child.path)
    
    useEffect(() => {
        return () => {
            setIsVisible(false)
        }
    },[])

    return (
        <div className={`admin-aside__link${isVisible ? ' _collapsed' : ''}`}>
            <div onClick={() => navigate(child.path)}
                className={`admin-aside__childItem admin-aside__item${expanded ? ' _expanded' : ''}${isActive ? ' _active' : ''}${isFirst ? ' _first' : ''}`}>
                <FontAwesomeIcon className="admin-aside__childItemIcon" icon={child.icon} />
                <span>{child.text}</span>
            </div>
            <FontAwesomeIcon
                className={`admin-aside__item-arrow${expanded ? ' _expanded' : ''}`}
                icon={faChevronDown}
                onClick={() => toggleChild()}
            />
            <div className={`admin-aside__children${expanded ? ' _expanded' : ''}`}>
                {callBack(child.children)}
            </div>
        </div>
    );
};

export default AsideSub;