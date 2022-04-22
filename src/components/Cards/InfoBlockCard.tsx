import React from 'react'
import { useLocation, useNavigate } from 'react-router'
// import { IProps } from '../../types'
import { IProps } from "../../types/api/subdomainTacnews";

export const InfoBlockCard: React.FC<IProps> = React.memo(({ item, hasNewsId }) => {

    const history = useNavigate()
    const path = useLocation().pathname

    return (
        <div onClick={() => history({pathname:`/news?newsid=${item.id}`})} className={`infoBlockCard ${item.tab.replace('&', '')}`}>
            <div className="infoBlockCard__left">
                <img src={item.media_link} alt="item" />
                <div className={`infoBlockCard__left_tag tag ${item.tab}`}>{item.tab}</div>
            </div>
            <div className="infoBlockCard__right">
                <div className="infoBlockCard__right_top">
                    {item.title}
                </div>
                <div className="infoBlockCard__right_bot">
                    <div className="infoBlockCard__right_bot_author">{item.by}</div>
                    <div className="infoBlockCard__right_bot_date">{item.date}</div>
                </div>
            </div>
        </div>
    )
})
