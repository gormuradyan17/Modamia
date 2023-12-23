/* eslint-disable react/jsx-pascal-case */
import { Route, Routes } from 'react-router-dom';
import contents from 'routes/contentRoutes';
import { ArrayType, ObjectType, eraseCookie, getCookie } from 'shared/helpers/helpers';
import React, { useEffect } from 'react';
import { Header } from './Header';
import Footer from './Footer';
import Aside from 'layout/Aside/Aside';
import NotFound from 'pages/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { isLogged, setIsLogged, setUserData } from 'redux/reducers/userReducer';
import { checkAuth } from 'services/userService';
import PrivateWrapper from 'layout/PrivateWrapper/PrivateWrapper';

const AppRouter = () => {
    const logged = useSelector(isLogged);
    const dispatch = useDispatch();

    const checkAuthentication = async () => {
        const token = getCookie('accessToken');
        if (token) {
            const data = await checkAuth();
            if (data && data?.user?.id) {
                dispatch(setIsLogged(true));
                dispatch(setUserData(data?.user));
            } else {
                eraseCookie('accessToken');
                dispatch(setIsLogged(false));
                dispatch(setUserData({}));
            }
        } else {
            dispatch(setUserData({}));
            dispatch(setIsLogged(false));
        }
    };

    useEffect(() => {
        checkAuthentication();
    }, []);

    const { publicPages, privatePages } = contents;

    const allPages = [...publicPages, ...privatePages]

    const renderRoutes = (pages: ArrayType) => {
        return pages.map(RouteElem => (
            <React.Fragment key={RouteElem.id}>
                <Route path={RouteElem.path} element={
                    RouteElem?.isPrivate ? <PrivateWrapper><RouteElem.element /></PrivateWrapper> : <RouteElem.element />
                } />
                {RouteElem.children && renderRoutes(RouteElem.children)}
            </React.Fragment>
        ));
    }

    return (
        <>
            <Header />
            {logged && <Aside />}
            <main className='main-content'>
                <Routes>
                    {allPages && renderRoutes(allPages)}
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
};

export default AppRouter;
