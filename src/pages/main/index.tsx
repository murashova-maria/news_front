import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopCards } from "../../components/Cards/TopCards";
import { InfoBlock } from "../../components/InfoBlock/InfoBlock";
import { useGlobalState } from "../../store";
import { INewsItem } from "../../types";

export const Main: React.FC = () => {
  const [items] = useGlobalState("news");
  const [newsItems, setNewsItems] = useState<Array<INewsItem>>(items);
  const [topNews, setTopNews] = useState<Array<INewsItem>>([
    items[1],
    items[2],
  ]);

  const history = useNavigate();

  return (
    <>
      <div className="main__section0">
        <div className="main__section0_left">
          <div
            onClick={() => history({ pathname: `/news?newsid=28` })}
            className={`bigCard ${newsItems[0].tag[0]}`}
          >
            <div className="bigCard__img">
              <div className={`tag ${newsItems[0].tag[0]}`}>
                {newsItems[0].tag[0]}
              </div>
              <img src={newsItems[0].img} alt="newsItems" />
              <div className="bigCard__img_title">{newsItems[0].title}</div>
            </div>
            <div className="bigCard__desc">
              <div className="bigCard__desc_top">
                <div className="bigCard__desc_top_author">
                  {newsItems[0].author}
                </div>
                <div className="bigCard__desc_top_date">
                  {newsItems[0].date}
                </div>
              </div>
              <div className="bigCard__desc_bot">
                {newsItems[0].description}
              </div>
            </div>
          </div>
        </div>
        <div className="main__section0_right">
          {topNews.map((el) => (
            <TopCards key={el.id} hasNewsId={false} item={el} />
          ))}
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
