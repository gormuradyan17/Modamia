import { useDispatch, useSelector } from "react-redux";
import { activePaletteItem, colorsPalettes, colorsVariants, setActivePaletteItem } from "redux/reducers/colorReducer";
import DropdownUI from "shared/ui/DropdownUI";
import './style.scss'
import { ObjectType, getConvertedDropdownOptionsFromVariants, getManipulatedDataFromPalettes } from "shared/helpers/helpers";
import { useEffect } from "react";

const ColorPalette = () => {

  const palettes = useSelector(colorsPalettes);
  const dispatch = useDispatch();
  const activePalette = useSelector(activePaletteItem)
  const variants = useSelector(colorsVariants)
  const options = getConvertedDropdownOptionsFromVariants(variants)

  const handlePaletteDispatchChange = (name: string) => {
    const group = getManipulatedDataFromPalettes(palettes, name, 'colors')
    if (group?._id) {
      dispatch(setActivePaletteItem({
        name: group?.name,
        colors: group?.colors,
        _id: group?._id
      }))
    }
  }

  const handlePaletteChange = (option: ObjectType) => {
    const { text = '' } = option;
    handlePaletteDispatchChange(text)
  }

  useEffect(() => {
    handlePaletteDispatchChange(activePalette?.name)
  }, [])

  return (
    <DropdownUI
      options={options}
      onChange={(option) => handlePaletteChange(option)}
      defaultValue={activePalette?.name}
      classN="color-dropdown-styles"
    />
  );
};

export default ColorPalette;
