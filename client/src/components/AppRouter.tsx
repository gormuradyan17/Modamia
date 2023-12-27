/* eslint-disable react/jsx-pascal-case */
import { Route, Routes } from 'react-router-dom';
import contents from 'routes/contentRoutes';
import { ArrayType } from 'shared/helpers/helpers';
import { Header } from './Header';
import Footer from './Footer';
import Aside from 'layout/Aside/Aside';
import NotFound from 'pages/NotFound';
import { useSelector } from 'react-redux';
import { isLogged } from 'redux/reducers/userReducer';
import PrivateWrapper from 'layout/PrivateWrapper/PrivateWrapper';
import { Fragment } from 'react';

const AppRouter = () => {

    const logged = useSelector(isLogged)
    
    const { publicPages, privatePages } = contents;

    const allPages = [...publicPages, ...privatePages]

    const renderRoutes = (pages: ArrayType) => {
        return pages.map(RouteElem => (
            <Fragment key={RouteElem.id}>
                <Route path={RouteElem.path} element={
                    RouteElem?.isPrivate ? <PrivateWrapper><RouteElem.element /></PrivateWrapper> : <RouteElem.element />
                } />
                {RouteElem.children && renderRoutes(RouteElem.children)}
            </Fragment>
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
