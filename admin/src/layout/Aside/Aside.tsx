import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss'
import { adminPages } from 'routes/contentRoutes';
import { ArrayType } from 'shared/helpers/helpers';
import AsideItem from './AsideItem';
import AsideSub from './AsideSub';
import { useDispatch, useSelector } from 'react-redux';
import { isExpanded, setIsExpanded } from 'redux/reducers/asideReducer';

const Aside = () => {

    const expanded = useSelector(isExpanded)
    const dispatch  = useDispatch()

    const renderMenuItems = (items: ArrayType, isFirst: boolean = false) => {
        return items?.map(child => {
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

    return (
        <aside className={`admin-aside${expanded ? ' _expanded' : ''}`}>
            <div className='admin-aside__list'>
                <div className={`admin-aside__item _header${expanded ? ' _expanded' : ''}`} onClick={() => toggleAside()}>
                    <FontAwesomeIcon icon={faBars} />
                    <span>Modamia</span>
                </div>
                <div className='admin-aside__routes'>
                    {renderMenuItems(adminPages, true)}
                </div>
            </div>
        </aside >
    );
};

export default Aside;