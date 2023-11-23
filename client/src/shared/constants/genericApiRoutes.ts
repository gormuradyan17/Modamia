export const BASE_URL = process.env.REACT_APP_BASE_API_URL || ''
export const API_URL = '/'
export const BASE_UPLOADS_URL = BASE_URL + '/api/uploads/'
export const API_URL_ADMIN = '/admin/'

export const COLORS_URL = API_URL + 'colors'
export const COLORS_VARIANTS_URL = API_URL + 'colors-variants'
export const COLORS_PALETTES_URL = API_URL + 'colors-palettes'
export const MANNEQUINS_URL = API_URL + 'mannequins'

export const BASE_UPLOADS_MANNEQUINS_URL = BASE_UPLOADS_URL + 'mannequins/'
export const BASE_UPLOADS_MANNEQUINS_FRONTS_URL = BASE_UPLOADS_MANNEQUINS_URL + 'fronts/'
export const BASE_UPLOADS_MANNEQUINS_BACKS_URL = BASE_UPLOADS_MANNEQUINS_URL + 'backs/'

export const BASE_UPLOADS_PRINTS_URL = BASE_UPLOADS_URL + 'prints/'
export const BASE_UPLOADS_PRINTS_HIGHS_URL = BASE_UPLOADS_PRINTS_URL + 'highs/'
export const BASE_UPLOADS_PRINTS_PREVIEWS_URL = BASE_UPLOADS_PRINTS_URL + 'previews/'

export const width = 600;
export const height = 900;
// export const width = 483;
// export const height = 1056;

export const M_I = "/image/Mannequin/mannequin2.png";

export const B_G1 = "/image/Prints/print1.png";
export const B_G2 = "/image/Prints/print2.png";
export const B_G3 = "/image/Prints/print3.png";

export const T_I1 = "/image/Silhouettes/top/top1.png";
export const T_I2 = "/image/Silhouettes/top/top-2.png";
export const T_I3 = "/image/Silhouettes/top/top3.png";
export const T_I4 = "/image/Silhouettes/top/jacket-bodice.png";

export const B_I1 = "/image/Silhouettes/bottom/pant1.png";
export const B_I2 = "/image/Silhouettes/bottom/pant2.png";
export const B_I3 = "/image/Silhouettes/bottom/skirt1.png";
export const B_I4 = "/image/Silhouettes/bottom/skirt2.png";
export const B_I5 = "/image/Silhouettes/bottom/skirt3.png";
export const B_I6 = "/image/Silhouettes/bottom/skirt-4.png";

export const S_I1 = "/image/Silhouettes/sleeve/sleeve-1.png"
export const S_I2 = "/image/Silhouettes/sleeve/sleeve-2.png"
export const S_I3 = "/image/Silhouettes/sleeve/sleeve-3.png"

const topModels = [
	{src: T_I1, isActive: false},
	{src: T_I2, isActive: false},
	{src: T_I3, isActive: false},
	{src: T_I4, isActive: false}
];
const sleeveModels = [
	{src: S_I1, isActive: false},
	{src: S_I2, isActive: false},
	{src: S_I3, isActive: false}
];
const bottomModels = [
	{src: B_I1, isActive: false},
	{src: B_I2, isActive: false},
	{src: B_I3, isActive: false},
	{src: B_I4, isActive: false},
	{src: B_I5, isActive: false},
	{src: B_I6, isActive: false}
];

export const modelData = [
	{src: B_I2, color: '#cb0e2a', printImageURL: B_G2},
	{src: T_I4, color: '#2e1', printImageURL: B_G3},
	// {src: S_I2, color: '#17d011', printImageURL: B_G3}
]

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
export const ADD_PRINT_URL = API_URL_ADMIN + 'add-print'
export const ADD_PRINT_VARIANT_URL = API_URL_ADMIN + 'add-print-variant'
export const EDIT_PRINT_URL = API_URL_ADMIN + 'edit-print'
export const PRINTS_PALETTES_URL = API_URL + 'prints-palettes'
