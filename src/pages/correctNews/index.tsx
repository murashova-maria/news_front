import React, { useEffect, useState } from 'react'
import { useGlobalState } from '../../store'
import { INewsItem } from '../../types'
import useQuery from '../../utils/hooks/useQuery'
import bluePlanet from '../../assets/img/bluePlanet.png'
import iconAuthor from '../../assets/img/iconAuthor.svg'
import iconDate from '../../assets/img/iconDate.svg'
import { InfoBlockCard } from '../../components/Cards/InfoBlockCard'
import { TopCards } from '../../components/Cards/TopCards'
import { ExpandType } from "../../types/api/subdomainTacnews";
import { useHttp } from "../../hooks/useHttp";
import { useLocation } from "react-router-dom";

export const CorrectNews: React.FC = () => {

    const query = useQuery()

    const [items] = useGlobalState('news')

    const [news, setNews] = useState<Array<INewsItem>>([])

    const [randNews, setRandNews] = useState<Array<INewsItem>>([])
    const [item, setItem] = useState<ExpandType>()
    const [like, setLike] = useState<ExpandType[]>([])

    const { request } = useHttp();
    const location = useLocation();

    useEffect(() => {
        setNews(items.filter((el: any) => String(el.id) === query.get('newsid')))

    }, [items])

    useEffect(() => {
        const newNews = items.filter((el: any) => el.tag[0] === 'New' && !el.mainNews)
        const weatherNews = items.filter((el: any) => el.tag[0] === 'Weather' && !el.mainNews)
        const sportNews = items.filter((el: any) => el.tag[0] === 'Sport' && !el.mainNews)
        const technologyNews = items.filter((el: any) => el.tag[0] === 'Technology & Science' && !el.mainNews)
        const businessNews = items.filter((el: any) => el.tag[0] === 'Business & Economy' && !el.mainNews)

        const rand = Math.floor(Math.random() * newNews.length)

        setRandNews([newNews[rand], weatherNews[rand], sportNews[rand], technologyNews[rand], businessNews[rand]])
    }, [items])

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const news_id = query.get('newsid');
        (async function () {
            const resp: ExpandType | null = await request({
              path: `/expand/${news_id}/`,
              method: "GET",
            });
            if (resp) setItem(resp);
          })();
        
        (async function () {
            const resp: ExpandType[] | null = await request({
              path: `/likenews/?limit=5`,
              method: "GET",
            });
            if (resp) setLike(resp);
          })();
        
    }, [location])

    return (
        <div className='correctnews'>
            {item ? 
            <div className="correctnews__left">
                <div className="correctnews__left_tags">
                    <div className={`tagNews tag ${item?.tab}`}>{item?.tab}</div>)
                </div>
                <div className="correctnews__left_photo">
                    <div className="correctnews__left_photo_title">
                        {item?.title}
                    </div>
                    <div className="correctnews__left_photo_block">
                        <img className='planetNews' src={bluePlanet} alt="bluePlanet" />
                        <img className='blockNews' src={item?.media_link} alt="news" />
                        <div className="correctnews__left_photo_block_info">
                            <div className="correctnews__left_photo_block_info_item">
                                <img className='iconPhoto' src={iconAuthor} alt="iconAuthor" />
                                {item?.by}
                            </div>
                            <div className="correctnews__left_photo_block_info_item">
                                <img className='iconPhoto' src={iconDate} alt="iconAuthor" />
                                {item?.date}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="correctnews__left_text">
                    {item?.text}
                </div>
            </div>
            : null}
            <div className="correctnews__right">
                <div className="correctnews__right_title">You may also like</div>
                <div className="correctnews__right_news">
                    {like.map((el : any) => <TopCards key={el.id} item={el} hasNewsId={true} />)}
                </div>
            </div>
        </div>
    )
}