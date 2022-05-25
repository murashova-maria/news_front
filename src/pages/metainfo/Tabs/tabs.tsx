import React from 'react'
import { NavLink } from 'react-router-dom'
import { ABOUT_ROUTE, CONTACT_ROUTE, COOKIES_ROUTE, TERMS_ROUTE } from '../../../constants/paths'

export const Tabs = () => {
    return (
        <div className='tabs'>
            <div className="tabs__container">
                <NavLink to={ABOUT_ROUTE} className="tabs__link">
                    About Us
               </NavLink>
                <NavLink to={CONTACT_ROUTE} className="tabs__link">
                    Contact Us
               </NavLink>
                <NavLink to={TERMS_ROUTE} className="tabs__link">
                    Terms of use
               </NavLink>
                <NavLink to={COOKIES_ROUTE} className="tabs__link">
                    Privacy Policy
               </NavLink>
            </div>
        </div>
    )
}
