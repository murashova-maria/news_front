import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import { IProps } from '../../types'

export const InfoBlockCard: React.FC<IProps> = React.memo(({ item, hasNewsId }) => {

    const history = useNavigate()
    const path = useLocation().pathname

    return (
        <div onClick={() => history({pathname:`/news?newsid=28`})} className={`infoBlockCard ${item.tag}`}>
            <div className="infoBlockCard__left">
                <img src={item.img} alt="item" />
                <div className={`infoBlockCard__left_tag tag ${item.tag[0]}`}>{item.tag[0]}</div>
            </div>
            <div className="infoBlockCard__right">
                <div className="infoBlockCard__right_top">
                    {item.title}
                </div>
                <div className="infoBlockCard__right_bot">
                    <div className="infoBlockCard__right_bot_author">{item.author}</div>
                    <div className="infoBlockCard__right_bot_date">{item.date}</div>
                </div>
            </div>
        </div>
    )
})
