import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import logo1 from '../../assets/img/firsticon.png';
import logo2 from '../../assets/img/TAC.png';
import insta from '../../assets/img/insta.png'
import face from '../../assets/img/face.png'
import telega from '../../assets/img/telega.png'
import twitter from '../../assets/img/twitter.png'
import utube from '../../assets/img/utube.png'
import { ABOUT_ROUTE, BUSINESS_ROUTE, CONTACT_ROUTE, COOKIES_ROUTE, INVESTIGATIONS_ROUTE, MAIN_ROUTE, NEW_ROUTE, SPORT_ROUTE, TECHNOLOGY_ROUTE, TERMS_ROUTE, WEATHER_ROUTE } from '../../constants/paths';

export const Footer: React.FC = () => {

    const history = useNavigate()
    const [isActive, setIsActive] = useState(false);

    const close = () => {
        document.querySelector('body')!.classList.remove('lock');
    }


    return (
        <footer className='footer'>
            <div className="footer__container">
                <div className="footer__body">
                    <div onClick={() => history({ pathname: MAIN_ROUTE })} className="footer__body_left">
                        <img className='header__logo' src={logo1} alt="logo" />
                        <img className='header__logo' src={logo2} alt="logo" />
                    </div>
                    <div className="footer__body_right">
                        <div className="footer__body_right_top">
                            <nav className="nav">
                                <ul className={`nav__listf footerList ${isActive ? 'active' : null}`}>
                                    <li onClick={close} className="nav__itemf">
                                        <NavLink onClick={() => setIsActive(false)} to={NEW_ROUTE} className="nav__linkf">
                                            New
                                    </NavLink>
                                    </li>
                                    <li onClick={close} className="nav__itemf">
                                        <NavLink onClick={() => setIsActive(false)} to={SPORT_ROUTE} className="nav__linkf">
                                            Sport
                                    </NavLink>
                                    </li>
                                    <li onClick={close} className="nav__itemf">
                                        <NavLink onClick={() => setIsActive(false)} to={INVESTIGATIONS_ROUTE} className="nav__linkf">
                                            Investigations
                                    </NavLink>
                                    </li>
                                    <li onClick={close} className="nav__itemf">
                                        <NavLink onClick={() => setIsActive(false)} to={WEATHER_ROUTE} className="nav__linkf">
                                            Weather
                                    </NavLink>
                                    </li>
                                    <li onClick={close} className="nav__itemf">
                                        <NavLink onClick={() => setIsActive(false)} to={BUSINESS_ROUTE} className="nav__linkf">
                                            Business & economy
                                    </NavLink>
                                    </li>
                                    <li onClick={close} className="nav__itemf">
                                        <NavLink onClick={() => setIsActive(false)} to={TECHNOLOGY_ROUTE} className="nav__linkf">
                                            Technology & Science
                                    </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="footer__body_right_bot">
                            <nav className="nav">
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
                                        <a href="/">
                                            <img src={insta} alt="insta"/>
                                        </a>
                                        <a href="/">
                                            <img src={face} alt="face"/>
                                        </a>
                                        <a href="/">
                                            <img src={twitter} alt="twitter"/>
                                        </a>
                                        <a href="/">
                                            <img src={telega} alt="telega"/>
                                        </a>
                                        <a href="/">
                                            <img src={utube} alt="utube"/>
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
