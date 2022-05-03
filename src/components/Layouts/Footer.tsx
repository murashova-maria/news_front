import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import logo1 from '../../assets/img/bluePlanet.png';
import logo2 from '../../assets/img/TAC.png';
import telegram from '../../assets/img/telega.png'
import twitter from '../../assets/img/twitter.png'
import { ABOUT_ROUTE, CONTACT_ROUTE, COOKIES_ROUTE, MAIN_ROUTE, TERMS_ROUTE, TAB_NEWS } from '../../constants/paths';
import { TabType } from "../../types/api/subdomainTacnews";
import { useHttp } from "../../hooks/useHttp";

export const Footer: React.FC = () => {

    const [isActive, setIsActive] = useState(false);
    const [tabs, setTabs] = useState<TabType[]>([]);

    const history = useNavigate();
    const { request } = useHttp();

    const close = () => {
        document.querySelector('body')!.classList.remove('lock');
    }

    useEffect(() => {
          (async function () {
            const resp: TabType[] | null = await request({
              path: "/tabs/",
              method: "GET",
            });
            if (resp) setTabs(resp);
          })();
      }, []);


    return (
        <footer className='footer'>
            <div className="footer__container">
                <div className="footer__body">
                    <div onClick={() => history({ pathname: MAIN_ROUTE })} className="footer__body_left">
                        <img className='header__logo footer__logo-first' src={logo1} alt="logo" />
                        <img className='header__logo' src={logo2} alt="logo" />
                    </div>
                    <div className="footer__body_right">
                        <div className="footer__body_right_top">
                            <nav className="nav">
                                <ul className={`nav__listf footerList ${isActive ? 'active' : null}`}>
                                    {tabs.map(({id, name}) => (
                                        <li key={id} onClick={close} className="nav__itemf">
                                            <NavLink onClick={() => setIsActive(false)} to={TAB_NEWS + '?tab=' + id} className="nav__linkf">
                                                {name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="footer__body_line"/>
                        <div className="footer__body_right_bot">
                            <nav>
                                <ul className={`nav__listf ${isActive ? 'active' : null}`}>
                                    <li onClick={close} className="nav__itemf">
                                        <NavLink onClick={() => setIsActive(false)} to={ABOUT_ROUTE} className="nav__linkf">
                                            About us
                                    </NavLink>
                                    </li>
                                    <li onClick={close} className="nav__itemf">
                                        <NavLink onClick={() => setIsActive(false)} to={CONTACT_ROUTE} className="nav__linkf">
                                        Contact us
                                    </NavLink>
                                    </li>
                                    <li onClick={close} className="nav__itemf">
                                        <NavLink onClick={() => setIsActive(false)} to={TERMS_ROUTE} className="nav__linkf">
                                        Terms of use
                                    </NavLink>
                                    </li>
                                    <li onClick={close} className="nav__itemf">
                                        <NavLink onClick={() => setIsActive(false)} to={COOKIES_ROUTE} className="nav__linkf">
                                        Cookies Policy
                                    </NavLink>
                                    </li>
                                    <div className="footer__body_right_bot_social">
                                        <a href="https://twitter.com/ThinkTAC2022" target="_blank" rel="noreferrer">
                                            <img src={twitter} alt="twitter"/>
                                        </a>
                                        <a href="/">
                                            <img src={telegram} alt="telegram"/>
                                        </a>
                                    </div>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
