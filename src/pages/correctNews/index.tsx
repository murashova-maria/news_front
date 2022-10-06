import React, { useEffect, useMemo, useState } from "react";
import bluePlanet from "../../assets/img/bluePlanet.png";
import iconAuthor from "../../assets/img/iconAuthor.svg";
import iconDate from "../../assets/img/iconDate.svg";
import { TopCards } from "../../components/Cards/TopCards";
import { ExpandType } from "../../types/api/subdomainTacnews";
import { useHttp } from "../../hooks/useHttp";
import { useLocation } from "react-router-dom";
import { Image } from "../../components/shared/Image/Image";
import { getImgUrl } from "../../utils/getImgUrl";
import cn from "classnames";

export const CorrectNews: React.FC = () => {
  const [item, setItem] = useState<ExpandType>();
  const [like, setLike] = useState<ExpandType[]>([]);

  const { request } = useHttp();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const news_id = query.get("newsid");
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
  }, [location]);

  const showRightSection = useMemo(() => {
    return (item?.tab !== "Investigations" && like.length !== 0)
  }, [like, item?.tab])

  return (
    <div className="correctnews">
      {item ? (
        <div className={cn({"correctnews__left": true, "w100": !showRightSection})}>
          <div className="correctnews__left_tags">
            <div className={`tagNews tag ${item?.tab?.replace("&", "")}`}>
              {item?.tab}
            </div>
          </div>
          <div className="correctnews__left_photo">
            <div className="correctnews__left_photo_title">{item?.title}</div>
            <div className="correctnews__left_photo_block">
              <img className="planetNews" src={bluePlanet} alt="bluePlanet" />
              <Image
                className="blockNews"
                src={getImgUrl(item?.media_link)}
                alt="news"
              />
              <div className="correctnews__left_photo_block_info">
                <div className="correctnews__left_photo_block_info_item">
                  <img
                    className="iconPhoto"
                    src={iconAuthor}
                    alt="iconAuthor"
                  />
                  <a href={item.link}>{item?.by}</a>
                </div>
                <div className="correctnews__left_photo_block_info_item">
                  <img className="iconPhoto" src={iconDate} alt="iconAuthor" />
                  {item?.date}
                </div>
              </div>
            </div>
          </div>
          <div
            className="correctnews__left_text"
            dangerouslySetInnerHTML={{ __html: item?.text || "" }}
          />
        </div>
      ) : null}
      {showRightSection && (
        <div className="correctnews__right">
          <div className="correctnews__right_title">You may also like</div>
          <div className="correctnews__right_news">
            {like.map((el: any) => (
              <TopCards key={el.id} item={el} hasNewsId={true} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
