import React, { useEffect, useState } from 'react'
import redp from '../../assets/img/redPlanet.png'
import bluep from '../../assets/img/bluePlanet.png'
import greenp from '../../assets/img/greenplanet.png'
import orangep from '../../assets/img/orangePlanet.png'
import violetp from '../../assets/img/violetPlanet.png'
import brownp from '../../assets/img/brownPlanet.png'
import { InfoBlockCard } from '../Cards/InfoBlockCard'

import { useHttp } from "../../hooks/useHttp";
import { TabNewsType, TabType } from "../../types/api/subdomainTacnews";

export const MainInfoBlock = ({tag, items, withOutTitle }: any) => {

    const [colorPlanet, setColorPlanet] = useState<string>(tag.name)
    const [tabNews, setTabNews] = useState<TabNewsType[]>([])
    const actualTag = tag.name

    const { request } = useHttp();

    useEffect(() => {
        switch (actualTag) {
            case 'News':
                setColorPlanet(redp)
                break
            case 'Sport':
                setColorPlanet(bluep)
                break
            case 'Investigations':
                setColorPlanet(greenp)
                break
            case 'Business':
                setColorPlanet(orangep)
                break
            case 'Economy':
                setColorPlanet(violetp)
                break
            case 'Science&Technology':
                setColorPlanet(brownp)
                break
        }
    }, [actualTag])

    useEffect(() => {
        (async function () {
            const resp: TabNewsType[] | null = await request({
              path: "/tab_news/" + tag.id + '/?limit=4',
              method: "GET",
            });
            if (resp) setTabNews(resp)
          })();
    }, [])

    return (
        tabNews.length>0 ? 
        <div className='infoBlock'>
            {!withOutTitle && <div className="infoBlock__title">{tag.name}</div>}
            <div className="infoBlock__items">
                <img className='colorPlanet' src={colorPlanet} alt="colorPlanet" />
                {tabNews.map((el: any) => <InfoBlockCard key={el.id} hasNewsId={false} item={el} />)}
            </div>
            {!withOutTitle && <div className='btnNews'>
                SHOW MORE
            </div>}
        </div>
        : null
    )
}
