import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { BlockAdminCard } from "../../components";
import { INewsItem, Status } from "../../types";
import { useHttp } from "../../hooks/useHttp";
import { INewsItemAPI, IPublishedItemAPI } from "../../types/api/admin";
import { useGlobalState } from "../../store";
import {getImgUrl} from "../../utils/getImgUrl";

export const Admin: React.FC = () => {
  const token = sessionStorage.getItem("token");
  const [isLogin, setLogin] = useGlobalState("isLogin");
  const [newsItems, setNewsItems] = useState<Array<INewsItem>>([]);
  const [declinedItems, setDeclined] = useState<Array<any>>([]);
  const [publishedItems, setPublished] = useState<Array<any>>([]);
  const [endData, setDataEnd] = useState({
    newsItems: false,
    declinedItems: false,
    publishedItems: false
  });
  const [searchText, setSearchText] = useState<string>('')
  const searchRegExp = useMemo(() => {
    return new RegExp(searchText, "i")
  }, [searchText])


  const history = useNavigate();
  const { request } = useHttp();

  const getDeclined = async (status?: Status, offset?: number) => {
    const respDeclined: Array<IPublishedItemAPI> | null = await request({
      path: "/declined/",
      method: "GET",
      query: {
        offset: offset ?? 0
      }
    });
    if (respDeclined) {
      const declinedItems = respDeclined.map((item) => ({
        id: item.id,
        img: getImgUrl(item.media_link),
        tag: [],
        title: item.title,
        description: "",
        author: item.by,
        date: item.date,
        mainNews: false,
      }));
      if(status === 'offset'){
       if(!declinedItems.length) return setDataEnd((prev) => ({...prev, declinedItems: true}))
       setDeclined(prev => [...prev, ...declinedItems]);
      } else setDeclined(declinedItems);
    }
  };

  const getNews = async (status?: Status, offset?: number) => {
    const respNews: Array<INewsItemAPI> | null = await request({
      path: `/news/`,
      method: "GET",
      query: {
        offset: offset ?? 0
      }
    });
    if (respNews) {
      const newItems = respNews.map((item) => ({
        id: item.id,
        img: getImgUrl(item.media_link),
        tag: [],
        title: item.title,
        description: "",
        author: item.by,
        date: item.date,
        mainNews: false,
      }));

      if(status === 'offset'){
        if(!newItems.length) return setDataEnd((prev) => ({...prev, newsItems: true}))
        setNewsItems(prev => [...prev, ...newItems]);
      } else setNewsItems(newItems);
    }
  };

  const getPublished = async (status?: Status, offset?: number) => {
    const respPublished: Array<IPublishedItemAPI> | null = await request({
      path: "/published/",
      method: "GET",
      query: {
        offset: offset ?? 0
      }
    });
    if (respPublished) {
      const newPublished = respPublished.map((item) => ({
        id: item.id,
        img: getImgUrl(item.media_link),
        tag: [],
        title: item.title,
        description: "",
        author: item.by,
        date: item.date,
        mainNews: false,
      }));
      if(status === 'offset'){
        if(!newPublished.length) return setDataEnd((prev) => ({...prev, publishedItems: true}))
        setPublished(prev => [...prev, ...newPublished]);
      } else setPublished(newPublished);
    }
  };

  useEffect(() => {
    (async function () {
      if (token || (token && isLogin)) {
        await getNews();
        await getDeclined();
        await getPublished();
      }
    })();
  }, [isLogin]);

  const onNewItem = async (status: Status, offset?: number) => {
    await getNews(status, offset)
    if (status === "decline") await getDeclined();
    if (status === "publish") await getPublished();
  };

  const onDeclinedNews = async (status: Status, offset?: number) => {
    await getDeclined(status, offset);
    if (status === "restore") await getNews();
  };

  const onPublished = async (status: Status, offset?: number) => {
    if (status === "offset")  await getPublished(status, offset);
    if (status === "publish")  await getPublished();
  };

  const filteredSearch = useCallback((items: INewsItem[]) => {
    return items.filter(item => {
      if (searchRegExp.test(item?.author)) return true
      if (searchRegExp.test(item?.description)) return true
      if (searchRegExp.test(item?.date)) return true
      if (searchRegExp.test(item?.title)) return true
      return false
    })
  }, [searchRegExp])

  return (
    <>
      <div className="circle firstcircle"></div>
      <div className="circle secondcircle"></div>
      <div className="circle thirdcircle"></div>
      <div className="circlebot fourthcircle"></div>
      <div className="buttons">
        <div className="search">
          <input value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search" type="text" className="search__input" />
        </div>
        <div
            onClick={() => history({ pathname: "/admin?popup=twitter-widgets" })}
            className="buttons_monitoring"
        >
          Twitter widgets
        </div>
        <div
            onClick={() => history({ pathname: "/admin?popup=twitter" })}
            className="buttons_monitoring"
        >
          Twitter accounts
        </div>
        <div
          onClick={() => history({ pathname: "/admin?popup=monitoring" })}
          className="buttons_monitoring"
        >
          Monitoring sources
        </div>
        <div
          onClick={() => history({ pathname: "/admin?popup=pendingItems " })}
          className="buttons_monitoring"
        >
          Pending items 
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
            items={filteredSearch(newsItems)}
            status="newItem"
            handleClick={(_, status) => onNewItem(status)}
            featchItems={(offset) => onNewItem('offset', offset)}
            hasMore={endData.newsItems}
          />
        </div>
        <div className="adminNews__block">
          <div className="adminNews__block_title">Declined news</div>
          <BlockAdminCard
            items={filteredSearch(declinedItems)}
            status="declinedNews"
            handleClick={(_, status) => onDeclinedNews(status)}
            featchItems={(offset) => onDeclinedNews('offset', offset)}
            hasMore={endData.declinedItems}
          />
        </div>
        <div className="adminNews__block">
          <div className="adminNews__block_title">Published news</div>
          <BlockAdminCard
            items={filteredSearch(publishedItems)}
            status="publishedNews"
            handleClick={(_, status) => onPublished(status)}
            featchItems={(offset) => onPublished('offset', offset)}
            hasMore={endData.publishedItems}
          />
        </div>
      </div>
    </>
  );
};
