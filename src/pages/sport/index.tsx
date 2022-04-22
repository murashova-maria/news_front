import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { TopCards } from '../../components/Cards/TopCards'
import { InfoBlock } from '../../components/InfoBlock/InfoBlock'
import { useGlobalState } from '../../store'
import { INewsItem } from '../../types'
import { useHttp } from "../../hooks/useHttp";
import { TabNewsType, MainType, TabType } from "../../types/api/subdomainTacnews";


export const Sport: React.FC = () => {
    const [items] = useGlobalState('news');
    const [newsItems, setNewsItems] = useState<Array<INewsItem>>(items);
    const [tabNews, setTabNews] = useState<TabNewsType[]>([]);
    const [main, setMain] = useState<MainType>();
    const [secondaryMain, setSecondaryMain] = useState<MainType[]>([]);
    const [tab, setTab] = useState(0);
    const [tabs, setTabs] = useState<TabType[]>([]);
    const location = useLocation();
    const { request } = useHttp();
    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const tab = query.get('tab');
        if (tab) setTab(Number(tab));
        (async function () {
            const resp: MainType | null = await request({
              path: "/main/",
              method: "GET",
            });
            if (resp) setMain(resp);
          })();
        (async function () {
            const resp: MainType[] | null = await request({
              path: "/secondary_main/",
              method: "GET",
            });
            if (resp) setSecondaryMain(resp);
          })();
        (async function () {
            const resp: TabType[] | null = await request({
              path: "/tabs/",
              method: "GET",
            });
            if (resp) setTabs(resp);
          })();
    }, [location]);

    useEffect(() => {
        (async function () {
            if (!tab) return;
            const resp: TabNewsType[] | null = await request({
              path: "/tab_news/" + tab + '/?limit=24',
              method: "GET",
            });
            if (resp) setTabNews(resp);
          })();
    }, [tab]);

    return (
        <>
            <div className='main__section0'>
                <div className="main__section0_left">
                    <div className={`bigCard ${main?.tab}`}>
                        <div className="bigCard__img">
                            <div className={`tag ${main?.tab}`}>{main?.tab}</div>
                            <img src={main?.media_link} alt="newsItems" />
                            <div className="bigCard__img_title">
                                {main?.title}
                            </div>
                        </div>
                        <div className="bigCard__desc">
                            <div className="bigCard__desc_top">
                                <div className="bigCard__desc_top_author">{main?.by}</div>
                                <div className="bigCard__desc_top_date">{main?.date}</div>
                            </div>
                            <div className="bigCard__desc_bot">
                                {main?.text}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__section0_right">
                    {secondaryMain.map(el => <TopCards key={el.id} hasNewsId={false} item={el} />)}
                </div>
            </div>
            <div className="main__section1">
                {tab ? 
                <>
                <InfoBlock tag={tabs.filter(el => el.id === tab)[0]?.name} withOutTitle={true} items={tabNews.slice(0, Number(tabNews.length/2))} />
                <InfoBlock tag={tabs.filter(el => el.id === tab)[0]?.name} withOutTitle={true} items={tabNews.slice(Number(tabNews.length/2), tabNews.length)} />
                {/* <InfoBlock tag={'Sport'} withOutTitle={true} items={newsItems.filter(el => el.tag[0] === 'Sport' && !el.mainNews).slice(0, 4)} />
                <InfoBlock tag={'Sport'} withOutTitle={true} items={newsItems.filter(el => el.tag[0] === 'Sport' && !el.mainNews).slice(0, 4)} />
                <InfoBlock tag={'Sport'} withOutTitle={true} items={newsItems.filter(el => el.tag[0] === 'Sport' && !el.mainNews).slice(0, 4)} />
                <InfoBlock tag={'Sport'} withOutTitle={true} items={newsItems.filter(el => el.tag[0] === 'Sport' && !el.mainNews).slice(0, 4)} /> */}
                </>
                : null}
            </div>

        </>
    )
}
