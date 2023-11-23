import { useDispatch, useSelector } from "react-redux";
import DropdownUI from "shared/ui/DropdownUI";
import './style.scss'
import { ObjectType, getConvertedDropdownOptionsFromVariants, getManipulatedDataFromPalettes } from "shared/helpers/helpers";
import { useEffect } from "react";
import { activePaletteItem, printsPalettes, printsVariants, setActivePaletteItem } from "redux/reducers/printReducer";

const PrintPalette = () => {

  const palettes = useSelector(printsPalettes);
  const dispatch = useDispatch();
  const activePalette = useSelector(activePaletteItem)
  const variants = useSelector(printsVariants)
  const options = getConvertedDropdownOptionsFromVariants(variants)

  const handlePaletteDispatchChange = (name: string) => {
    const group = getManipulatedDataFromPalettes(palettes, name, 'prints')
    if (group) {
      dispatch(setActivePaletteItem({
        name,
        prints: group?.prints,
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
      classN="print-dropdown-styles"
    />
  );
};

export default PrintPalette;
