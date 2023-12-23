import { Route, Routes } from 'react-router-dom';
import contents from 'routes/contentRoutes';
import { ArrayType } from 'shared/helpers/helpers';
import React from 'react';
import PrivateWrapper from 'layout/PrivateWrapper/PrivateWrapper';

const AppRouter = () => {

    const { publicPages, adminPages, garmentPages } = contents;

    const allPages = [...publicPages, ...adminPages, ...garmentPages]

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
        <Routes>
            {allPages && renderRoutes(allPages)}
        </Routes>
    );
}
export default AppRouter;