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