import { useEffect, useState } from 'react';

import './style.scss'
import HeadingUI from '../HeadingUI/HeadingUI';
import { ArrayType } from 'shared/helpers/helpers';
import {setActiveCategory} from "../../../redux/reducers/mannequinReducer";
import {useDispatch} from "react-redux";

interface Props {
    tabs: ArrayType
}

const TabUI = ({ 
    tabs 
}: Props) => {
    
    const dispatch = useDispatch()
    const [activeTab,setActiveTab] = useState<any>('')
    const updateActiveCategory = (category: string) => {
        dispatch(setActiveCategory(category));
    }

    useEffect(() => {
        if (tabs) {
            setActiveTab(tabs[0].heading)
        }
    },[tabs])

    return (
        <div className='TabUI'>
            <div className="TabUI-body">
                <div className="TabUI-heads">
                    {
                        tabs && tabs.map((tab, index) => {
                            return <div 
                                    key={tab.id || index} 
                                    className={`TabUI-head ${tab.heading === activeTab ? '_active' : ''}`}
                                    onClick={() => {
                                        setActiveTab(tab.heading);
                                        const category = tab.id === 'Color' ? 'color' : tab.id === 'Print' ? 'print' : '';
                                        updateActiveCategory(category);
                                    }}
                                >
                                <HeadingUI color='#000' text={tab.heading} size='18px' align='left' />
                            </div>
                        })
                    }
                </div>
                <div className="TabUI-contents">
                    {
                        tabs && tabs.map((tab, index) => {
                            return <div key={tab.id || index} className={`TabUI-content ${tab.heading === activeTab ? '_active' : ''}`}>
                                {tab.content || <HeadingUI color='black' size='16px' text='Nothing to show' />}
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default TabUI;
