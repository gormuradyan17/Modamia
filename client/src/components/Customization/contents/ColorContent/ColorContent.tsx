import { CSSProperties, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activePaletteItem,
  availableColors,
} from "redux/reducers/colorReducer";
import {
  getAvColors,
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
import ColorPalette from "./ColorPalette";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";

interface colorFillInterface extends CSSProperties {
  "--colorFill": string;
}

const ColorContent = () => {
  const [type, setType] = useState("all");
  const activePalette = useSelector(activePaletteItem);
  const dispatch = useDispatch();

  useEffect(() => {
    getAvColorsPalettes(dispatch);
    getAvColorsVariants(dispatch);
  }, []);

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
  useEffect(() => {
    dispatch(setMannequinType(type));
  });

  return (
    <div className="color-content-body">
      <div className="btnContent">
        {btns.map((opt) => (
          <ButtonUI
            version="gray"
            key={opt.id}
            onClick={() => setType(opt.type)}
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
              className="color-content-color"
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
