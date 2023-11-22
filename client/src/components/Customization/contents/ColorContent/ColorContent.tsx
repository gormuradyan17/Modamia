import { CSSProperties, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { availableColors } from "redux/reducers/colorReducer";
import { getAvColors, getAvColorsVariants } from "services/colorService";
import { ObjectType } from "shared/helpers/helpers";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import './style.scss'
import { setActiveColor } from "redux/reducers/mannequinReducer";
import ColorPalette from "./ColorPalette";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";

interface colorFillInterface extends CSSProperties {
    '--colorFill': string,
}

const ColorContent = () => {
    const [chooseOption,setChooseOption]=useState()
    const colors = useSelector(availableColors)
    const dispatch = useDispatch()
    
    useEffect(() => {
        getAvColors(dispatch)
        getAvColorsVariants(dispatch)
    }, [])

    const updateActiveColor = (hexcode: string) => {
        dispatch(setActiveColor(hexcode))
    }
    const btns=[
        {
            id:1,
            colorPosition:"All over"
        },
        {
            id:2,
            colorPosition:"Top"
        },
        {
            id:3,
            colorPosition:"Bottom"
        },
    ]

    return (
        <div className="color-content-">
         <div className="btnContent">
            {btns.map(opt=>(
                <ButtonUI version="gray" key={opt.id}>{opt.colorPosition}</ButtonUI>
            ))}
         </div>
           <div className="color-content">
           {colors.map((color: ObjectType) => {
                const style: colorFillInterface = {
                    '--colorFill': color.hexcode
                }
                return <div 
                    className="color-content-color" 
                    key={color._id}
                    onClick={() => updateActiveColor(color.hexcode)}>
                    <HeadingUI classN="color-text _ellipsis" text={color.name} size="16px" />
                    <span className="color-span" style={style}></span>
                </div>
            })}
           </div>
        </div>
    );
};

export default ColorContent;