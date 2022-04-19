import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TextArea } from "../../components/TextArea/TextArea";

import dropIcon from "../../assets/img/dropIcon.png";
import iconAuthor from "../../assets/img/iconAuthor.svg";
import { Checkbox, Dropdown } from "../../components";
import { Base64 } from "js-base64";
import { useNavigate } from "react-router";
import { useGlobalState } from "../../store";
import { useHttp } from "../../hooks/useHttp";
import { CreatePost } from "../../types/api/admin";
import { TabType } from "../../types/api/subdomainTacnews";
import useQuery from "../../utils/hooks/useQuery";
import { Box, Input } from "@mui/material";

export const CreatePage: React.FC = () => {
  const history = useNavigate();
  const [tabs, setTabs] = useGlobalState("tabs");
  const [tab, setTab] = useState<number>(0);
  const [adminEditNews, setAdminEditNews] = useGlobalState("adminEditNews");

  const [data, setData] = useState<CreatePost>({
    title: "",
    text: "",
    link: "",
    copyright_label: "",
    copyright_link: "",
    by: "",
    tab: 0,
    media: "",
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

  const onDropHandler = (e: any) => {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    if (
      files[0].name.split(".")[files[0].name.split(".").length - 1] === "png" ||
      files[0].name.split(".")[files[0].name.split(".").length - 1] === "jpg"
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
        media: adminEditNews.media_link,
      }));
      setPreview(adminEditNews.media_link);
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
      setPreview("");
    }
  }, [selectedFile]);

  const handleClick = async () => {
    if (data) {
      const resp: any | null = await request({
        path: "/save/",
        method: "PUT",
        body: {
          title: data.title,
          text: data.text,
          copyright_label: data.copyright_label,
          copyright_link: "",
          by: data.by,
          main: isCheckedMain,
          breacking: isCheckedBreaking,
          tab: tab,
          published: true,
          media: selectedFile ?? "",
          secondary_main: isCheckedSecondary,
        },
      });

      if (resp?.error) return toast.error(resp.error);

      toast.success("Success!");
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
            <div
              onDragStart={(e) => dragStartHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragStartHandler(e)}
              onDrop={(e) => onDropHandler(e)}
              className="dropArea"
            >
              Drag and drop files to upload them
            </div>
          ) : (
            <div
              onDragStart={(e) => dragStartHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragStartHandler(e)}
              className="dropArea"
            >
              {preview ? (
                <img src={preview} alt="preview" className="preview" />
              ) : data.media ? (
                <img src={data.media} alt="dropIcon" />
              ) : (
                <img src={dropIcon} alt="dropIcon" />
              )}
            </div>
          )}
          <div className="create__right_by">
            <a href={data.link} target="_blank" style={{ display: "flex" }}>
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
            <a href={data.link} target="_blank" style={{ display: "flex" }}>
              <img src={iconAuthor} alt="iconAuthor" />
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
            <img src={iconAuthor} alt="iconAuthor" />
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
          <TextArea
            textarea={true}
            value={data.text}
            placeholder="Enter texts..."
            onChange={(event: any) =>
              setData((prev) => ({ ...prev, text: event.target.value }))
            }
          />
        </div>

        <div className="create__left">
          <div className="create__left_check">
            Main item{" "}
            <Checkbox
              disabled={isCheckedSecondary}
              setIsCheckedCreate={setIsCheckedMain}
            />
          </div>
          <br />
          <div className="create__left_check">
            Secondary item
            <Checkbox
              disabled={isCheckedMain}
              setIsCheckedCreate={setIsCheckedSecondary}
            />
          </div>
          <div className="create__left_check breaking">
            <div className="create__left_check_top">
              Breaking news{" "}
              <Checkbox setIsCheckedCreate={setIsCheckedBreaking} />
            </div>
            <div className="create__left_check_bot">
              <TextArea
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
            <span onClick={handleClick} className="buttons_create">
              Publish
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
