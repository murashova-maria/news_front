import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Footer, Header } from "./components/index";

import "./assets/sass/style.scss";
import AppRouter from "./AppRouter";
import { PopupHandler } from "./components/PopupHandler";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useGlobalState } from "./store";

const App: React.FC = () => {
  const path = useLocation().pathname;
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCreate, setIsCreate] = useState<boolean>(false);

  const checkAdmin = () => {
    const admin = path.split("/").some((el) => el === "admin");
    const create = path.split("/").some((el) => el === "create");
    setIsCreate(create);
    setIsAdmin(admin);
  };

  useEffect(() => {
    checkAdmin();
  }, [path]);

  return (
    <div className={isCreate ? "wrapper overflowX" : "wrapper"}>
      {!isAdmin && <Header />}
      <PopupHandler />
      <ToastContainer />
      <div className="wrapper__content">
        <div id="main" className={!isAdmin ? "main" : "main h100vh"}>
          <AppRouter />
        </div>
        {!isAdmin && <span className="ad-block"> </span>}
      </div>

      {!isAdmin && <div className="main__section2">Advertisement</div>}
      {!isAdmin && <Footer />}
    </div>
  );
};

export default App;
