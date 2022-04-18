import React from "react";
import { useGlobalState } from "../../store";

export const Tab = ({ tab }: any) => {
  const [tabs, setTabs] = useGlobalState("tabs");

  const changeTab = (tab: any) => {
    const newArr = tabs.map((el: any) => {
      if (el.tab === tab) {
        el = { ...el, has: !el.has };
      }
      return el;
    });
    setTabs(newArr);
  };

  return (
    <div onClick={() => changeTab(tab)} className={`tab ${tab}`}>
      {tab}
    </div>
  );
};
