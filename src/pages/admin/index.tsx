import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BlockAdminCard } from "../../components";
import { IAdminItem, INewsItem, Status } from "../../types";
import { useGlobalState } from "../../store";
import { BreackingType, TabType } from "../../types/api/subdomainTacnews";
import { useHttp } from "../../hooks/useHttp";
import { INewsItemAPI, IPublishedItemAPI } from "../../types/api/admin";

export const Admin: React.FC = () => {
  const [newsItems, setNewsItems] = useState<Array<INewsItem>>([]);
  const [declinedItems, setDeclined] = useState<Array<any>>([]);
  const [publishedItems, setPublished] = useState<Array<any>>([]);

  const history = useNavigate();
  const { request } = useHttp();

  const getDeclined = async () => {
    const respDeclined: Array<IPublishedItemAPI> | null = await request({
      path: "/declined/",
      method: "GET",
    });
    if (respDeclined) {
      const declinedItems = respDeclined.map((item) => ({
        id: item.id,
        img: item.media_link,
        tag: [],
        title: item.title,
        description: "",
        author: item.by,
        date: item.date,
        mainNews: false,
      }));
      setDeclined(declinedItems);
    }
  };

  const getNews = async () => {
    const respNews: Array<INewsItemAPI> | null = await request({
      path: "/news/",
      method: "GET",
    });
    if (respNews) {
      const newItems = respNews.map((item) => ({
        id: item.id,
        img: item.media_link,
        tag: [],
        title: item.title,
        description: "",
        author: item.by,
        date: item.date,
        mainNews: false,
      }));
      setNewsItems(newItems);
    }
  };

  const getPublished = async () => {
    const respPublished: Array<IPublishedItemAPI> | null = await request({
      path: "/published/",
      method: "GET",
    });
    if (respPublished) {
      const newPublished = respPublished.map((item) => ({
        id: item.id,
        img: item.media_link,
        tag: [],
        title: item.title,
        description: "",
        author: item.by,
        date: item.date,
        mainNews: false,
      }));
      setPublished(newPublished);
    }
  };

  useEffect(() => {
    (async function () {
      const token = sessionStorage.getItem("token");
      if (!token) {
        const resp: { token: string } | null = await request({
          path: "/signin/",
          method: "POST",
          body: { username: "News_admin", password: "UXWY4GikDkCG" },
        });
        if (resp) sessionStorage.setItem("token", resp.token);
      }
    })();

    (async function () {
      await getNews();
      await getDeclined();
      await getPublished();
    })();
  }, []);

  const onNewItem = async (status: Status) => {
    await getNews();
    if (status === "decline") await getDeclined();
    if (status === "publish") await getPublished();
  };

  const onDeclinedNews = async (status: Status) => {
    await getDeclined();
    if (status === "restore") await getNews();
  };

  return (
    <>
      <div className="circle firstcircle"></div>
      <div className="circle secondcircle"></div>
      <div className="circle thirdcircle"></div>
      <div className="circlebot fourthcircle"></div>
      <div className="buttons">
        <div
          onClick={() => history({ pathname: "/admin?popup=monitoring" })}
          className="buttons_monitoring"
        >
          Monitoring sources
        </div>
        <div
          onClick={() => history({ pathname: "/admin/create" })}
          className="buttons_create"
        >
          + Create
        </div>
      </div>
      <div className="adminNews">
        <div className="adminNews__block">
          <div className="adminNews__block_title">New item</div>
          <BlockAdminCard
            items={newsItems}
            status="newItem"
            handleClick={(_, status) => onNewItem(status)}
          />
        </div>
        <div className="adminNews__block">
          <div className="adminNews__block_title">Declined news</div>
          <BlockAdminCard
            items={declinedItems}
            status="declinedNews"
            handleClick={(_, status) => onDeclinedNews(status)}
          />
        </div>
        <div className="adminNews__block">
          <div className="adminNews__block_title">Published news</div>
          <BlockAdminCard
            items={publishedItems}
            status="publishedNews"
            handleClick={(id) => getPublished()}
          />
        </div>
      </div>
    </>
  );
};
