/* eslint-disable react/jsx-pascal-case */
import { Route, Routes } from 'react-router-dom';
import contents from 'routes/contentRoutes';
import { ArrayType, ObjectType, getCookie } from 'shared/helpers/helpers';
import React, { useEffect } from 'react';
import { Header } from './Header';
import Footer from './Footer';
import Aside from 'layout/Aside/Aside';
import NotFound from 'pages/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { isLogged, setIsLogged, setUserData } from 'redux/reducers/userReducer';
import { getUserShopify } from 'services/userService';

const AppRouter = () => {


    const isAuth = useSelector(isLogged)

    const dispatch = useDispatch()

    useEffect(() => {
        const token = getCookie('shopifyToken')
        if (token) {
            const checkUser = async () => {
                await getUserShopify(dispatch, token);
            }
            checkUser()
        } else {
            dispatch(setUserData({}))
            dispatch(setIsLogged(false))
        }
    }, [])

    const { publicPages, privatePages } = contents;

    const renderRoutes = (pages: ArrayType) => {
        return pages.map((RouteElem: ObjectType) => (
            <React.Fragment key={RouteElem.id}>
                <Route path={RouteElem.path} element={<RouteElem.element />} />
                {RouteElem.children && renderRoutes(RouteElem.children)}
            </React.Fragment>
        ));
    }

    return (
        <>
            <Header />
            <main className='main-content'>
                <Routes>
                    <Route element={<Aside />}>
                        {renderRoutes(privatePages)}
                    </Route>
                    {renderRoutes(publicPages)}
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}
export default AppRouter;
