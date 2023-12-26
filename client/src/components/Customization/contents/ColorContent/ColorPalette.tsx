import { useDispatch, useSelector } from "react-redux";
import { activePaletteItem, colorsPalettes, colorsVariants, setActivePaletteItem } from "redux/reducers/colorReducer";
import DropdownUI from "shared/ui/DropdownUI";
import './style.scss'
import { ObjectType, getConvertedDropdownOptionsFromVariantsMatched, getManipulatedDataFromPalettes } from "shared/helpers/helpers";
import { useEffect, useMemo } from "react";
import { garmentDetails } from "redux/reducers/garmentReducer";
import { getUserData } from "redux/reducers/userReducer";

const ColorPalette = () => {

  const palettes = useSelector(colorsPalettes);
  const dispatch = useDispatch();
  const activePalette = useSelector(activePaletteItem)
  const variants = useSelector(colorsVariants)
  const activeGarment = useSelector(garmentDetails)
  const userData = useSelector(getUserData)
  const matchedColorPalettes = useMemo(() => {
    const { palettes: { colors = [] } = {} } = activeGarment || {}
    return getConvertedDropdownOptionsFromVariantsMatched(variants, colors, userData?.id)
  },[activeGarment, userData])

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
    if (matchedColorPalettes.length) {
      handlePaletteDispatchChange(matchedColorPalettes?.[0]?.text || '')
    }
  }, [matchedColorPalettes])

  return (
    <DropdownUI
      options={matchedColorPalettes}
      onChange={(option) => handlePaletteChange(option)}
      defaultValue={activePalette?.name}
      classN="color-dropdown-styles"
    />
  );
};

export default ColorPalette;
