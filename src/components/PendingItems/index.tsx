import React, { useEffect, useState } from "react";
import { ModalWrapper } from "../../components/modal/ModalWrapper";
import { BlockAdminCard } from "../../components";
import { INewsItem, Status } from "../../types";
import { INewsItemAPI } from "../../types/api/admin";
import { useHttp } from "../../hooks/useHttp";
import useQuery from "../../utils/hooks/useQuery";
import {getImgUrl} from "../../utils/getImgUrl";

export const PendingItems: React.FC = () => {
  const query = useQuery();
  const [newsItems, setNewsItems] = useState<Array<INewsItem>>([]);
  const [endData, setDataEnd] = useState(false);
  const { request } = useHttp();

  const getNews = async (status?: Status, offset?: number) => {
    const respPending: Array<INewsItemAPI> | null = await request({
      path: `/pending/`,
      method: "GET",
      query: {
        offset: offset ?? 0
      }
    });

    if (respPending) {
      const newItems = respPending.map((item) => ({
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
        if(!newItems.length) return setDataEnd(true)
        setNewsItems(prev => [...prev, ...newItems]);
      } else setNewsItems(newItems);
    }
  };

  const onNewItem = async (status: Status, offset?: number) => {
    await getNews(status, offset)
  };

    useEffect(() => {
        (async function () {
        await getNews();
        })();
    }, [])

  return (
    <div className="pendingItems">
      {query.get("popup") === "pendingItems" && (
        <ModalWrapper>
          <div className="adminNews__block">
            <div className="adminNews__block_title">Pending Items</div>
            <BlockAdminCard
                items={newsItems}
                status="pending"
                handleClick={(_, status) => onNewItem(status)}
                featchItems={(offset) => onNewItem('offset', offset)}
                hasMore={endData}
            />
        </div>
        </ModalWrapper>
      )}
    </div>
  );
};
