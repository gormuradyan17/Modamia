import { faBasketShopping, faDiceD20, faGlobe, faHome, faPalette, faShirt, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { lazy } from 'react';

const AUTH = {
	DASHBOARD: lazy(() => import('pages/Dashboard')),
	SIGN_IN: lazy(() => import('pages/Signin/Signin')),
	SIGN_UP:lazy(()=>import('pages/SignUp')),
	FORGOT:lazy(()=>import('pages/Forgot/Forgot')),
	RECOVERY:lazy(()=>import('pages/Recovery/Recovery'))
};
const LANDING = {
	DASHBOARD: lazy(() => import('pages/privatePages/Dashboard')),
	CUSTOMIZATION: lazy(() => import('pages/Customization/Customization')),
	CUSTOMIZATION_GARMENTS: lazy(() => import('pages/CustomizationGarments/CustomizationGarments')),
	SHOPCART: lazy(() => import('pages/ShopCart')),
	PROFILE: lazy(() => import("pages/privatePages/Profile")),
	PRODUCTS: lazy(() => import("pages/privatePages/Products")),
	GARMENTS: lazy(() => import("pages/privatePages/Garments")),
	ALLGARMENTS: lazy(() => import('pages/privatePages/Garments/AllGarments')),
	MYGARMENTS: lazy(() => import('pages/privatePages/Garments/MyGarments')),
	COLORPRINTLIB: lazy(() => import("pages/privatePages/ColorPrintLib")),
	NOTFOUND: lazy(() => import("pages/NotFound"))
};

export const privatePages = [
	{
		id: 'Dashboard',
		text: 'Dashboard',
		path: '/home',
		icon: faHome,
		element: LANDING.DASHBOARD,
		exact: true,
		isPrivate: true,
	},
	{
		id: 'Customization',
		text: 'Customization',
		path: '/customization',
		icon: faDiceD20,
		element: LANDING.CUSTOMIZATION_GARMENTS,
		isPrivate: true,
	},
	{
		id: 'Customization Page',
		path: '/customization/:id',
		icon: '',
		element: LANDING.CUSTOMIZATION,
		exact: true,
	},
	{
		id: 'ShopCart',
		text: 'Cart',
		path: '/shopcart',
		icon: faBasketShopping,
		element: LANDING.SHOPCART,
		isPrivate: true,
	},

	{
		id: 'Profile',
		text: 'Profile',
		path: '/profile',
		icon: faUser,
		element: LANDING.PROFILE,
		exact: true,
		isPrivate: true,
	},
	{
		id: 'Garments',
		text: 'Garments',
		path: '/garments',
		icon: faShirt,
		element: LANDING.GARMENTS,
		exact: true,
		isPrivate: true,
		children: [
			{
				id: 'all-garments',
				text: 'All Garments',
				path: '/garments/all',
				icon: faGlobe,
				element: LANDING.ALLGARMENTS,
				exact: true,
				isPrivate: true,
			},
			{
				id: 'my-garments',
				text: 'My Garments',
				path: '/garments/my',
				icon: faUserTie,
				element: LANDING.MYGARMENTS,
				exact: true,
				isPrivate: true,
			},
		]
	},
	{
		id: 'COLORPRINTLIB',
		text: 'Color & print library',
		path: '/colorprintlib',
		icon: faPalette,
		element: LANDING.COLORPRINTLIB,
		isPrivate: true,
		exact: true
	},

]

export const publicPages = [
	{
		id: 'signin',
		text: 'Signin',
		path: 'signin',
		icon: '',
		element: AUTH.SIGN_IN,
		exact: true,
	},
	{
		id: 'signup',
		text: 'SignUp',
		path: 'signup',
		icon: '',
		element: AUTH.SIGN_UP,
		exact: true,
	},
	{
		id: "Dashboard",
		text: "Home Page",
		path: "/",
		icon: "",
		element: AUTH.DASHBOARD,
		exact: true,
		isPrivate: false,
	},
	{
		id: 'forgot',
		text: 'Forgot',
		path: 'forgot',
		icon: '',
		element: AUTH.FORGOT,
		exact: true,
	},
	{
		id: 'recovery',
		text: 'Recovery',
		path: 'recovery/:code',
		icon: '',
		element: AUTH.RECOVERY,
		exact: true,
	},
];

const contents = { publicPages, privatePages };

export default contents;
