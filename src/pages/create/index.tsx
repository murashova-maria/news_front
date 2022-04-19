import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TextArea } from "../../components/TextArea/TextArea";

import dropIcon from "../../assets/img/dropIcon.png";
import iconAuthor from "../../assets/img/iconAuthor.svg";
import { Checkbox, TextEditor, ToolPanel } from "../../components";
import { Tabs } from "../metainfo/Tabs/tabs";
import { Tab } from "../../components/Tab";
import addTab from "../../assets/img/addTab.svg";
import { useNavigate } from "react-router";
import { useGlobalState } from "../../store";
import { useHttp } from "../../hooks/useHttp";
import { CreatePost, IPublishedItemAPI } from "../../types/api/admin";
import { TabType } from "../../types/api/subdomainTacnews";
import useQuery from "../../utils/hooks/useQuery";

export const CreatePage: React.FC = () => {
  const history = useNavigate();
  const [tabs, setTabs] = useGlobalState("tabs");
  const [adminEditNews, setAdminEditNews] = useGlobalState("adminEditNews");

  const [data, setData] = useState<CreatePost>({
    title: "",
    text: "",
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
      console.log(files[0]);
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
      setData((prev) => ({
        title: adminEditNews.title,
        text: adminEditNews.text,
        copyright_label: adminEditNews.copyright_label,
        copyright_link: adminEditNews.copyright_link,
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
      console.log(data);
      const resp: any | null = await request({
        path: "/save/",
        method: "PUT",
        body: {
          title: data.title,
          text: data.text,
          copyright_label: "",
          copyright_link: "",
          by: data.by,
          main: false,
          breacking: isCheckedBreaking,
          tab: tabs.find((el) => !el.has)?.id ?? 0,
          published: false,
          media: selectedFile ?? "",
          secondary_main: isCheckedMain,
        },
      });
    }
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
            <img src={iconAuthor} alt="iconAuthor" />
            <input
              value={data.by}
              onChange={(event) =>
                setData((prev) => ({ ...prev, by: event.target.value }))
              }
              type="text"
              placeholder="By"
            />
          </div>
          <ToolPanel />
          <TextEditor
            value={data.text}
            onChange={(text: string) => setData((prev) => ({ ...prev, text }))}
          />
        </div>

        <div className="create__left">
          <div className="create__left_check">
            Main item <Checkbox setIsCheckedCreate={setIsCheckedMain} />
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
              {tabs.map((el) => el.has && <Tab key={el.id} tab={el.tab} />)}
              <img
                src={addTab}
                alt="addTab"
                onClick={() =>
                  history({ pathname: "/admin/create?popup=tabs" })
                }
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
