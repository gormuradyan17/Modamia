import { CSSProperties, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activePaletteItem,
} from "redux/reducers/colorReducer";
import {
  getAvColorsPalettes,
  getAvColorsVariants,
} from "services/colorService";
import { ObjectType } from "shared/helpers/helpers";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import "./style.scss";
import {
  setActiveColor,
  setMannequinType,
} from "redux/reducers/mannequinReducer";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";

interface colorFillInterface extends CSSProperties {
  "--colorFill": string;
}

const ColorContent = ({type,setType}:any) => {
  const activePalette = useSelector(activePaletteItem);
  const dispatch = useDispatch();

  useEffect(() => {
    getAvColorsPalettes(dispatch);
    getAvColorsVariants(dispatch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
// console.log(type);

  const updateActiveColor = (hexcode: string) => {
    dispatch(setActiveColor(hexcode));
  };
  const btns = [
    {
      id: 1,
      colorPosition: "All over",
      type: "all",
    },
    {
      id: 2,
      colorPosition: "Top",
      type: "top",
    },
    {
      id: 3,
      colorPosition: "Bottom",
      type: "bottom",
    },
  ];
  useEffect(()=>{
    setType("all")
    // console.log(type,"type");
    
  },[])
  useEffect(() => {    
    // console.log(121221,"type");

    dispatch(setMannequinType(type));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[type]);
  
  return (
    <div className="color-content-body">
      <div className="btnContent">
        {btns.map((opt) => (
          <ButtonUI
            version="gray"
            key={opt.id}
            onClick={() => setType(opt.type)}
            classN={type===opt.type ? "active" : ""}
          >
            {opt.colorPosition}
          </ButtonUI>
        ))}
      </div>
      <div className="color-content customYScrollbar">
        {activePalette?.colors.map((color: ObjectType) => {
          const {
            name = "",
            hexcode = "",
            _id = "",
          } = color?.colors?.[0] || {};
          const style: colorFillInterface = {
            "--colorFill": hexcode,
          };
          return (
            <div
              className={`color-content-color ${name}`}
              key={_id}
              onClick={() => updateActiveColor(hexcode)}
            >
              <HeadingUI
                classN="color-text _ellipsis"
                text={name}
                size="16px"
              />
              <span className="color-span" style={style}></span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorContent;
