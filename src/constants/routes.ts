import { CorrectNews } from './../pages/correctNews/index';
// import {Main, Sport, Business, Investigations, New, Technology, Weather, Admin, CreatePage} from '../pages'
import {Main, Sport, Admin, CreatePage} from '../pages'
import {
    MAIN_ROUTE,
    SPORT_ROUTE,
    // BUSINESS_ROUTE,
    // INVESTIGATIONS_ROUTE,
    // NEW_ROUTE,
    // TECHNOLOGY_ROUTE,
    ABOUT_ROUTE,
    CONTACT_ROUTE,
    TERMS_ROUTE,
    COOKIES_ROUTE,
    // NEWS_ROUTE,
    // WEATHER_ROUTE,
    ADMIN_ROUTE,
    CREATE_ROUTE,
    TAB_NEWS,
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
        Element: Admin
    },
    // {
    //     path: WEATHER_ROUTE,
    //     Element: Weather
    // },
    // {
    //     path: NEWS_ROUTE,
    //     Element: CorrectNews
    // },
    // {
    //     path: SPORT_ROUTE,
    //     Element: Sport
    // },
    // {
    //     path: BUSINESS_ROUTE,
    //     Element: Business
    // },
    // {
    //     path: INVESTIGATIONS_ROUTE,
    //     Element: Investigations
    // },
    // {
    //     path: NEW_ROUTE,
    //     Element: New
    // },
    // {
    //     path: TECHNOLOGY_ROUTE,
    //     Element: Technology
    // },
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
        Element: Sport
    },
]
export const PrivateRoutes = [
    {
        path: MAIN_ROUTE,
        Element: Main
    },
    {
        path: SPORT_ROUTE,
        Element: Sport
    },
    // {
    //     path: BUSINESS_ROUTE,
    //     Element: Business
    // },
    // {
    //     path: INVESTIGATIONS_ROUTE,
    //     Element: Investigations
    // },
    // {
    //     path: NEW_ROUTE,
    //     Element: New
    // },
    // {
    //     path: TECHNOLOGY_ROUTE,
    //     Element: Technology
    // },
]