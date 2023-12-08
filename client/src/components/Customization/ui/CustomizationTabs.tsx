import { useEffect, useState } from 'react';

import './style.scss'
import { ArrayType } from 'shared/helpers/helpers';
import {setActiveCategory, setMannequinType} from "../../../redux/reducers/mannequinReducer";
import {useDispatch} from "react-redux";
import ColorPalette from 'components/Customization/contents/ColorContent/ColorPalette';
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import PrintPalette from '../contents/PrintContent/PrintPalette';

interface Props {
    tabs: ArrayType
}

const CustomizationTabs = ({ 
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

    const showContent = (tab:any) => {
        if (tab.heading === activeTab && activeTab === "Color") {
          return <ColorPalette />;
        }
      
        if (tab.heading === activeTab && activeTab === "Print") {
          return <PrintPalette/>;
        }
        return <HeadingUI color='#000' text={tab.heading} size='18px' align='left' />;
      };
   
    return (
        <div className='CustomizationTabs'>
            <div className="CustomizationTabs-body">
                <div className="CustomizationTabs-heads">
                    {
                        tabs && tabs.map((tab, index) => {
                            return <div 
                                    key={tab.id || index} 
                                    className={`CustomizationTabs-head ${tab.heading === activeTab ? '_active' : ''}`}
                                    onClick={() => {
                                        setActiveTab(tab.heading);
                                        const category = tab.heading === 'Color' ? 'color' : tab.heading === 'Print' ? 'print' : tab.heading === 'Silhouette' ? "silhouette" : "" ;
                                       ( tab.heading==="Color" ||  tab.heading === 'Print') ?  dispatch(setMannequinType("all")) :dispatch(setMannequinType("fronts"))
                                        updateActiveCategory(category);
                                    }}
                                >
                                       {showContent(tab)}                          
                    </div>
                        })
                    }
                </div>
                <div className="CustomizationTabs-contents">
                    {
                        tabs && tabs.map((tab, index) => {
                            return <div key={tab.id || index} className={`CustomizationTabs-content ${tab.heading === activeTab ? '_active' : ''}`}>
                                {tab.content || <HeadingUI color='black' size='16px' text='Nothing to show' />}
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default CustomizationTabs;
