import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

import logo1 from '../../assets/img/firsticon.png';
import logo2 from '../../assets/img/TAC.png';
import { BUSINESS_ROUTE, INVESTIGATIONS_ROUTE, MAIN_ROUTE, NEW_ROUTE, SPORT_ROUTE, TECHNOLOGY_ROUTE, WEATHER_ROUTE } from '../../constants/paths';

export const Header: React.FC = () => {

    const [isActive, setIsActive] = useState(false);
    const [numberNews, setNumberNews] = useState(0)

    const news = [
        'Nunc interdum nunc, vel varius scelerisque. 1',
        'Nunc interdum nunc, vel varius. 2',
        'Nunc interdum nunc, vel. 3'
    ]



    const history = useNavigate()

    const open = () => {
        setIsActive(!isActive);
        document.querySelector('body')!.classList.toggle('lock');
    };

    const close = () => {
        document.querySelector('body')!.classList.remove('lock');
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNumberNews(Math.floor(Math.random() * news.length))
        }, 4000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
            <header className="header">
                <div className="header__container">
                    <div className="header__row">
                        <div className="header__menu menu">
                            <div onClick={open}
                                className={`menu__icon icon-menu ${isActive ? 'active' : null}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        <div onClick={() => history({ pathname: MAIN_ROUTE })} className='header__doubleLogo'>
                            <img className='header__logo' src={logo1} alt="logo" />
                            <img className='header__logo' src={logo2} alt="logo" />
                        </div>

                        <nav className="nav">
                            <ul className={`nav__list ${isActive ? 'active' : null}`}>
                                <li onClick={close} className="nav__item">
                                    <NavLink onClick={() => setIsActive(false)} to={NEW_ROUTE} className="nav__link">
                                        New
                                    </NavLink>
                                </li>
                                <li onClick={close} className="nav__item">
                                    <NavLink onClick={() => setIsActive(false)} to={SPORT_ROUTE} className="nav__link">
                                        Sport
                                    </NavLink>
                                </li>
                                <li onClick={close} className="nav__item">
                                    <NavLink onClick={() => setIsActive(false)} to={INVESTIGATIONS_ROUTE} className="nav__link">
                                        Investigations
                                    </NavLink>
                                </li>
                                <li onClick={close} className="nav__item">
                                    <NavLink onClick={() => setIsActive(false)} to={WEATHER_ROUTE} className="nav__link">
                                        Weather
                                    </NavLink>
                                </li>
                                <li onClick={close} className="nav__item">
                                    <NavLink onClick={() => setIsActive(false)} to={BUSINESS_ROUTE} className="nav__link">
                                        Business & economy
                                    </NavLink>
                                </li>
                                <li onClick={close} className="nav__item">
                                    <NavLink onClick={() => setIsActive(false)} to={TECHNOLOGY_ROUTE} className="nav__link">
                                        Technology & Science
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </header>
            <div className="header__container bgcRed">
                <div className="header__row">
                    <div className="breaking">
                        <span className='breaking__title'>BREACKING</span> <span className='breaking__tire'>—</span> {news[numberNews]}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
