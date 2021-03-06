// import {Main, Sport, Business, Investigations, New, Technology, Weather, Admin, CreatePage} from '../pages'
import { ADMIN_PANEL } from '../config'
import {Main, TabNews, Admin, CreatePage, SignIn, CorrectNews} from '../pages'
import { Navigate, Route, Routes, useNavigate } from "react-router";

import {
    MAIN_ROUTE,
    SPORT_ROUTE,
    ABOUT_ROUTE,
    CONTACT_ROUTE,
    TERMS_ROUTE,
    COOKIES_ROUTE,
    ADMIN_ROUTE,
    CREATE_ROUTE,
    TAB_NEWS,
    LOGIN_ADMIN,
    NEWS_ROUTE
} from './paths'
import { Metainfo } from '../pages/metainfo';

export const PublicRoutes = [
    {
        path: MAIN_ROUTE,
        Element: Main
    },
    {
        path: CREATE_ROUTE,
        Element: CreatePage
    },
    {
        path: ADMIN_ROUTE,
        Element: ADMIN_PANEL ? Admin : '' 
    },
    {
        path: ABOUT_ROUTE,
        Element: Metainfo
    },
    {
        path: CONTACT_ROUTE,
        Element: Metainfo
    },
    {
        path: TERMS_ROUTE,
        Element: Metainfo
    },
    {
        path: COOKIES_ROUTE,
        Element: Metainfo
    },
    {
        path: TAB_NEWS,
        Element: TabNews
    },
    {
        path: LOGIN_ADMIN,
        Element: ADMIN_PANEL ? SignIn : ''
    },
    {
        path: NEWS_ROUTE,
        Element: CorrectNews
    },
]
export const PrivateRoutes = [
    {
        path: MAIN_ROUTE,
        Element: Main
    },
    {
        path: SPORT_ROUTE,
        Element: TabNews
    },
]
