import React, { useState } from "react";
import { TopCards } from "../../components/Cards/TopCards";
import { InfoBlock } from "../../components/InfoBlock/InfoBlock";
import { useGlobalState } from "../../store";
import { INewsItem } from "../../types";

export const Investigations: React.FC = () => {
  const [items] = useGlobalState("news");
  const [newsItems, setNewsItems] = useState<Array<INewsItem>>(items);
  const [topNews, setTopNews] = useState<Array<INewsItem>>([
    items[1],
    items[2],
  ]);
  return (
    <>
      <div className="main__section0">
        <div className="main__section0_left">
          <div className={`bigCard ${newsItems[0].tag[0]}`}>
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
          tag={"Investigations"}
          withOutTitle={true}
          items={newsItems
            .filter((el) => el.tag[0] === "Investigations" && !el.mainNews)
            .slice(0, 4)}
        />
        <InfoBlock
          tag={"Investigations"}
          withOutTitle={true}
          items={newsItems
            .filter((el) => el.tag[0] === "Investigations" && !el.mainNews)
            .slice(0, 4)}
        />
        <InfoBlock
          tag={"Investigations"}
          withOutTitle={true}
          items={newsItems
            .filter((el) => el.tag[0] === "Investigations" && !el.mainNews)
            .slice(0, 4)}
        />
        <InfoBlock
          tag={"Investigations"}
          withOutTitle={true}
          items={newsItems
            .filter((el) => el.tag[0] === "Investigations" && !el.mainNews)
            .slice(0, 4)}
        />
        <InfoBlock
          tag={"Investigations"}
          withOutTitle={true}
          items={newsItems
            .filter((el) => el.tag[0] === "Investigations" && !el.mainNews)
            .slice(0, 4)}
        />
        <InfoBlock
          tag={"Investigations"}
          withOutTitle={true}
          items={newsItems
            .filter((el) => el.tag[0] === "Investigations" && !el.mainNews)
            .slice(0, 4)}
        />
      </div>
    </>
  );
};
