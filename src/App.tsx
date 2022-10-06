import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Footer, Header } from "./components";
import "./assets/sass/style.scss";
import AppRouter from "./AppRouter";
import { PopupHandler } from "./components/PopupHandler";
import { ToastContainer } from "react-toastify";
import { ADMIN_PANEL } from "./config";
import "react-toastify/dist/ReactToastify.css";
import { Adsense } from "./components/Adsense/Adsense";
import axios from "axios";

// @ts-ignore
window.IS_PUBLIC_SITE = !ADMIN_PANEL;

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

  //Set user info
  const authToken = sessionStorage.getItem("token");
  useEffect(() => {
    if (authToken) {
      (async function () {
        const { data } = await axios.get(
          "https://admin.thinktac.io/api/user_info/",
          {
            headers: {
              Authorization: `Token ${authToken}`,
            },
          }
        );
        if (data) {
          sessionStorage.setItem('userInfo', JSON.stringify(data))
        }
      })();
    }
  }, [authToken]);

  return (
    <div className={isCreate ? "wrapper overflowX" : "wrapper"}>
      {!ADMIN_PANEL && <Header />}
      <PopupHandler />
      <ToastContainer />
      <div
        className={
          !ADMIN_PANEL
            ? "wrapper__content wrapper__content_public"
            : "wrapper__content"
        }
      >
        <div id="main" className={!ADMIN_PANEL ? "main" : "main h100vh"}>
          <AppRouter />
        </div>
        {!ADMIN_PANEL && (
          <span className="ad-block">
            <Adsense slot="2148763374" height="50%" width="360px" />
            <Adsense slot="9463166679" height="50%" width="360px" />
          </span>
        )}
      </div>

      {/*{!ADMIN_PANEL && <div className="main__section2">*/}
      {/*    <Adsense slot="4719086396" width="1200px" height="200px" />*/}
      {/*    <Adsense slot="1417155696" width="300px" height="200px" />*/}
      {/*</div>}*/}
      {!ADMIN_PANEL && <Footer />}
    </div>
  );
};

export default App;
