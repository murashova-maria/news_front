import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { INewsItem, IProps } from '../../types'
import { IProps } from "../../types/api/subdomainTacnews";
import {Image} from "../shared/Image/Image";


export const TopCards: React.FC<IProps> = React.memo(({ item, hasNewsId }) => {

    const history = useNavigate()

    return (
        <div onClick={() => history({ pathname: `/news?newsid=${item?.id}` })} className={hasNewsId ? `littleCard ${item.tab.replace('&', '')} hasNewsId` : `littleCard ${item?.tab.replace('&', '')}`}>
            <div className={hasNewsId ? "littleCard__img hasNewsId" : "littleCard__img"}>
                <div className={`tag ${item?.tab.replace('&', '')}`}>{item?.tab}</div>
                <Image src={item?.media_link} alt="newsItems" />
                <div className="littleCard__img_title">
                    {item?.title}
                </div>
                <div className="blur"/>

            </div>
            <div className={hasNewsId ? "littleCard__desc hasNewsId" : 'littleCard__desc'}>
                <div className="littleCard__desc_top">
                    <div className="littleCard__desc_top_author">{item?.by}</div>
                    <div className="littleCard__desc_top_date">{item?.date}</div>
                </div>
                <div className="littleCard__desc_bot">
                    {item?.text || ''}
                </div>
            </div>
        </div>
    )
})
