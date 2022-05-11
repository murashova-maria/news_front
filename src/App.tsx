import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Footer, Header } from "./components";
import "./assets/sass/style.scss";
import AppRouter from "./AppRouter";
import { PopupHandler } from "./components/PopupHandler";
import { ToastContainer } from "react-toastify";
import { ADMIN_PANEL } from './config'
import "react-toastify/dist/ReactToastify.css";
import {Twitter} from "./components/Twitter/Twitter";
import {Adsense} from "./components/Adsense/Adsense";

const App: React.FC = () => {
  const path = useLocation().pathname;
  const [isCreate, setIsCreate] = useState<boolean>(false);

  const checkAdmin = () => {
    const create = path.split("/").some((el) => el === "create");
    setIsCreate(create);
  };

  useEffect(() => {
    checkAdmin();
  }, [path]);

  return (
    <div className={isCreate ? "wrapper overflowX" : "wrapper"}>
      {!ADMIN_PANEL && <Header />}
      <PopupHandler />
      <ToastContainer />
      <div className={!ADMIN_PANEL ? "wrapper__content wrapper__content_public" : "wrapper__content"}>
        <div id="main" className={!ADMIN_PANEL ? "main" : "main h100vh"}>
          <AppRouter />
        </div>
          {!ADMIN_PANEL && <span className="ad-block">
              <Twitter />
              <Adsense slot="2148763374"/>
          </span>}
      </div>

      {!ADMIN_PANEL && <div className="main__section2">
          <Adsense slot="4719086396"/>
      </div>}
      {!ADMIN_PANEL && <Footer />}
    </div>
  );
};

export default App;
