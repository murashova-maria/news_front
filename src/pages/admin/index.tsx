import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { BlockAdminCard } from '../../components'
import { useAppSelector } from '../../store'
import { IAdminItem } from '../../types'

export const Admin: React.FC = () => {

    const items = useAppSelector(state => state.admin.news)
    const [newsItems, setNewsItems] = useState<Array<IAdminItem>>(items)

    const history = useNavigate()

    return (
        <>
            <div className="circle firstcircle"></div>
            <div className="circle secondcircle"></div>
            <div className="circle thirdcircle"></div>
            <div className="circlebot fourthcircle"></div>

            <div className="buttons">
                    <div onClick={() => history({pathname: '/admin?popup=monitoring'})} className="buttons_monitoring">Monitoring sources</div>
                    <div onClick={() => history({pathname: '/admin/create'})} className="buttons_create">+ Create</div>
                </div>

            <div className="adminNews">
               

                <div className="adminNews__block">
                    <div className="adminNews__block_title">New item</div>
                    <BlockAdminCard items={newsItems.filter(el => el.status === 'newItem')} />
                </div>
                <div className="adminNews__block">
                    <div className="adminNews__block_title">Declined news</div>
                    <BlockAdminCard items={newsItems.filter(el => el.status === 'declinedNews')} />
                </div>
                <div className="adminNews__block">
                    <div className="adminNews__block_title">Published news</div>
                    <BlockAdminCard items={newsItems.filter(el => el.status === 'publishedNews')} />
                </div>
            </div>
        </>
    )
}
