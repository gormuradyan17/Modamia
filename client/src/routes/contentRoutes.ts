import { lazy } from 'react';

const AUTH = {
	// PAGE_404: lazy(() => import('pages/auth/page404/Page404')),
	// LOGIN: lazy(() => import('pages/auth/login/Login')),
};

const LANDING = {
	// DASHBOARD: lazy(() => import('pages/dashboard/Dashboard')),
	CUSTOMIZATION: lazy(() => import('pages/Customization/Customization')),
	CUSTOMIZATION_MANNEQUINS: lazy(() => import('pages/CustomizationMannequins/CustomizationMannequins')),
};

export const privatePages = [
	{
		id: 'Customization',
		text: 'Customization Page',
		path: 'customization',
		icon: '',
		element: LANDING.CUSTOMIZATION_MANNEQUINS,
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
	// {
	// 	id: 'login',
	// 	text: 'Login',
	// 	path: 'login',
	// 	icon: faHome,
	// 	element: AUTH.LOGIN,
	// 	exact: true,
	// },
];

const contents = { publicPages, privatePages };

export default contents;
