import React, { memo, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo1 from "../../assets/img/firsticon.png";
import logo2 from "../../assets/img/TAC.png";
import logo from "../../assets/img/Logo.svg";
import { MAIN_ROUTE, TAB_NEWS } from "../../constants/paths";
import { useHttp } from "../../hooks/useHttp";
import { BreackingType, TabType } from "../../types/api/subdomainTacnews";
import { useGlobalState } from "../../store";
import { Link } from "react-router-dom";
import {Button} from "../shared/Button/Button";

export const Header: React.FC = () => {
  const [isLogin] = useGlobalState("isLogin");

  const [isActive, setIsActive] = useState(false);
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
  }, [isLogin]);

  const addNewsHandler = () => {
    // todo add normal modal
    console.log('addNewsHandler')
  }

  return (
    <div className="header__wrapper">
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
                      to={TAB_NEWS + "?tab=" + id}
                      className="nav__link"
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            {/*<Button onCLick={addNewsHandler}>TIP US</Button>*/}
          </div>
        </div>
      </header>
      <div className="header__container bgcRed breakingContainer">
        {breacking && <div className="header__row">
          <span className="breaking__title">BREAKING</span>
          <span className="breaking__tire">—</span>
          <div className="breaking">
            <div className="breaking__title-news">
              {breacking.map(({ id, cupturn }) => (
                <Link
                  key={id}
                  to={`news?newsid=${id}`}
                  className="breaking__title-news__text"
                >
                  {cupturn}
                </Link>
              ))}
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default memo(Header);
