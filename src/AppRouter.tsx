import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import { LOGIN_ADMIN, MAIN_ROUTE } from "./constants/paths";
import { PublicRoutes } from "./constants/routes";
import { useLocation } from "react-router-dom";
import { ADMIN_PANEL } from './config'

const AppRouter: React.FC = () => {
  const history = useNavigate();
  const path: string = useLocation().pathname;
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token && ADMIN_PANEL) {
      history({ pathname: LOGIN_ADMIN });
    }
  }, [path]);


  return (
    <>
      <Routes>
        {PublicRoutes.map(({ path, Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
        <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
      </Routes>
    </>
  );
};

export default AppRouter;
