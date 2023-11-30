export const BASE_URL = process.env.REACT_APP_BASE_API_URL || ''
export const API_URL = '/'
export const API_URL_ADMIN = '/admin/'
export const BASE_UPLOADS_URL = BASE_URL + '/api/uploads/'
export const ADMIN_SIGNIN_URL = API_URL_ADMIN + 'signin'
export const ADMIN_REFRESH_URL = API_URL_ADMIN + 'refresh'
export const ADMIN_SIGNOUT_URL = API_URL_ADMIN + 'signout'
export const ADD_SUPER_ADMIN_URL = API_URL_ADMIN + 'add-super-admin'
export const EDIT_SUPER_ADMIN_URL = API_URL_ADMIN + 'edit-super-admin'
export const REMOVE_SUPER_ADMIN_URL = API_URL_ADMIN + 'remove-super-admin'
export const GET_SUPER_ADMINS_URL = API_URL_ADMIN + 'get-super-admins'

// Color

export const COLORS_URL = API_URL + 'colors'
export const COLORS_VARIANTS_URL = API_URL + 'colors-variants'
export const COLORS_PALETTES_URL = API_URL + 'colors-palettes'
export const ADD_COLOR_URL = API_URL_ADMIN + 'add-color'
export const ADD_COLOR_VARIANT_URL = API_URL_ADMIN + 'add-color-variant'
export const ADD_COLOR_PALETTE_URL = API_URL_ADMIN + 'add-color-palette'
export const REMOVE_COLOR_PALETTE_URL = API_URL_ADMIN + 'remove-color-palette'
export const ORDER_PALETTE_COLORS_URL = API_URL_ADMIN + 'order-palette-colors'
export const EDIT_COLOR_URL = API_URL_ADMIN + 'edit-color'
export const REMOVE_COLOR_URL = API_URL_ADMIN + 'remove-color'

// Print

export const PRINTS_URL = API_URL + 'prints'
export const PRINTS_VARIANTS_URL = API_URL + 'prints-variants'
export const PRINTS_PALETTES_URL = API_URL + 'prints-palettes'
export const ADD_PRINT_URL = API_URL_ADMIN + 'add-print'
export const ADD_PRINT_VARIANT_URL = API_URL_ADMIN + 'add-print-variant'
export const ADD_PRINT_PALETTE_URL = API_URL_ADMIN + 'add-print-palette'
export const REMOVE_PRINT_PALETTE_URL = API_URL_ADMIN + 'remove-print-palette'
export const ORDER_PALETTE_PRINTS_URL = API_URL_ADMIN + 'order-palette-prints'
export const EDIT_PRINT_URL = API_URL_ADMIN + 'edit-print'
export const BASE_UPLOADS_PRINTS_URL = BASE_UPLOADS_URL + 'prints/'
export const BASE_UPLOADS_PRINTS_HIGHS_URL = BASE_UPLOADS_PRINTS_URL + 'highs/'
export const BASE_UPLOADS_PRINTS_PREVIEWS_URL = BASE_UPLOADS_PRINTS_URL + 'previews/'
export const REMOVE_PRINT_URL = API_URL_ADMIN + 'remove-print'

// Mannequin

export const MANNEQUINS_URL = API_URL + 'mannequins'
export const ADD_MANNEQUIN_URL = API_URL_ADMIN + 'add-mannequin'
export const EDIT_MANNEQUIN_URL = API_URL_ADMIN + 'edit-mannequin'
export const BASE_UPLOADS_MANNEQUINS_URL = BASE_UPLOADS_URL + 'mannequins/'
export const BASE_UPLOADS_MANNEQUINS_FRONTS_URL = BASE_UPLOADS_MANNEQUINS_URL + 'fronts/'
export const BASE_UPLOADS_MANNEQUINS_BACKS_URL = BASE_UPLOADS_MANNEQUINS_URL + 'backs/'
export const REMOVE_MANNEQUIN_URL = API_URL_ADMIN + 'remove-mannequin'

// Silhouette

export const SILHOUETTES_URL = API_URL + 'silhouettes'
export const ADD_SILHOUETTE_URL = API_URL_ADMIN + 'add-silhouette'
export const EDIT_SILHOUETTE_URL = API_URL_ADMIN + 'edit-silhouette'
export const BASE_UPLOADS_SILHOUETTES_URL = BASE_UPLOADS_URL + 'silhouettes/'
export const BASE_UPLOADS_SILHOUETTES_TOPS_URL = BASE_UPLOADS_SILHOUETTES_URL + 'tops/'
export const BASE_UPLOADS_SILHOUETTES_BOTTOMS_URL = BASE_UPLOADS_SILHOUETTES_URL + 'bottoms/'
export const BASE_UPLOADS_SILHOUETTES_SLEEVES_URL = BASE_UPLOADS_SILHOUETTES_URL + 'sleeves/'
export const REMOVE_SILHOUETTE_URL = API_URL_ADMIN + 'remove-silhouette'

// Size

export const SIZE_URL = API_URL + 'sizes'
export const ADD_SIZE_URL = API_URL_ADMIN + 'add-size'
export const EDIT_SIZE_URL = API_URL_ADMIN + 'edit-size'
export const REMOVE_SIZE_URL = API_URL_ADMIN + 'remove-size'

// Size

export const GARMENTS_URL = API_URL + 'garments'
export const GARMENT_ADMIN_URL = API_URL_ADMIN + 'garment-admin'
export const GARMENTS_ADMIN_URL = API_URL_ADMIN + 'garments-admin'
export const ADD_GARMENT_URL = API_URL_ADMIN + 'add-garment'
export const EDIT_GARMENT_URL = API_URL_ADMIN + 'edit-garment'
export const REMOVE_GARMENT_URL = API_URL_ADMIN + 'remove-garment'