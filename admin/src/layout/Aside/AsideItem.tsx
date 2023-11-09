import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ObjectType } from 'shared/helpers/helpers';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isExpanded } from 'redux/reducers/asideReducer';

interface Props {
    child: ObjectType,
    isFirst: boolean,
}

const AsideItem = ({
    child,
    isFirst,
}: Props) => {
    
    const expanded = useSelector(isExpanded)
    const {location: {pathname}} = window
    const navigate  = useNavigate()
    const isActive = child.path === '/' && pathname === '/admin' || child.path !== '/' && pathname.includes(child.path)

    return (
        <div key={child.id} className='admin-aside__link'>
            <div onClick={() => navigate(child.path)} className={`admin-aside__childItem admin-aside__item${expanded ? ' _expanded' : ''}${isActive ? ' _active' : ''}${isFirst ? ' _first' : ''}`}>
                <FontAwesomeIcon className="admin-aside__childItemIcon" icon={child.icon} />
                <span>{child.text}</span>
            </div>
        </div>
    );
};

export default AsideItem;