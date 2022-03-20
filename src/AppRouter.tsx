import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { MAIN_ROUTE } from './constants/paths'
import { PublicRoutes } from './constants/routes'

const AppRouter: React.FC = () => {
    return (
        <>
         <Routes>
            {PublicRoutes.map(({path, Element}) => (
                <Route key={path} path={path} element={<Element />} />
            ))}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
        </Routes>  
        </>
    )
}

export default AppRouter
