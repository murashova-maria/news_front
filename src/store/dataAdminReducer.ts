import { ITabsItem } from './../types/index';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface newsDataState {
    loading: boolean,
    error: string | null,
    tabs: Array<ITabsItem>
}

const initialState: newsDataState = {
    loading: false,
    error: null,
    tabs: [
        {
            tab: 'New',
            has: true
        },
        {
            tab: 'Sport',
            has: true
        },
        {
            tab: 'Investigations',
            has: true
        },
        {
            tab: 'Weather',
            has: false
        },
        {
            tab: 'Business & economy',
            has: false
        },
        {
            tab: 'Technology & Science',
            has: false
        },
    ]
}

const dataAdminSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setTabs(state: any, action) {
            state.tabs = action.payload
        }
    }
})

export default dataAdminSlice.reducer
export const { setTabs } = dataAdminSlice.actions;