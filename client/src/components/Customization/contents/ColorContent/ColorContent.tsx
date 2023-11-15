import { CSSProperties, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { availableColors } from "redux/reducers/colorReducer";
import { getAvColors } from "services/colorService";
import { ObjectType } from "shared/helpers/helpers";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import './style.scss'
import { setActiveColor } from "redux/reducers/mannequinReducer";

interface colorFillInterface extends CSSProperties {
    '--colorFill': string,
}

const ColorContent = () => {

    const colors = useSelector(availableColors)
    const dispatch = useDispatch()

    useEffect(() => {
        getAvColors(dispatch)
    }, [])

    const updateActiveColor = (hexcode: string) => {
        dispatch(setActiveColor(hexcode))
    }

    return (
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
    );
};

export default ColorContent;