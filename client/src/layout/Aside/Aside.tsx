import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss'
import { privatePages } from 'routes/contentRoutes';
import { ArrayType } from 'shared/helpers/helpers';
import AsideItem from './AsideItem';
import AsideSub from './AsideSub';
import { useDispatch, useSelector } from 'react-redux';
import { isExpanded, setIsExpanded } from 'redux/reducers/asideReducer';
import { Outlet } from 'react-router-dom';
import { useWindowSize } from 'utils/hooks/useWindowSize';
import { useEffect } from 'react';

const Aside = () => {

    const expanded = useSelector(isExpanded)
    const dispatch = useDispatch()
    const { width } = useWindowSize()

    const renderMenuItems = (items: ArrayType, isFirst: boolean = false) => {
        return items?.filter((child) => child.text).map(child => {
            return child.children
                ? <AsideSub
                    key={child.id}
                    child={child}
                    isFirst={isFirst}
                    callBack={(items: ArrayType) => renderMenuItems(items)}
                />
                : <AsideItem
                    key={child.id}
                    child={child}
                    isFirst={isFirst}
                />
        })
    }

    const toggleAside = () => {
        dispatch(setIsExpanded(!expanded))
    }
    useEffect(() => {
        if(width>=768){
            dispatch(setIsExpanded(true))
        }else{
            dispatch(setIsExpanded(false))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width])
    
    return (
        <>
            <aside className={`user-aside${expanded ? ' _expanded' : ''}`}>
                <div className='user-aside__list'>
                    <div className={`user-aside__item _header${expanded ? ' _expanded' : ''}`} onClick={() => toggleAside()}>
                        <FontAwesomeIcon icon={faBars} />
                        <span>Modamia</span>
                    </div>
                    <div className='user-aside__routes'>
                        {renderMenuItems(privatePages, true)}
                    </div>
                </div>
            </aside >
            <div><Outlet /></div>
        </>
    );
};

export default Aside;