import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { setTabs } from '../../store/dataAdminReducer'

export const Tab = ({tab} : any) => {

    const dispatch = useAppDispatch()
    const tabs = useAppSelector(state => state.dataADmin.tabs)

const changeTab = (tab:any) => {
    
    const newArr = tabs.map((el:any) => {
        if (el.tab === tab) {
            el = { ...el, has: !el.has}
        }
        return el
    })
    dispatch(setTabs(newArr))
}

    return (
        <div onClick={() => changeTab(tab)} className={`tab ${tab}`}>
            {tab}
        </div>
    )
}
