import React, {memo, useEffect, useRef, useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo1 from "../../assets/img/firsticon.png";
import logo2 from "../../assets/img/TAC.png";
import logo from "../../assets/img/Logo.svg";
import { MAIN_ROUTE, TAB_NEWS } from "../../constants/paths";
import { useHttp } from "../../hooks/useHttp";
import { BreackingType, TabType } from "../../types/api/subdomainTacnews";
import { useGlobalState } from "../../store";
import { Link } from "react-router-dom";
import {Modal} from "../shared/Modal/Modal";
import {useModal} from "../../hooks/useModal";
import {Button} from "../shared/Button/Button";
import {AddNewsModal} from "../AddNewsModal/AddNewsModal";

const animationDuration = 6;

export const Header: React.FC = () => {
  const [isLogin] = useGlobalState("isLogin");

  const [isActive, setIsActive] = useState(false);
  const [breacking, setBreacking] = useState<BreackingType[]>([]);
  const [tabs, setTabs] = useState<TabType[]>([]);

  const history = useNavigate();
  const { request } = useHttp();

  const animationRef = useRef<HTMLDivElement>(null);

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

  const addNewsModal = useModal();
  const breakingNewsModal = useModal();

  const addNewsHandler = () => {
    addNewsModal.onOpen();
  }

  useEffect(() => {
    if (animationRef.current && breacking.length) {
      animationRef.current.style.animationDuration = `${breacking.length * animationDuration}s`;
    }
  }, [breacking])

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
            <Button onClick={addNewsHandler} className="header__addNewsBtn">TIP US</Button>
          </div>
        </div>
      </header>
      <div className="header__container bgcRed breakingContainer">
        {breacking && <div className="header__row">
          <span className="breaking__title">BREAKING</span>
          <span className="breaking__tire">—</span>
          <div className="breaking">
            <div className="breaking__title-news" ref={animationRef}>
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
          <div className="breaking__allNews" onClick={breakingNewsModal.onOpen}>View all breaking news</div>
        </div>}
      </div>
      {addNewsModal.isOpened && <AddNewsModal onClose={addNewsModal.onClose} isOpened={addNewsModal.isOpened} />}
      {breakingNewsModal.isOpened && <Modal onClose={breakingNewsModal.onClose}
                                            isOpened={breakingNewsModal.isOpened}
                                            title="BREAKING NEWS"
                                            fullWidth
      >
        <div className="breaking__allNews-modal">
          {breacking.map(({ id, cupturn, date, }) => (
              <Link
                  key={id}
                  to={`news?newsid=${id}`}
                  className="breaking__title-all-news"
                  onClick={breakingNewsModal.onClose}
              >
                <div className="breaking__title-all-news-title" title={cupturn}>{cupturn}</div>
                <div className="breaking__title-all-news-date">{date}</div>
              </Link>
          ))}
        </div>
      </Modal>}
    </div>
  );
};

export default memo(Header);
