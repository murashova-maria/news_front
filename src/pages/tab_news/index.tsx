import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { TopCards } from '../../components/Cards/TopCards'
import { InfoBlock } from '../../components/InfoBlock/InfoBlock'
import { useHttp } from "../../hooks/useHttp";
import { TabNewsType, MainType, TabType } from "../../types/api/subdomainTacnews";
import {Image} from "../../components/shared/Image/Image";
import {getImgUrl} from "../../utils/getImgUrl";
import { htmlToText } from 'html-to-text';


export const TabNews: React.FC = () => {
    const [tabNews, setTabNews] = useState<TabNewsType[]>([]);
    const [main, setMain] = useState<MainType>();
    const [secondaryMain, setSecondaryMain] = useState<MainType[]>([]);
    const [tab, setTab] = useState(0);
    const [tabs, setTabs] = useState<TabType[]>([]);
    const location = useLocation();
    const { request } = useHttp();
    const history = useNavigate()
    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const tab_id = query.get('tab');
        if (tab_id) setTab(Number(tab_id));
        (async function () {
            const resp: TabType[] | null = await request({
              path: "/tabs/",
              method: "GET",
            });
            if (resp) setTabs(resp);
          })();
    }, [location]);

    useEffect(() => {
        if (tab){
            (async function () {
                const resp: MainType | null = await request({
                path: "/main/?tab=" + tab,
                method: "GET",
                });
                if (resp) setMain(resp);
            })();
            (async function () {
                const resp: MainType[] | null = await request({
                path: "/secondary_main/?tab=" + tab,
                method: "GET",
                });
                if (resp) setSecondaryMain(resp);
            })();
        }
    }, [tab])

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

  const desc = htmlToText(main?.text || '');


    return (
        <>
            <div className='main__section0'>
                <div className="main__section0_left">
                    <div className={`bigCard ${main?.tab?.replace('&', '')}`} onClick={() => history({pathname:`/news?newsid=${main?.id}`})}>
                        <div className="bigCard__img">
                            <div className="blur"/>
                            <div className={`tag ${main?.tab?.replace('&', '')}`}>{main?.tab}</div>
                            <Image src={getImgUrl(main?.media_link || '')} alt="newsItems" />
                            <div className="bigCard__img_title">
                                {main?.title}
                            </div>
                        </div>
                        <div className="bigCard__desc">
                            <div className="bigCard__desc_top">
                                <div className="bigCard__desc_top_author">{main?.by}</div>
                                <div className="bigCard__desc_top_date">{main?.date}</div>
                            </div>
                            <div className="bigCard__desc_bot">{desc}</div>
                        </div>
                    </div>
                </div>
                <div className="main__section0_right">
                    {secondaryMain.map(el => <TopCards key={el.id} hasNewsId={false} item={el} />)}
                </div>
            </div>
            <div className="main__section1">
                {tabNews.length ? 
                <>
                <InfoBlock tag={tabs.filter(el => el.id === tab)[0]?.name} withOutTitle={true} items={tabNews.slice(0, Number(tabNews.length/2))} />
                <InfoBlock tag={tabs.filter(el => el.id === tab)[0]?.name} withOutTitle={true} items={tabNews.slice(Number(tabNews.length/2), tabNews.length)} />
                </>
                : null}
            </div>

        </>
    )
}
