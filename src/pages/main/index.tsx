import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopCards } from "../../components/Cards/TopCards";
import { MainInfoBlock } from "../../components/InfoBlock/mainInfoBlock";
import { useHttp } from "../../hooks/useHttp";
import { TabNewsType, MainType, TabType } from "../../types/api/subdomainTacnews";

export const Main: React.FC = () => {
  const [main, setMain] = useState<MainType>();
  const [secondaryMain, setSecondaryMain] = useState<MainType[]>([]);
  const [tab, setTab] = useState(0);
  const [tabs, setTabs] = useState<TabType[]>([]);

  const { request } = useHttp();

  const history = useNavigate();

  useEffect(() => {
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
}, []);


  const blocs = tabs.map(el => {
    return (
      <MainInfoBlock
          key={el.id}
          tag={el}
        />
    )
  })

  return (
    <>
      <div className='main__section0'>
                <div className="main__section0_left">
                    <div className={`bigCard ${main?.tab}`} onClick={() => history({pathname:`/news?newsid=28`})}>
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
        {tabs ? blocs : null}
      </div>
    </>
  );
};
