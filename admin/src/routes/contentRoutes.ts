import { lazy } from 'react';
import { faDiceD20, faDroplet, faHome, faLayerGroup, faPalette, faPaw } from '@fortawesome/free-solid-svg-icons';

const AUTH = {
	PAGE_404: lazy(() => import('pages/auth/page404/Page404')),
	LOGIN: lazy(() => import('pages/auth/login/Login')),
};

const LANDING = {
	DASHBOARD: lazy(() => import('pages/dashboard/Dashboard')),
	CUSTOMIZE: lazy(() => import('pages/customize/Customize')),
	CUSTOMIZE_COLORS: lazy(() => import('components/customize/colors/CustomizeColors')),
	CUSTOMIZE_LAYERS: lazy(() => import('components/customize/layers/CustomizeLayers')),
	CUSTOMIZE_PRINTS: lazy(() => import('components/customize/prints/CustomizePrints')),
	CUSTOMIZE_COLORS_PALLETTE: lazy(() => import('components/customize/colors/pallette/ColorsPallette')),
	CUSTOMIZE_LAYERS_PALLETTE: lazy(() => import('components/customize/layers/pallette/LayersPallette')),
	CUSTOMIZE_PRINTS_PALLETTE: lazy(() => import('components/customize/prints/pallette/PrintsPallette')),
};

const CustomizeChildrens = [
	{
		id: 'colors',
		text: 'Color',
		path: '/customize/colors',
		icon: faDroplet,
		element: LANDING.CUSTOMIZE_COLORS,
		exact: true,
		children: [
			{
				id: 'colors-pallette',
				text: 'Color Pallette',
				path: '/customize/colors-pallette',
				icon: faPalette,
				element: LANDING.CUSTOMIZE_COLORS_PALLETTE,
				exact: true,
			},
		]
	},
	{
		id: 'prints',
		text: 'Print',
		path: '/customize/prints',
		icon: faPaw,
		element: LANDING.CUSTOMIZE_LAYERS,
		exact: true,
		children: [
			{
				id: 'prints-pallette',
				text: 'Print Pallette',
				path: '/customize/prints-pallette',
				icon: faPalette,
				element: LANDING.CUSTOMIZE_PRINTS_PALLETTE,
				exact: true,
			},
		]
	},
	{
		id: 'layers',
		text: 'Layer',
		path: '/customize/layers',
		icon: faLayerGroup,
		element: LANDING.CUSTOMIZE_PRINTS,
		exact: true,
		children: [
			{
				id: 'layers-pallette',
				text: 'Layer Pallette',
				path: '/customize/layers-pallette',
				icon: faPalette,
				element: LANDING.CUSTOMIZE_LAYERS_PALLETTE,
				exact: true,
			},
		]
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
	},
	{
		id: 'customize',
		text: 'Customize',
		path: '/customize',
		icon: faDiceD20,
		element: LANDING.CUSTOMIZE,
		exact: true,
		children: CustomizeChildrens
	},
]

export const publicPages = [
	{
		id: 'Page404',
		text: '404 Page',
		path: '404',
		icon: faHome,
		element: AUTH.PAGE_404,
		exact: true,
	},
	{
		id: 'login',
		text: 'Login',
		path: 'login',
		icon: faHome,
		element: AUTH.LOGIN,
		exact: true,
	},
];

const contents = { publicPages, adminPages };

export default contents;