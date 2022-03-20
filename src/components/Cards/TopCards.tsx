import React from 'react'
import { INewsItem, IProps } from '../../types'



export const TopCards: React.FC<IProps> = React.memo(({ item, hasNewsId }) => {
    return (
        <div className={hasNewsId ? `littleCard ${item.tag[0]} hasNewsId` :`littleCard ${item.tag[0]}` }>
            <div className={hasNewsId ? "littleCard__img hasNewsId" : "littleCard__img"}>
                <div className={`tag ${item.tag[0]}`}>{item.tag[0]}</div>
                <img src={item.img} alt="newsItems" />
                <div className="littleCard__img_title">
                    {item.title}
                </div>

            </div>
            <div className={hasNewsId ? "littleCard__desc hasNewsId" : 'littleCard__desc'}>
                <div className="littleCard__desc_top">
                    <div className="littleCard__desc_top_author">{item.author}</div>
                    <div className="littleCard__desc_top_date">{item.date}</div>
                </div>
                <div className="littleCard__desc_bot">
                    {item.description}
                </div>
            </div>
        </div>
    )
})
