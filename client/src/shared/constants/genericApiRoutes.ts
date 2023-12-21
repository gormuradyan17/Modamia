export const BASE_URL = process.env.REACT_APP_BASE_API_URL || ''
export const API_URL = '/'
export const BASE_UPLOADS_URL = BASE_URL + '/api/uploads/'
export const API_URL_ADMIN = '/admin/'

//color
export const COLORS_URL = API_URL + 'colors'
export const ADD_COLOR_URL = API_URL + 'add-color'
export const ADD_COLOR_VARIANT_URL = API_URL + 'add-color-variant'
export const COLORS_VARIANTS_URL = API_URL + 'colors-variants'
export const COLORS_PALETTES_URL = API_URL + 'colors-palettes'
export const ADD_COLOR_PALETTE_URL = API_URL + 'add-color-palette'
export const REMOVE_COLOR_PALETTE_URL = API_URL + 'remove-color-palette'
export const ORDER_PALETTE_COLORS_URL = API_URL + 'order-palette-colors'
export const EDIT_COLOR_URL = API_URL + 'edit-color'
export const REMOVE_COLOR_URL = API_URL + 'remove-color'

//mannequins
export const MANNEQUINS_URL = API_URL + 'mannequins'
export const MANNEQUIN_WITH_SILHOUETTES_URL = API_URL + 'mannequin-with-silhouettes'

export const BASE_UPLOADS_MANNEQUINS_URL = BASE_UPLOADS_URL + 'mannequins/'
export const BASE_UPLOADS_MANNEQUINS_FRONTS_URL = BASE_UPLOADS_MANNEQUINS_URL + 'fronts/'
export const BASE_UPLOADS_MANNEQUINS_BACKS_URL = BASE_UPLOADS_MANNEQUINS_URL + 'backs/'

//prints
export const BASE_UPLOADS_PRINTS_URL = BASE_UPLOADS_URL + 'prints/'
export const BASE_UPLOADS_PRINTS_HIGHS_URL = BASE_UPLOADS_PRINTS_URL + 'highs/'
export const BASE_UPLOADS_PRINTS_PREVIEWS_URL = BASE_UPLOADS_PRINTS_URL + 'previews/'


// Silhouette

export const SILHOUETTES_URL = API_URL + 'silhouettes'
export const SILHOUETTES_TYPES_URL = API_URL + 'silhouettes-types'
export const ADD_SILHOUETTE_URL = API_URL_ADMIN + 'add-silhouette'
export const EDIT_SILHOUETTE_URL = API_URL_ADMIN + 'edit-silhouette'
export const BASE_UPLOADS_SILHOUETTES_URL = BASE_UPLOADS_URL + 'silhouettes/'
export const BASE_UPLOADS_SILHOUETTES_TOPS_URL = BASE_UPLOADS_SILHOUETTES_URL + 'tops/'
export const BASE_UPLOADS_SILHOUETTES_BOTTOMS_URL = BASE_UPLOADS_SILHOUETTES_URL + 'bottoms/'
export const BASE_UPLOADS_SILHOUETTES_SLEEVES_URL = BASE_UPLOADS_SILHOUETTES_URL + 'sleeves/'

// Print

export const PRINTS_URL = API_URL + 'prints'
export const PRINTS_VARIANTS_URL = API_URL + 'prints-variants'
export const ADD_PRINT_URL = API_URL + 'add-print'
export const ADD_PRINT_VARIANT_URL = API_URL + 'add-print-variant'
export const EDIT_PRINT_URL = API_URL + 'edit-print'
export const PRINTS_PALETTES_URL = API_URL + 'prints-palettes'
export const ADD_PRINT_PALETTE_URL = API_URL + 'add-print-palette'
export const REMOVE_PRINT_PALETTE_URL = API_URL + 'remove-print-palette'
export const ORDER_PALETTE_PRINTS_URL = API_URL + 'order-palette-prints'
export const REMOVE_PRINT_URL = API_URL + 'remove-print'

// Size

export const SIZE_URL = API_URL + 'sizes'
export const ADD_SIZE_URL = API_URL_ADMIN + 'add-size'
export const EDIT_SIZE_URL = API_URL_ADMIN + 'edit-size'

// Garment

export const GARMENTS_URL = API_URL + 'garments'
export const GARMENT_URL = API_URL + 'garment'
export const SEARCH_GARMENT_URL = API_URL + 'search-garment'

// Auth

export const SIGNIN_SHOPIFY_URL = BASE_URL + '/api/shopify/authorize'
export const GET_SHOPIFY_USER_URL = API_URL + '/shopify/getUser'
export const SIGNUP_USER = API_URL + '/signup';
export const SIGNIN_USER = API_URL + 'signin';
export const USER_REFRESH_URL = API_URL + 'refresh'
export const USER_SIGNOUT_URL = API_URL + 'signout'
export const USER_EDIT_URL = API_URL + 'edit'
