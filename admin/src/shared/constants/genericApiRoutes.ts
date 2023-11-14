export const BASE_URL = process.env.REACT_APP_BASE_API_URL || ''
export const API_URL_ADMIN = '/admin/'
export const BASE_UPLOADS_URL = BASE_URL + '/api/uploads/'

// Color

export const COLORS_URL = API_URL_ADMIN + 'colors'
export const ADD_COLOR_URL = API_URL_ADMIN + 'add-color'
export const EDIT_COLOR_URL = API_URL_ADMIN + 'edit-color'

// Print

export const PRINTS_URL = API_URL_ADMIN + 'prints'
export const ADD_PRINT_URL = API_URL_ADMIN + 'add-print'
export const EDIT_PRINT_URL = API_URL_ADMIN + 'edit-print'
export const BASE_UPLOADS_PRINTS_URL = BASE_UPLOADS_URL + 'prints/'
export const BASE_UPLOADS_PRINTS_HIGHS_URL = BASE_UPLOADS_PRINTS_URL + 'highs/'
export const BASE_UPLOADS_PRINTS_PREVIEWS_URL = BASE_UPLOADS_PRINTS_URL + 'previews/'

// Mannequin

export const MANNEQUINS_URL = API_URL_ADMIN + 'mannequins'
export const ADD_MANNEQUIN_URL = API_URL_ADMIN + 'add-mannequin'
export const EDIT_MANNEQUIN_URL = API_URL_ADMIN + 'edit-mannequin'
export const BASE_UPLOADS_MANNEQUINS_URL = BASE_UPLOADS_URL + 'mannequins/'
export const BASE_UPLOADS_MANNEQUINS_FRONTS_URL = BASE_UPLOADS_MANNEQUINS_URL + 'fronts/'
export const BASE_UPLOADS_MANNEQUINS_BACKS_URL = BASE_UPLOADS_MANNEQUINS_URL + 'backs/'