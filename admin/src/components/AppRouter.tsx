import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import contents from 'routes/contentRoutes';
import { ArrayType } from 'shared/helpers/helpers';
import React from 'react';
// import { isLoggedIn } from '../redux/reducers/authReducer';

const AppRouter = () => {

    // const isAuth = useSelector(isLoggedIn)

    const isAuth = true
    
    if (!isAuth) return null; // Render nothing if the user is not authenticated

    const { publicPages, adminPages } = contents;

    const renderRoutes = (pages: ArrayType) => {
        return pages.map(RouteElem => (
            <React.Fragment key={RouteElem.id}>
                <Route path={RouteElem.path} element={<RouteElem.element />} />
                {RouteElem.children && renderRoutes(RouteElem.children)}
            </React.Fragment>
        ));
    }

    return (
        <Routes>
            {publicPages && renderRoutes(publicPages)}
            {adminPages && renderRoutes(adminPages)}
        </Routes>
    );
}
export default AppRouter;