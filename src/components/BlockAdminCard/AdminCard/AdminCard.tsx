import React from "react";

import { AdminEditNews, IPropsAdmin } from "../../../types";

import decline from "../../../assets/img/decline.svg";
import delet from "../../../assets/img/delete.svg";
import edit from "../../../assets/img/edit.svg";
import publish from "../../../assets/img/publish.svg";
import restore from "../../../assets/img/restore.svg";
import unpublish from "../../../assets/img/unpublish.svg";
import { useHttp } from "../../../hooks/useHttp";
import { useNavigate } from "react-router";
import { useGlobalState } from "../../../store";

export const AdminCard: React.FC<IPropsAdmin> = React.memo(
  ({ item, handleClick }) => {
    const history = useNavigate();
    const { loading, request } = useHttp();
    const [, setAdminEditNews] = useGlobalState("adminEditNews");

    const handleNewsDecline = async (id: number) => {
      await request({ path: `/news/${id}/`, method: "POST" });
      if (handleClick) handleClick(id, "decline");
    };

    const restoreDecline = async (id: number) => {
      await request({ path: `/declined/${id}/`, method: "POST", body: { id } });
      if (handleClick) handleClick(id, "restore");
    };
    const deleteDeclined = async (id: number) => {
      await request({ path: `/declined/${id}/`, method: "DELETE" });
      if (handleClick) handleClick(id, "delete");
    };

    const handleEdit = async (
      id: number,
      status: "news" | "pending" | "published"
    ) => {
      const resp: AdminEditNews | null = await request({
        path: `/edit/${status}/${id}/`,
        method: "POST",
        body: [],
      });
      setAdminEditNews(resp);
      history({ pathname: "/admin/create?edit=true" });
    };

    const handleUnPublish = async (id: number) => {
      await request({ path: `/published/${id}/`, method: "POST", body: [] });
      if (handleClick) handleClick(id, "publish");
    };

    const handleNewsPublish = async (id: number) => {
      await request({
        path: `/news/publish/${id}/`,
        method: "POST",
        body: [],
      });
      if (handleClick) handleClick(id, "publish");
    };

    return (
      <div className="adminCard">
        <div className="adminCard__container">
          <div className="adminCard__top">
            <img src={item.img} alt="item.img" />
          </div>
          <div className="adminCard__bot">
            <div className="adminCard__bot_title">{item.title}</div>
            <div className="adminCard__bot_authorDate">
              <div className="adminCard__bot_authorDate_block">
                {item.author}
              </div>
              <div className="adminCard__bot_authorDate_block">{item.date}</div>
            </div>
            <div className="adminCard__bot_buttons">
              {item.status === "newItem" && (
                <>
                  <span
                    className="btnAdmin red"
                    onClick={() => handleNewsDecline(item.id)}
                  >
                    Decline <img src={decline} alt="decline" />
                  </span>
                  <span
                    className="btnAdmin yellow"
                    onClick={() => handleEdit(item.id, "news")}
                  >
                    Edit <img src={edit} alt="edit" />
                  </span>
                  <span
                    className="btnAdmin green"
                    onClick={() => handleNewsPublish(item.id)}
                  >
                    Publish <img src={publish} alt="publish" />
                  </span>
                </>
              )}
              {item.status === "declinedNews" && (
                <>
                  <span
                    className="btnAdmin red"
                    onClick={() => deleteDeclined(item.id)}
                  >
                    Delete <img src={delet} alt="delete" />
                  </span>
                  <span
                    className="btnAdmin yellow"
                    onClick={() => restoreDecline(item.id)}
                  >
                    Restore <img src={restore} alt="restore" />
                  </span>
                </>
              )}
              {item.status === "publishedNews" && (
                <>
                  <span
                    className="btnAdmin red"
                    onClick={() => handleUnPublish(item.id)}
                  >
                    Unpublish <img src={unpublish} alt="unpublish" />
                  </span>
                  <span
                    className="btnAdmin yellow"
                    onClick={() => handleEdit(item.id, "published")}
                  >
                    Edit <img src={edit} alt="edit" />
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
