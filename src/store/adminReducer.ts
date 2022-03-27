import { IAdminItem } from './../types/index';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import admin1 from '../assets/img/admin1.jpg'
import admin2 from '../assets/img/admin2.jpg'
import admin3 from '../assets/img/admin3.jpg'
import admin4 from '../assets/img/admin4.jpg'
import admin5 from '../assets/img/admin5.jpg'
import admin6 from '../assets/img/admin6.jpg'

interface newsDataState {
    loading: boolean,
    error: string | null,
    news: Array<IAdminItem>
}

const initialState: newsDataState = {
    loading: false,
    error: null,
    news: [
        {
            id: 1,
            img: admin1,
            tag: ['Investigations'],
            title: 'Id arcu egestas et egestas augue. Tincidunt fermentum mattis tristique.',
            description: ``,
            author: 'By Africanews',
            date: '11:09 03.03.2022',
            status: 'newItem'
        },
        {
            id: 2,
            img: admin2,
            tag: ['Investigations'],
            title: 'Id arcu egestas et egestas augue. Tincidunt fermentum mattis tristique.',
            description: ``,
            author: 'By Africanews',
            date: '11:09 03.03.2022',
            status: 'newItem'
        },
        {
            id: 3,
            img: admin3,
            tag: ['Investigations'],
            title: 'Id arcu egestas et egestas augue. Tincidunt fermentum mattis tristique.',
            description: ``,
            author: 'By Africanews',
            date: '11:09 03.03.2022',
            status: 'declinedNews'
        },
        {
            id: 4,
            img: admin4,
            tag: ['Investigations'],
            title: 'Id arcu egestas et egestas augue. Tincidunt fermentum mattis tristique.',
            description: ``,
            author: 'By Africanews',
            date: '11:09 03.03.2022',
            status: 'declinedNews'
        },
        {
            id: 5,
            img: admin5,
            tag: ['Investigations'],
            title: 'Id arcu egestas et egestas augue. Tincidunt fermentum mattis tristique.',
            description: ``,
            author: 'By Africanews',
            date: '11:09 03.03.2022',
            status: 'publishedNews'
        },
        {
            id: 6,
            img: admin6,
            tag: ['Investigations'],
            title: 'Id arcu egestas et egestas augue. Tincidunt fermentum mattis tristique.',
            description: ``,
            author: 'By Africanews',
            date: '11:09 03.03.2022',
            status: 'publishedNews'
        },
    ]
}

const adminSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {}
})

export default adminSlice.reducer