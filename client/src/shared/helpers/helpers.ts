import { AnimationObject } from "shared/objectModels/AnimationModel";
import NoSleeve from 'assets/images/no-sleeve.png'
import { BASE_UPLOADS_SILHOUETTES_URL } from "shared/constants/genericApiRoutes";

export type ArrayType = Array<Record<string, any>>
export type ObjectType = Record<string, any>
export const appColor = '#aa8a75';

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
      const { name = '', _id = '' } = variant[0] || {}

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

export const getConvertedDropdownOptionsFromVariantsMatched = (variants: ObjectType, items: string[], user_id: string = '') => {
  const matched = variants.reduce((acc: any, variant: ObjectType) => {
    const isItemValid = items.some((item) => item === variant._id) || variant.user_id === user_id;
    if (isItemValid) acc.push(variant)
    return acc;
  }, [])

  if (!matched.length) return []
  return matched?.reduce((acc: any, variant: ObjectType) => {
    acc.push({
      id: variant?._id,
      text: variant?.name || variant?.size,
      value: variant?.name || variant?.size,
    })
    return acc
  }, [])
}

export const getConvertedDropdownOptionsFromVariants = (variants: ObjectType) => {
  return variants?.reduce((acc: any, variant: ObjectType) => {

    acc.push({
      id: variant?._id,
      text: variant?.name || variant?.size,
      value: variant?.name || variant?.size,
    })

    return acc
  }, [])
}

export const NoSleeveObject = {
  "_id": "",
  "name": "No Sleeve",
  "price": 0,
  "tags": "",
  "type": "Sleeve",
  "orientation": "Front",
  "silhouetteurl": NoSleeve,
}

export const getCanvasDefaultImages = (
  silhouettes: ObjectType,
  positionSilhouette: string,
  positionClothes: string
) => {
  const baseUploadsSilhouettesUrl = BASE_UPLOADS_SILHOUETTES_URL;
  const getPositionInfo = (position: string, clothingType: string) => {

    const category = silhouettes?.[position]?.[clothingType][0];
    const url = positionSilhouette === "sleeves" ? clothingType = "sleeves" : clothingType
    return {
      src: category?.silhouetteurl
        ? `${baseUploadsSilhouettesUrl}${url}/${category.silhouetteurl}`
        : '',
      position: positionClothes,
      color: category?.color || "",
      printImageURL: "",
      activeCategory: "",
      price: category?.price,
      width: category?.width,
      height: category?.height,
      order: category?.order,
      id: category?._id,
    };
  };

  if (positionSilhouette === 'fronts') {
    return positionClothes === 'top' ? getPositionInfo('fronts', 'tops') : getPositionInfo('fronts', 'bottoms');
  } else if (positionSilhouette === 'backs') {
    return positionClothes === 'top' ? getPositionInfo('backs', 'tops') : getPositionInfo('backs', 'bottoms');
  }
};

export async function updateArrWithElem(elem: any, arr: any[], frontBack: string, fromBasket: boolean) {

  if (elem) {    
    const frontSleeves = arr.findIndex((el) => el?.frontBack === "sleeves");
    const frontTop = arr.findIndex(
      (el) => (el?.frontBack === "fronts" || el?.frontBack === "backs") && el?.position === "top"
    );
    const frontBottom = arr.findIndex(
      (el) => (el?.frontBack === "fronts" || el?.frontBack === "backs") && el?.position === "bottom"
    );
    if (arr.length < 2 || ((elem?.frontBack === "sleeves" || frontBack === "sleeves") && arr.length <= 2)) {
      arr.push(elem);
    } else {
      if (elem?.position === "top" && (elem.frontBack === "fronts" || elem.frontBack === "backs")) {
        arr.splice(frontTop, 1, elem);
      } else if (elem?.position === "bottom" && (elem.frontBack === "fronts" || elem.frontBack === "backs")) {
        arr.splice(frontBottom, 1, elem);
      } else if (elem?.frontBack === "sleeves") {
        arr.splice(frontSleeves, 1, elem);
      }

    }
  }
}

export const convertDefaultValue = (modelData: any, silhouettes: any) => {
  const updatedModelData: any = {};
  for (let key in modelData) {
    const position1 = modelData[key][0]?.position;
    const position2 = modelData[key][1]?.position;


    updatedModelData[key] = [
      { ...modelData[key][0], ...getCanvasDefaultImages(silhouettes, key, position1) },
      { ...modelData[key][1], ...getCanvasDefaultImages(silhouettes, key, position2) }
    ];
  }
  return updatedModelData;
}

export const setCookie = (name: string, value: any, days: number) => {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export const getCookie = (name: string) => {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
export const getDropdownOptionsFromItemsVariants = (options: ArrayType) => {
  return options?.length ? options.reduce((acc: any, option: ObjectType) => {
    acc.push({
      id: option?._id,
      text: option?.name,
      value: option?.name,
    })
    return acc
  }, []) : []
}

export const eraseCookie = (name: string) => {
  document.cookie = name + `=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export const getIsGarmentSaveApproved = (newData: ObjectType, oldData: ObjectType) => {
  if (!newData || !Object.keys(newData)?.length || !oldData || !Object.keys(oldData)?.length) return false;
  return JSON.stringify(newData) !== JSON.stringify(oldData);
}

export const dataWithValues = (data: any, model: any) => {
  const combineObject: ObjectType = {};
  for (const key in data) {
    if (data[key] !== "") {
      if (!(key in combineObject)) {
        combineObject[key] = data[key]
      }
    }
  }
  for (const key in model) {
    if (model[key] !== "" && !(key in combineObject)) {
      combineObject[key] = combineObject[key] !== undefined ? combineObject[key] + model[key] : model[key]
    }
  }
  return combineObject
}

export const sortItemsByUserId = (items: ArrayType) => {
  if (!items) return []
  return [...items].sort((a, b) => {
    const hasUserIdA = a.hasOwnProperty('user_id');
    const hasUserIdB = b.hasOwnProperty('user_id');

    if (hasUserIdA && !hasUserIdB) {
      return -1;
    } else if (!hasUserIdA && hasUserIdB) {
      return 1;
    } else {
      return 0;
    }
  })
}