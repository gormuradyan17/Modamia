export const BASE_URL = process.env.REACT_APP_BASE_API_URL || ''
export const API_URL = '/'
export const API_URL_ADMIN = '/admin/'
export const BASE_UPLOADS_URL = BASE_URL + '/api/uploads/'

// Color

export const COLORS_URL = API_URL + 'colors'
export const COLORS_VARIANTS_URL = API_URL + 'colors-variants'
export const ADD_COLOR_URL = API_URL_ADMIN + 'add-color'
export const ADD_COLOR_VARIANT_URL = API_URL_ADMIN + 'add-color-variant'
export const EDIT_COLOR_URL = API_URL_ADMIN + 'edit-color'

// Print

export const PRINTS_URL = API_URL + 'prints'
export const PRINTS_VARIANTS_URL = API_URL + 'prints-variants'
export const ADD_PRINT_URL = API_URL_ADMIN + 'add-print'
export const ADD_PRINT_VARIANT_URL = API_URL_ADMIN + 'add-print-variant'
export const EDIT_PRINT_URL = API_URL_ADMIN + 'edit-print'
export const BASE_UPLOADS_PRINTS_URL = BASE_UPLOADS_URL + 'prints/'
export const BASE_UPLOADS_PRINTS_HIGHS_URL = BASE_UPLOADS_PRINTS_URL + 'highs/'
export const BASE_UPLOADS_PRINTS_PREVIEWS_URL = BASE_UPLOADS_PRINTS_URL + 'previews/'

// Mannequin

export const MANNEQUINS_URL = API_URL + 'mannequins'
export const ADD_MANNEQUIN_URL = API_URL_ADMIN + 'add-mannequin'
export const EDIT_MANNEQUIN_URL = API_URL_ADMIN + 'edit-mannequin'
export const BASE_UPLOADS_MANNEQUINS_URL = BASE_UPLOADS_URL + 'mannequins/'
export const BASE_UPLOADS_MANNEQUINS_FRONTS_URL = BASE_UPLOADS_MANNEQUINS_URL + 'fronts/'
export const BASE_UPLOADS_MANNEQUINS_BACKS_URL = BASE_UPLOADS_MANNEQUINS_URL + 'backs/'

// Silhouette

export const SILHOUETTES_URL = API_URL + 'silhouettes'
export const ADD_SILHOUETTE_URL = API_URL_ADMIN + 'add-silhouette'
export const EDIT_SILHOUETTE_URL = API_URL_ADMIN + 'edit-silhouette'
export const BASE_UPLOADS_SILHOUETTES_URL = BASE_UPLOADS_URL + 'silhouettes/'
export const BASE_UPLOADS_SILHOUETTES_TOPS_URL = BASE_UPLOADS_SILHOUETTES_URL + 'tops/'
export const BASE_UPLOADS_SILHOUETTES_BOTTOMS_URL = BASE_UPLOADS_SILHOUETTES_URL + 'bottoms/'
export const BASE_UPLOADS_SILHOUETTES_SLEEVES_URL = BASE_UPLOADS_SILHOUETTES_URL + 'sleeves/'