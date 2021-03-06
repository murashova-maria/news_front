import React from "react";
import { toast } from "react-toastify";
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
import { Image } from "../../shared/Image/Image";

export const AdminCard: React.FC<IPropsAdmin> = React.memo(
  ({ item, handleClick, permissions }) => {
    const history = useNavigate();
    const { request } = useHttp();
    const [, setAdminEditNews] = useGlobalState("adminEditNews");

    const handleNewsDecline = async (
      id: number,
      status: "news" | "pending" | "published"
    ) => {
      await request({ path: `/${status}/${id}/`, method: "POST" });
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

    const handleNewsPublish = async (
      id: number,
      status: "news" | "pending" | "published"
    ) => {
      const resp = await request({
        path: `/${status}/publish/${id}/`,
        method: "POST",
        body: [],
      });

      if (resp?.error) return toast.error(resp?.error);
      if (handleClick) handleClick(id, "publish");
    };

    return (
      <div className="adminCard">
        <div className="adminCard__container">
          <div className="adminCard__top">
            <Image src={item.img} alt="item.img" />
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
              {(item.status === "newItem" || item.status === "pending") && (
                <>
                  {(!permissions || permissions.includes("decline")) && (
                    <span
                      className="btnAdmin red"
                      onClick={() =>
                        handleNewsDecline(
                          item.id,
                          item.status === "pending" ? "pending" : "news"
                        )
                      }
                    >
                      Decline <img src={decline} alt="decline" />
                    </span>
                  )}

                  {(!permissions || permissions.includes("edit")) && (
                    <span
                      className="btnAdmin yellow"
                      onClick={() =>
                        handleEdit(
                          item.id,
                          item.status === "pending" ? "pending" : "news"
                        )
                      }
                    >
                      Edit <img src={edit} alt="edit" />
                    </span>
                  )}
                  {(!permissions || permissions.includes("publish")) && (
                    <span
                      className="btnAdmin green"
                      onClick={() =>
                        handleNewsPublish(
                          item.id,
                          item.status === "pending" ? "pending" : "news"
                        )
                      }
                    >
                      Publish <img src={publish} alt="publish" />
                    </span>
                  )}
                </>
              )}
              {item.status === "declinedNews" && (
                <>
                  {(!permissions || permissions.includes("delete")) && (
                    <span
                      className="btnAdmin red"
                      onClick={() => deleteDeclined(item.id)}
                    >
                      Delete <img src={delet} alt="delete" />
                    </span>
                  )}
                  {(!permissions || permissions.includes("restore")) && (
                    <span
                      className="btnAdmin yellow"
                      onClick={() => restoreDecline(item.id)}
                    >
                      Restore <img src={restore} alt="restore" />
                    </span>
                  )}
                </>
              )}
              {item.status === "publishedNews" && (
                <>
                  {(!permissions || permissions.includes("unpublish")) && (
                    <span
                      className="btnAdmin red"
                      onClick={() => handleUnPublish(item.id)}
                    >
                      Unpublish <img src={unpublish} alt="unpublish" />
                    </span>
                  )}

                  {(!permissions || permissions.includes("edit")) && (
                    <span
                      className="btnAdmin yellow"
                      onClick={() => handleEdit(item.id, "published")}
                    >
                      Edit <img src={edit} alt="edit" />
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
