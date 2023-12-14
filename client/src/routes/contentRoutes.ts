import { lazy } from 'react';

const AUTH = {
	DASHBOARD: lazy(() => import('pages/Dashboard')),
	// PAGE_404: lazy(() => import('pages/auth/page404/Page404')),
	SIGN_IN: lazy(() => import('pages/Signin/Signin')),
};

const LANDING = {
	// DASHBOARD: lazy(() => import('pages/dashboard/Dashboard')),
	CUSTOMIZATION: lazy(() => import('pages/Customization/Customization')),
	CUSTOMIZATION_GARMENTS: lazy(() => import('pages/CustomizationGarments/CustomizationGarments')),
	SHOPCART: lazy(() => import('pages/ShopCart'))
};

export const privatePages = [
	{
		id: 'Customization',
		text: 'Customization Page',
		path: 'customization',
		icon: '',
		element: LANDING.CUSTOMIZATION_GARMENTS,
		exact: true,
	},
	{
		id: 'Customization',
		text: 'Customization Page',
		path: 'customization/:id',
		icon: '',
		element: LANDING.CUSTOMIZATION,
		exact: true,
	},
	{
		id: 'ShopCart',
		text: 'Shop Page',
		path: 'shopcart',
		icon: '',
		element: LANDING.SHOPCART,
		exact: true,
	}
]

export const publicPages = [
	// {
	// 	id: 'Page404',
	// 	text: '404 Page',
	// 	path: '404',
	// 	icon: faHome,
	// 	element: AUTH.PAGE_404,
	// 	exact: true,
	// },
	{
		id: 'signin',
		text: 'Signin',
		path: 'signin',
		icon: '',
		element: AUTH.SIGN_IN,
		exact: true,
	},
	{
		id: "Dashboard",
		text: "Home Page",
		path: "/",
		icon: "",
		element: AUTH.DASHBOARD,
		exact: true
	}
];

const contents = { publicPages, privatePages };

export default contents;
