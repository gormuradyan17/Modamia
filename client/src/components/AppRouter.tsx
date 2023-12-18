/* eslint-disable react/jsx-pascal-case */
import { Route, Routes } from 'react-router-dom';
import contents from 'routes/contentRoutes';
import { ArrayType, ObjectType } from 'shared/helpers/helpers';
import React from 'react';
import { Header } from './Header';
import Footer from './Footer';
import Aside from 'layout/Aside/Aside';
import NotFound from 'pages/NotFound';

const AppRouter = () => {


    const isAuth = true
    // if (!isAuth) return null; // Render nothing if the user is not authenticated

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
                    {isAuth && <Route element={<Aside />}>
                        {renderRoutes(privatePages)}
                    </Route>}
                    {!isAuth && renderRoutes(publicPages)}
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}
export default AppRouter;
