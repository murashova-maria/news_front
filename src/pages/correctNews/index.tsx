import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../store'
import { INewsItem } from '../../types'
import useQuery from '../../utils/hooks/useQuery'
import bluePlanet from '../../assets/img/bluePlanet.png'
import iconAuthor from '../../assets/img/iconAuthor.svg'
import iconDate from '../../assets/img/iconDate.svg'
import { InfoBlockCard } from '../../components/Cards/InfoBlockCard'
import { TopCards } from '../../components/Cards/TopCards'

export const CorrectNews: React.FC = () => {

    const query = useQuery()

    const items = useAppSelector(state => state.news.news)

    const [news, setNews] = useState<Array<INewsItem>>([])

    const [randNews, setRandNews] = useState<Array<INewsItem>>([])

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
console.log('randNews', randNews);

}, [randNews])




    return (
        <div className='correctnews'>
            <div className="correctnews__left">
                <div className="correctnews__left_tags">
                    {news[0]?.tag.map((el: any) => <div className={`tagNews tag ${el}`}>{el}</div>)}
                </div>
                <div className="correctnews__left_photo">
                    <div className="correctnews__left_photo_title">
                        {news[0]?.title}
                    </div>
                    <div className="correctnews__left_photo_block">
                        <img className='planetNews' src={bluePlanet} alt="bluePlanet" />
                        <img className='blockNews' src={news[0]?.img} alt="news" />
                        <div className="correctnews__left_photo_block_info">
                            <div className="correctnews__left_photo_block_info_item">
                                <img className='iconPhoto' src={iconAuthor} alt="iconAuthor" />
                                {news[0]?.author}
                            </div>
                            <div className="correctnews__left_photo_block_info_item">
                                <img className='iconPhoto' src={iconDate} alt="iconAuthor" />
                                {news[0]?.date}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="correctnews__left_text">
                    {news[0]?.description}
                </div>
            </div>
            <div className="correctnews__right">
                <div className="correctnews__right_title">You may also like</div>
                <div className="correctnews__right_news">
                    {randNews.map((el : any) => <TopCards item={el} hasNewsId={true} />)}
                </div>
            </div>
        </div>
    )
}