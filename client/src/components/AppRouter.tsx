import { Route, Routes } from 'react-router-dom';
import contents from 'routes/contentRoutes';
import {ArrayType, ObjectType} from 'shared/helpers/helpers';
import React from 'react';

const AppRouter = () => {

    // const isAuth = useSelector(isLoggedIn)

    const isAuth = true
    
    if (!isAuth) return null; // Render nothing if the user is not authenticated

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
        <Routes>
            {publicPages && renderRoutes(publicPages)}
            {privatePages && renderRoutes(privatePages)}
        </Routes>
    );
}
export default AppRouter;
