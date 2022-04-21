import React, { memo, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo1 from "../../assets/img/firsticon.png";
import logo2 from "../../assets/img/TAC.png";
import logo from "../../assets/img/Logo.svg";
import {
  MAIN_ROUTE,
  TAB_NEWS,
} from "../../constants/paths";
import { useHttp } from "../../hooks/useHttp";
import { BreackingType, TabType } from "../../types/api/subdomainTacnews";
import { useGlobalState } from "../../store";


export const Header: React.FC = () => {
  const [isLogin] = useGlobalState("isLogin");

  const [isActive, setIsActive] = useState(false);
  const [numberNews, setNumberNews] = useState(0);
  const [breacking, setBreacking] = useState<BreackingType[]>([]);
  const [tabs, setTabs] = useState<TabType[]>([]);

  const history = useNavigate();
  const { request } = useHttp();

  const open = () => {
    setIsActive(!isActive);
    document.querySelector("body")!.classList.toggle("lock");
  };

  const close = () => {
    document.querySelector("body")!.classList.remove("lock");
  };

  useEffect(() => {
    if (!isLogin) {
      (async function () {
        const resp: BreackingType[] | null = await request({
          path: "/breacking/",
          method: "GET",
        });
        if (resp) setBreacking(resp);
      })();

      (async function () {
        const resp: TabType[] | null = await request({
          path: "/tabs/",
          method: "GET",
        });
        if (resp) setTabs(resp);
      })();
    }
    const intervalId = setInterval(() => {
      setNumberNews(Math.floor(Math.random() * breacking.length));
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__row">
            <div className="header__menu menu">
              <div
                onClick={open}
                className={`menu__icon icon-menu ${isActive ? "active" : null}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div
              onClick={() => history({ pathname: MAIN_ROUTE })}
              className="header__doubleLogo"
            >
              <img className="header__logo" src={logo} alt="logo" />
              {/* <img className="header__logo" src={logo1} alt="logo" />
              <img className="header__logo" src={logo2} alt="logo" /> */}
            </div>

            <nav className="nav">
              <ul className={`nav__list ${isActive ? "active" : null}`}>
                {tabs.map(({ id, name }) => (
                  <li key={id} onClick={close} className="nav__item">
                    <NavLink
                      onClick={() => setIsActive(false)}
                      to={TAB_NEWS + '?tab=' + id}
                      className="nav__link"
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className="header__container bgcRed">
        <div className="header__row">
        <span className="breaking__title">BREACKING</span>
          <div className="breaking">
            <div className="breaking__title-news">
              <span className="breaking__tire">—</span>
              {breacking[numberNews]?.title}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
