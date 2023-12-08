import { useDispatch, useSelector } from "react-redux";
import DropdownUI from "shared/ui/DropdownUI";
import './style.scss'
import { ObjectType, getConvertedDropdownOptionsFromVariants, getConvertedDropdownOptionsFromVariantsMatched, getManipulatedDataFromPalettes } from "shared/helpers/helpers";
import { useEffect, useMemo } from "react";
import { activePaletteItem, printsPalettes, printsVariants, setActivePaletteItem } from "redux/reducers/printReducer";
import { garmentDetails } from "redux/reducers/garmentReducer";

const PrintPalette = () => {

  const palettes = useSelector(printsPalettes);
  const dispatch = useDispatch();
  const activePalette = useSelector(activePaletteItem)
  const variants = useSelector(printsVariants)
  const activeGarment = useSelector(garmentDetails)
  
  const matchedPrintPalettes = useMemo(() => {
    const { palettes: { prints = [] } = {} } = activeGarment || {}
    return getConvertedDropdownOptionsFromVariantsMatched(variants, prints)
  },[activeGarment])

  const handlePaletteDispatchChange = (name: string) => {
    if (name === 'All') {
      const allPrints = palettes?.reduce((acc: any = [], palette: ObjectType) => {
        const { grouped = [], _id: { variant_id = ''} = {} } = palette || {};
        const { palettes: { prints = [] } = {} } = activeGarment;
        grouped?.map((group: ObjectType) => {
          const found = prints?.find((variant: ObjectType) => variant === variant_id)
          if (found) acc.push(group)
        })
        return acc
      },[])
      
      dispatch(setActivePaletteItem({
        name,
        prints: allPrints,
        _id: 'All'
      }))
    } else {
      const group = getManipulatedDataFromPalettes(palettes, name, 'prints')
      if (group) {
        dispatch(setActivePaletteItem({
          name,
          prints: group?.prints,
          _id: group?._id
        }))
      }
    }
  }

  const handlePaletteChange = (option: ObjectType) => {
    const { text = '' } = option;
    handlePaletteDispatchChange(text)
  }

  useEffect(() => {
    if (matchedPrintPalettes.length) {
      handlePaletteDispatchChange(matchedPrintPalettes?.[0]?.text || '')
    }
  }, [matchedPrintPalettes])

  return (
    <DropdownUI
      options={[
        {id: 'All', text: 'All', value: 'All'},
        ...matchedPrintPalettes
      ]}
      onChange={(option) => handlePaletteChange(option)}
      defaultValue={activePalette?.name}
      classN="print-dropdown-styles"
    />
  );
};

export default PrintPalette;
