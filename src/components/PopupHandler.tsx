import React, { useEffect, useState } from "react";
import useQuery from "../utils/hooks/useQuery";
import { ModalWrapper } from "./modal/ModalWrapper";

import done from "../assets/img/done.svg";
import fals from "../assets/img/false.svg";
import pending from "../assets/img/pending.svg";
import { useGlobalState } from "../store";
import { Tab } from "./Tab";
import { Input } from "./Input/Input";
import { useHttp } from "../hooks/useHttp";
import { SourcesAPI } from "../types/api/admin";

interface LinksType {
  id: number;
  link: string;
  status: string;
}

export const PopupHandler: React.FC = () => {
  const query = useQuery();

  const [tabs, setTabs] = useGlobalState("tabs");

  const [isClickAddSource, setIsClickAddSource] = useState<boolean>(false);
  const [inputLinks, setInputLinks] = useState<string>("");
  const [links, setLinks] = useState<Array<LinksType>>([]);
  const { loading, request } = useHttp();

  useEffect(() => {
    (async function () {
      const resp: Array<SourcesAPI> | null = await request({
        path: "/sources/",
        method: "GET",
      });
      if (resp) {
        const newLinks = resp.map((item) => ({
          id: item.id,
          link: item.source,
          status: item.status.toLowerCase(),
        }));
        setLinks(newLinks);
      }
    })();
  }, []);

  const handleClick = async () => {
    if (inputLinks) {
      await request({
        path: "/sources/",
        method: "POST",
        body: {
          source: inputLinks,
        },
      });
      setLinks((prev) => [
        ...prev,
        {
          id: Date.now(),
          link: inputLinks,
          status: "pending",
        },
      ]);
      setInputLinks("");
      setIsClickAddSource(false);
    }
  };

  return (
    <>
      {/*<>global modal</> */}
      {query.get("popup") === "monitoring" && (
        <ModalWrapper>
          <div className="modal-wrapper__title">Monitoring sources</div>
          <div className="modal-wrapper__content">
            {links.map((el) => (
              <div className="modal-wrapper__content_item">
                <div className="modal-wrapper__content_item_link">
                  {el.link}
                </div>
                <div className="modal-wrapper__content_item_icon">
                  {el.status === "active" && <img src={done} alt="done" />}
                  {el.status === "false" && <img src={fals} alt="fals" />}
                  {el.status === "pending" && (
                    <img src={pending} alt="pending" />
                  )}
                </div>
              </div>
            ))}
          </div>
          {!loading ? (
            <div className="modal-wrapper__blockBtn">
              {!isClickAddSource ? (
                <div
                  onClick={() => setIsClickAddSource(true)}
                  className="modal-wrapper__blockBtn_btn"
                >
                  Add new source
                </div>
              ) : (
                <div className="modal-wrapper__blockBtn_inputAndBtn">
                  <Input
                    placeholder={"Enter URL"}
                    value={inputLinks}
                    onChange={(event: any) => setInputLinks(event.target.value)}
                  />
                  <span
                    onClick={handleClick}
                    className="modal-wrapper__blockBtn_btn"
                  >
                    ADD
                  </span>
                </div>
              )}
            </div>
          ) : (
            <h2 style={{ color: "#000", padding: "20px", margin: "0 auto" }}>
              Loading...
            </h2>
          )}
        </ModalWrapper>
      )}
      {query.get("popup") === "tabs" && (
        <ModalWrapper>
          <div className="modal-wrapper__title">Tabs</div>
          <div className="modal-wrapper__content">
            <div className="create__left_check_block">
              {tabs.map((el) => !el.has && <Tab key={el.id} tab={el.tab} />)}
            </div>
          </div>
        </ModalWrapper>
      )}
    </>
  );
};
