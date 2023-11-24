import { lazy } from 'react';
import { faChildReaching, faDiceD20, faDroplet, faHome, faLayerGroup, faMaximize, faPalette, faPaw, faPersonDress, faRibbon, faShirt, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const AUTH = {
	PAGE_404: lazy(() => import('pages/auth/page404/Page404')),
	LOGIN: lazy(() => import('pages/auth/signin/Signin')),
};

const LANDING = {
	DASHBOARD: lazy(() => import('pages/dashboard/Dashboard')),
	SUPER_ADMIN: lazy(() => import('pages/super-admin/SuperAdmin')),
	CUSTOMIZE: lazy(() => import('pages/customize/Customize')),
	// Colors
	CUSTOMIZE_COLORS: lazy(() => import('components/customize/colors/CustomizeColors')),
	CUSTOMIZE_COLORS_PALLETTE: lazy(() => import('components/customize/colors/pallette/ColorsPallette')),
	// Prints
	CUSTOMIZE_PRINTS: lazy(() => import('components/customize/prints/CustomizePrints')),
	CUSTOMIZE_PRINTS_PALLETTE: lazy(() => import('components/customize/prints/pallette/PrintsPallette')),
	// Silhouettes
	CUSTOMIZE_SILHOUETTES: lazy(() => import('components/customize/silhouettes/CustomizeSilhouettes')),
	CUSTOMIZE_SILHOUETTES_TOP: lazy(() => import('components/customize/silhouettes/tops/TopSilhouettes')),
	CUSTOMIZE_SILHOUETTES_BOTTOM: lazy(() => import('components/customize/silhouettes/bottoms/BottomSilhouettes')),
	CUSTOMIZE_SILHOUETTES_SLEEVE: lazy(() => import('components/customize/silhouettes/sleeves/SleeveSilhouettes')),
	CUSTOMIZE_MANNEQUINS: lazy(() => import('components/customize/mannequins/CustomizeMannequins')),
	CUSTOMIZE_SIZES: lazy(() => import('components/customize/sizes/CustomizeSizes')),
};

const CustomizeChildrens = [
	{
		id: 'mannequins',
		text: 'Mannequin',
		path: '/customize/mannequins',
		icon: faPersonDress,
		element: LANDING.CUSTOMIZE_MANNEQUINS,
		exact: true,
		isPrivate: true,
	},
	{
		id: 'silhouettes',
		text: 'Silhouette',
		path: '/customize/silhouettes',
		icon: faLayerGroup,
		element: LANDING.CUSTOMIZE_SILHOUETTES,
		exact: true,
		isPrivate: true,
		children: [
			{
				id: 'silhouettes-top',
				text: 'Top Silhouettes',
				path: '/customize/silhouettes-top',
				icon: faShirt,
				element: LANDING.CUSTOMIZE_SILHOUETTES_TOP,
				exact: true,
				isPrivate: true,
			},
			{
				id: 'silhouettes-bottom',
				text: 'Bottom Silhouettes',
				path: '/customize/silhouettes-bottom',
				icon: faChildReaching,
				element: LANDING.CUSTOMIZE_SILHOUETTES_BOTTOM,
				exact: true,
				isPrivate: true,
			},
			{
				id: 'silhouettes-sleeve',
				text: 'Sleeve Silhouettes',
				path: '/customize/silhouettes-sleeve',
				icon: faRibbon,
				element: LANDING.CUSTOMIZE_SILHOUETTES_SLEEVE,
				exact: true,
				isPrivate: true,
			},
		]
	},
	{
		id: 'colors',
		text: 'Color',
		path: '/customize/colors',
		icon: faDroplet,
		element: LANDING.CUSTOMIZE_COLORS,
		exact: true,
		isPrivate: true,
		children: [
			{
				id: 'colors-pallette',
				text: 'Color Pallette',
				path: '/customize/colors-pallette',
				icon: faPalette,
				element: LANDING.CUSTOMIZE_COLORS_PALLETTE,
				exact: true,
				isPrivate: true,
			},
		]
	},
	{
		id: 'prints',
		text: 'Print',
		path: '/customize/prints',
		icon: faPaw,
		element: LANDING.CUSTOMIZE_PRINTS,
		exact: true,
		isPrivate: true,
		children: [
			{
				id: 'prints-pallette',
				text: 'Print Pallette',
				path: '/customize/prints-pallette',
				icon: faPalette,
				element: LANDING.CUSTOMIZE_PRINTS_PALLETTE,
				exact: true,
				isPrivate: true,
			},
		]
	},
	{
		id: 'sizes',
		text: 'Size',
		path: '/customize/sizes',
		icon: faMaximize,
		element: LANDING.CUSTOMIZE_SIZES,
		exact: true,
		isPrivate: true,
	},
]

export const adminPages = [
    {
		id: 'dashboard',
		path: '/',
		text: 'Dashboard',
		element: LANDING.DASHBOARD,
		icon: faHome,
		exact: true,
		isPrivate: true,
	},
	{
		id: 'customize',
		text: 'Customize',
		path: '/customize',
		icon: faDiceD20,
		element: LANDING.CUSTOMIZE,
		exact: true,
		children: CustomizeChildrens,
		isPrivate: true,
	},
	{
		id: 'super-admin',
		text: 'Super-Admins List',
		path: '/super-admins',
		icon: faUserGroup,
		element: LANDING.SUPER_ADMIN,
		exact: true,
		isPrivate: true,
	},
	
]

export const publicPages = [
	{
		id: 'Page404',
		text: '404 Page',
		path: '/404',
		icon: faHome,
		element: AUTH.PAGE_404,
		exact: true,
	},
	{
		id: 'admin-login',
		text: 'Admin Login',
		path: '/login',
		icon: faDiceD20,
		element: AUTH.LOGIN,
		exact: true,
	},
];

const contents = { publicPages, adminPages };

export default contents;