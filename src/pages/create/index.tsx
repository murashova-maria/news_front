import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TextArea } from "../../components/TextArea/TextArea";
import PostEditor from "../../components/PostEditor/PostEditor";

import dropIcon from "../../assets/img/dropIcon.png";
import iconAuthor from "../../assets/img/iconAuthor.svg";
import link from "../../assets/img/link.svg";
import copyright from "../../assets/img/copyright.svg";
import { Checkbox, Dropdown } from "../../components";
import { useNavigate } from "react-router";
import { useGlobalState } from "../../store";
import { useHttp } from "../../hooks/useHttp";
import { CreatePost } from "../../types/api/admin";
import { TabType } from "../../types/api/subdomainTacnews";
import useQuery from "../../utils/hooks/useQuery";
import { Button } from "@mui/material";
import { Image } from "../../components/shared/Image/Image";
import { getImgUrl } from "../../utils/getImgUrl";
import { divideConent } from "../../utils/divideConent";

export const CreatePage: React.FC = () => {
  const history = useNavigate();
  const [tabs, setTabs] = useGlobalState("tabs");
  const [tab, setTab] = useState<number>(0);
  const [adminEditNews] = useGlobalState("adminEditNews");

  const [isFetching, setIsFetching] = useState<boolean>(false);

  const [data, setData] = useState<CreatePost>({
    title: "",
    text: "",
    link: "",
    copyright_label: "",
    copyright_link: "",
    by: "",
    tab: 0,
    media: "",
    cupturn: "",
  });

  const [drag, setDrag] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileFormat, setFileFormat] = useState("");
  const [preview, setPreview] = useState<any>();

  const [isCheckedBreaking, setIsCheckedBreaking] = useState<boolean>(false);
  const [isCheckedMain, setIsCheckedMain] = useState<boolean>(false);
  const [isCheckedSecondary, setIsCheckedSecondary] = useState<boolean>(false);

  const { request } = useHttp();
  const query = useQuery();

  const dragStartHandler = (e: any) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e: any) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (e: any, type?: "file" | "picture") => {
    if (type !== "file") e.preventDefault();
    let files = type === "file" ? [e] : [...e.dataTransfer.files];
    if (
      // files[0].name.split(".")[files[0].name.split(".").length - 1] === "png" ||
      // files[0].name.split(".")[files[0].name.split(".").length - 1] === "jpg" ||
      // files[0].name.split(".")[files[0].name.split(".").length - 1] === "jpeg"
      true
    ) {
      setSelectedFile(files[0]);
      setFileFormat(
        files[0].name.split(".")[files[0].name.split(".").length - 1]
      );
    } else {
      toast.error("Only PNG, JPG are supported");
    }

    setDrag(false);
  };

  useEffect(() => {
    (async function () {
      const respTabs: Array<TabType> | null = await request({
        path: "/tabs/",
        method: "GET",
      });
      if (respTabs) {
        const newTabs = respTabs.map((item) => ({
          id: item.id,
          tab: item.name,
          has: true,
        }));
        setTabs(newTabs);
      }
    })();

    if (query.get("edit") === "true" && adminEditNews) {
      setData(() => ({
        title: adminEditNews.title,
        text: adminEditNews.text,
        copyright_label: adminEditNews.copyright_label,
        copyright_link: adminEditNews.copyright_link,
        link: adminEditNews.link,
        by: adminEditNews.by,
        tab: adminEditNews.tab,
        media: getImgUrl(adminEditNews.media_link),
        cupturn: adminEditNews.cupturn,
        original_id: adminEditNews.original.id,
      }));
      setTab(adminEditNews.tab);
      setPreview(getImgUrl(adminEditNews.media_link));
      setIsCheckedBreaking(adminEditNews.breacking);
      setIsCheckedMain(adminEditNews.main);
      setIsCheckedSecondary(adminEditNews.secondary_main);
    } else if (query.get("edit") === "true" && !adminEditNews) {
      history({ pathname: "/admin" });
    }
  }, []);

  useEffect(() => {
    if (selectedFile) {
      const reader: any = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(getImgUrl(adminEditNews?.media_link || ""));
    }
  }, [selectedFile]);

  const handleClick = async (editId?: number, published = false) => {
    setIsFetching(true);
    if (data) {
      let requestBody: any = new FormData();
      requestBody.append("title", data.title);
      requestBody.append("copyright_label", data.copyright_label);
      requestBody.append("copyright_link", data.copyright_link);
      requestBody.append("by", data.by);
      requestBody.append("main", isCheckedMain);
      requestBody.append("breacking", isCheckedBreaking);
      requestBody.append("tab", tab ? tab : data.tab);
      requestBody.append("link", data.link);
      requestBody.append("media", selectedFile ?? data.media);
      requestBody.append("secondary_main", isCheckedSecondary);
      requestBody.append("cupturn", data.cupturn);
      //requestBody.append('published', published)
      //requestBody.append('text', data.text.replaceAll("\n", "<br>"))

      //Upload all data except text
      const resp: any | null = await request({
        path: `/save${editId ? "/" + editId : ""}/`,
        method: "PUT",
        body: requestBody,
      });

      //Handle error
      if (resp?.error || typeof resp !== "number") {
        toast.error(resp.error ?? "Error!");
        setIsFetching(false);
        return;
      }

      //Divide text into partials and upload each partial separately
      const partials = divideConent(data.text);

      for (let partial of partials) {
        const partRes: any | null = await request({
          path: `/add_text/${resp}/`,
          method: "PUT",
          body: { text: partial },
        });
        if (partRes?.error) {
          toast.error(partRes?.error ?? "Error!");
          setIsFetching(false);
          return;
        }
      }

      if (!published) {
        toast.success("Success!");
      }
      if (published) {
        const publishResp: any | null = await request({
          path: `/pending/publish/${resp}/`,
          method: "POST",
        });
        setIsFetching(false);
        if (!publishResp?.error) toast.success("Success!");
      }

      setIsFetching(false);
      history({ pathname: "/admin" });
    }
  };

  const newTabs: Array<{ value: string; name: string }> = tabs.reduce(
    (arr: any, next) => {
      arr.push({ value: next.id.toString(), name: next.tab });
      return arr;
    },
    []
  );

  const handleLoadFile =
    (type: "file" | "picture") =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files && event.target.files[0];
      onDropHandler(file, type);
    };

  return (
    <>
      <div className="circle firstcircle"></div>
      <div className="circle secondcircle"></div>
      <div className="circle thirdcircle"></div>
      <div className="circlebot fourthcircle"></div>
      <div className="create">
        <div className="create__right">
          <TextArea
            placeholder="Title"
            title={true}
            value={data.title}
            onChange={(event: any) =>
              setData((prev) => ({ ...prev, title: event.target.value }))
            }
          />
          {drag ? (
            <span
              onClick={(e) => dragStartHandler(e)}
              onDragStart={(e) => dragStartHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragStartHandler(e)}
              onDrop={(e) => onDropHandler(e)}
              className="dropArea"
            >
              Drag and drop files to upload them
            </span>
          ) : (
            <div
              onDragStart={(e) => dragStartHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragStartHandler(e)}
              className="dropArea"
            >
              {preview ? (
                <div className="create__wrapper__preview">
                  <Image src={preview} alt="preview" className="preview" />
                  <Button
                    className="create__wrapper__preview__upload-button"
                    component="label"
                  >
                    {"Select picture"}
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={handleLoadFile("file")}
                    />
                  </Button>
                </div>
              ) : data.media ? (
                <div className="create__wrapper__preview">
                  <Image src={data.media} alt="dropIcon" />
                  <Button
                    className="create__wrapper__preview__upload-button"
                    component="label"
                  >
                    {"Select picture"}
                    <input
                      type="file"
                      accept="image/jpeg"
                      hidden
                      onChange={handleLoadFile("file")}
                    />
                  </Button>
                </div>
              ) : (
                <div className="create__wrapper">
                  <img src={dropIcon} alt="dropIcon" />
                  <Button
                    className="create__wrapper__upload-button"
                    component="label"
                  >
                    {"Select picture"}
                    <input
                      type="file"
                      accept="image/jpeg"
                      hidden
                      onChange={handleLoadFile("file")}
                    />
                  </Button>
                </div>
              )}
            </div>
          )}
          <div className="create__right_by">
            <a
              href={data.link}
              target="_blank"
              style={{ display: "flex" }}
              rel="noreferrer"
            >
              <img src={iconAuthor} alt="iconAuthor" />
            </a>
            <input
              value={data.by}
              onChange={(event) =>
                setData((prev) => ({ ...prev, by: event.target.value }))
              }
              type="text"
              placeholder="By"
            />
          </div>
          <div className="create__right_by">
            <a
              href={data.link}
              target="_blank"
              style={{ display: "flex" }}
              rel="noreferrer"
            >
              <img src={link} alt="link" />
            </a>
            <input
              value={data.link}
              onChange={(event) =>
                setData((prev) => ({ ...prev, link: event.target.value }))
              }
              type="text"
              placeholder="link"
            />
          </div>
          <div className="create__right_copyright">
            <img src={copyright} alt="copyright" />
            <input
              value={data.copyright_label}
              onChange={(event) =>
                setData((prev) => ({
                  ...prev,
                  copyright_label: event.target.value,
                }))
              }
              type="text"
              placeholder="copyright"
            />
          </div>

          <PostEditor
            onChange={(content: string) => {
              setData((prev) => ({ ...prev, text: content }));
            }}
            placeholder="Enter texts..."
            defaultValue={data.text}
          />
        </div>

        <div className="create__left">
          <div className="create__left_check">
            Main item{" "}
            <Checkbox
              checked={isCheckedMain}
              disabled={isCheckedSecondary}
              setIsCheckedCreate={setIsCheckedMain}
            />
          </div>
          <br />
          <div className="create__left_check">
            Secondary item
            <Checkbox
              checked={isCheckedSecondary}
              disabled={isCheckedMain}
              setIsCheckedCreate={setIsCheckedSecondary}
            />
          </div>
          <div className="create__left_check breaking">
            <div className="create__left_check_top">
              Breaking news{" "}
              <Checkbox
                checked={isCheckedBreaking}
                setIsCheckedCreate={setIsCheckedBreaking}
              />
            </div>
            <div className="create__left_check_bot">
              <TextArea
                value={data.cupturn}
                onChange={(event: any) =>
                  setData((prev) => ({ ...prev, cupturn: event.target.value }))
                }
                readOnly={!isCheckedBreaking}
                breaking={true}
                placeholder="Enter Cupturn"
              />
            </div>
          </div>
          <div className="create__left_check tabCreate">
            Tabs
            <div className="create__left_check_block">
              <Dropdown
                label="Tabs"
                options={newTabs}
                value={String(tab)}
                handleChange={(value) => setTab(Number(value))}
              />
            </div>
          </div>
          <div className="create__left_buttons">
            <div
              onClick={() => history({ pathname: "/admin" })}
              className="buttons_monitoring"
            >
              Close
            </div>
            <button
            disabled={isFetching}
              onClick={() => handleClick(adminEditNews?.id, true)}
              className="buttons_create"
            >
              Publish
            </button>
            <button
            disabled={isFetching}
              onClick={() => handleClick(adminEditNews?.id)}
              className="buttons_monitoring buttons_cancle"
            >
              save changes & close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
