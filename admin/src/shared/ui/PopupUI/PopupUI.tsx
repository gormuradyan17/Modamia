import ReactPortal from 'layout/ReactPortal/ReactPortal';
import './style.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CallbackSkeletonType } from 'shared/objectModels/GenericModel';

interface PropsI {
    callback: CallbackSkeletonType,
    children: any
}

const PopupUI = ({
    callback,
    children
}: PropsI) => {

    return (
        <ReactPortal>
            <div className='PopupUI'>
                <div className="PopupUI__container">
                    <div className='PopupUI__body'>
                        {children}
                    </div>
                    <div className='PopupUI__icon'
                        onClick={() => callback()}>
                        <FontAwesomeIcon icon={faXmark} fontSize='18px' color="#fff" />
                    </div>
                </div>
                <div className='PopupUI__BG' onClick={() => callback()}></div>
            </div>
        </ReactPortal>
    );
};

export default PopupUI;