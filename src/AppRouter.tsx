import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import { LOGIN_ADMIN, MAIN_ROUTE } from "./constants/paths";
import { PublicRoutes } from "./constants/routes";
import { useLocation } from "react-router-dom";
import { useGlobalState } from "./store";

const AppRouter: React.FC = () => {
  const [isLogin] = useGlobalState("isLogin");
  const [isAdmin, setIsAdmin] = useState(false);
  const history = useNavigate();

  const path: string = useLocation().pathname;
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const admin = path.split("/").some((el) => el === "admin");
    sessionStorage.setItem("isAdmin", admin.toString());
    setIsAdmin(admin);
  }, [path]);

  useEffect(() => {
    if (!token && isAdmin) {
      history({ pathname: LOGIN_ADMIN });
    }
  }, [isAdmin]);

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
