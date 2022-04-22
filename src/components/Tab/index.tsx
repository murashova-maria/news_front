import React from "react";
import { useGlobalState } from "../../store";
import useQuery from "../../utils/hooks/useQuery";

export const Tab = ({ tab }: any) => {
  const query = useQuery();
  const [tabs, setTabs] = useGlobalState("tabs");
  const isSelect = tabs.find((el) => !el.has);
  const isPopup = query.get("popup") === "tabs";

  const changeTab = (tab: any) => {
    const newArr = tabs.map((el: any) => {
      if (el.tab === tab) {
        el = { ...el, has: !el.has };
      }
      return el;
    });
    if (!isSelect || isPopup) setTabs(newArr);
  };

  return (
    <span
      onClick={() => changeTab(tab)}
      className={`tab ${tab} ${isSelect && !isPopup ? "disabled" : ""}`}
    >
      {tab}
    </span>
  );
};
