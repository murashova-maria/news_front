import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import newsSlice from './newsReducer'
import adminSlice from './adminReducer'
import dataAdminSlice from './dataAdminReducer'

const rootReducer = combineReducers({
    news: newsSlice,
    admin: adminSlice,
    dataADmin: dataAdminSlice
});

export const store = configureStore({
    reducer: rootReducer
});


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;