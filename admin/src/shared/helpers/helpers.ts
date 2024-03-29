import { BASE_UPLOADS_SILHOUETTES_BOTTOMS_URL, BASE_UPLOADS_SILHOUETTES_SLEEVES_URL, BASE_UPLOADS_SILHOUETTES_TOPS_URL } from "shared/constants/genericApiRoutes";
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

export const appColor = '#aa8a75';

export const silhouetteTypeOptions = [
  {
    id: 'top',
    text: 'Top',
    value: 'Top'
  },
  {
    id: 'bottom',
    text: 'Bottom',
    value: 'Bottom'
  },
  {
    id: 'sleeve',
    text: 'Sleeve',
    value: 'Sleeve'
  }
]
export const silhouetteOrientationOptions = [
  {
    id: 'front',
    text: 'Front',
    value: 'Front'
  },
  {
    id: 'back',
    text: 'Back',
    value: 'Back'
  },
]

export const getSilhouetteFullPath = (type: string) => {
  const loweredType = type.toLowerCase()
  switch (loweredType) {
    case 'top':
      return BASE_UPLOADS_SILHOUETTES_TOPS_URL
    case 'bottom':
      return BASE_UPLOADS_SILHOUETTES_BOTTOMS_URL
    case 'sleeve':
      return BASE_UPLOADS_SILHOUETTES_SLEEVES_URL
    default:
      break;
  }
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

export const getDropdownOptionsFromItemsPalettes = (options: ArrayType, type: string = 'colors') => {
  return options?.length ? options.reduce((acc: any, option: ObjectType) => {
    const { grouped = [] } = option || {};
    const vName = grouped?.[0]?.variant?.[0]?.name || '';
    const vElems: string[] = [];
    if (type === 'colors') {
      grouped?.map((group: ObjectType) => {
        const elem = group?.colors?.[0] || {}
        vElems.push(elem?.hexcode)
      })
    }
    acc.push({
      id: option?._id?.variant_id || '',
      name: vName,
      ...(type === 'colors' && { colors: vElems }) 
    })
    return acc
  }, []) : []
}

export const getActiveItemTypeById = (options: ArrayType, id: string) => {
  const elem = options.find(option => option.id === id)
  return elem?.value || ''
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
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export const eraseCookie = (name: string) => {
  document.cookie = name + `=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export const getIsNewGarmentApproved = (details: ObjectType) => {
  return !!(details?.mannequin_id
    && details?.name
    && (details?.tops?.length || details?.bottoms?.length || details?.sleeves?.length))
}

export const getIsEditGarmentApproved = (details: ObjectType, copyDetails: ObjectType) => {
  return JSON.stringify(copyDetails) !== JSON.stringify(details)
    && copyDetails?.name
    && copyDetails?.mannequin_id
    && (copyDetails?.tops?.length || copyDetails?.bottoms?.length || copyDetails?.sleeves?.length)
}

export const getSilhouetteOrderOptions = () => {
  return [
    {
      id: 1,
      text: 'Order 1',
      value: 1,
    },
    {
      id: 2,
      text: 'Order 2',
      value: 2,
    },
    {
      id: 3,
      text: 'Order 3',
      value: 3,
    }
  ]
}