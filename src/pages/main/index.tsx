import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopCards } from "../../components/Cards/TopCards";
import { InfoBlock } from "../../components/InfoBlock/InfoBlock";
import { useGlobalState } from "../../store";
import { INewsItem } from "../../types";
import { useHttp } from "../../hooks/useHttp";
import { TabNewsType, MainType, TabType } from "../../types/api/subdomainTacnews";

export const Main: React.FC = () => {
  const [items] = useGlobalState("news");
  const [newsItems, setNewsItems] = useState<Array<INewsItem>>(items);
  const [topNews, setTopNews] = useState<Array<INewsItem>>([
    items[1],
    items[2],
  ]);
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

  // useEffect(() => {
  //   if (!tabs) return;
  //   for (let tab of tabs){

  //   }
  // }, [tabs])

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
        <InfoBlock
          tag={"New"}
          items={newsItems
            .filter((el) => el.tag[0] === "New" && !el.mainNews)
            .slice(0, 4)}
        />
        <InfoBlock
          tag={"Sport"}
          items={newsItems
            .filter((el) => el.tag[0] === "Sport" && !el.mainNews)
            .slice(0, 4)}
        />
        <InfoBlock
          tag={"Investigations"}
          items={newsItems
            .filter((el) => el.tag[0] === "Investigations" && !el.mainNews)
            .slice(0, 4)}
        />
        <InfoBlock
          tag={"Weather"}
          items={newsItems
            .filter((el) => el.tag[0] === "Weather" && !el.mainNews)
            .slice(0, 4)}
        />
        <InfoBlock
          tag={"Business & Economy"}
          items={newsItems
            .filter((el) => el.tag[0] === "Business & Economy" && !el.mainNews)
            .slice(0, 4)}
        />
        <InfoBlock
          tag={"Technology & Science"}
          items={newsItems
            .filter(
              (el) => el.tag[0] === "Technology & Science" && !el.mainNews
            )
            .slice(0, 4)}
        />
      </div>
    </>
  );
};
