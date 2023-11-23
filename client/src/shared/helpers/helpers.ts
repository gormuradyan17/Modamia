import { AnimationObject } from "shared/objectModels/AnimationModel";

export type ArrayType = Array<Record<string, any>>
export type ObjectType = Record<string, any>

export const PortalAnimations: AnimationObject = {
    fadeIn: [
      { opacity: 0, visibility: "hidden" },
      { opacity: 1, visibility: "visible" },
    ],
    fadeOut: [
      { opacity: 1, visibility: "visible" },
      { opacity: 0, visibility: "hidden" },
    ],
  };

export const CardBarPanelAnimations: AnimationObject = {
    toRight: [
        { opacity: 1, transform: "translateX(0%)" },
        { opacity: 0, transform: "translateX(100%)" },
    ],
    fromRight: [
        { opacity: 0, transform: "translateX(100%)" },
        { opacity: 1, transform: "translateX(0%)" },
    ],
};

export const getManipulatedDataFromPalettes = (palettes: ArrayType, paletteName: string, paletteField: string) => {
  let result = {
    [paletteField]: [],
    name: '',
    _id: ''
  }

  palettes?.find((palette: ObjectType) => {
    const { grouped = [] } = palette || {}
    grouped?.find((group: ObjectType) => {
      const { variant = [] } = group || {}
      const { name = '', _id = ''} = variant[0] || {}

      if (paletteName.toLowerCase() === name.toLowerCase()) {
        result[paletteField] = grouped;
        result.name = name
        result._id = _id

        return result
      }
    })
  })

  return result
}

export const getConvertedDropdownOptionsFromVariants = (variants: ObjectType) => {
  return variants?.reduce((acc: any, variant: ObjectType) => {
    
    acc.push({
      id: variant?._id,
      text: variant?.name,
      value: variant?.name,
    })

    return acc
  },[])
}