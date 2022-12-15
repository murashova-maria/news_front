import React, { useMemo, useState } from "react";
import { AdminCard } from "./AdminCard/AdminCard";
import { PermissionType, Status } from "../../types";
import InfiniteScroll from "react-infinite-scroll-component";

///////////////////////////




// Hardcored permissions for users
const permissionsList: { [key: string]: PermissionType[] } = {
  "a001@fastmail.nl": [
    "decline",
    "edit",
    "publish",
    "delete",
    "restore",
    "unpublish",
  ],
  "a002@fastmail.nl": [
    "decline",
    "edit",
    "publish",
    "delete",
    "restore",
    "unpublish",
  ],
  "editor1@fastmail.nl": ["decline", "edit", "publish", "delete", "restore"],
  "editor2@fastmail.nl": ["decline", "edit", "publish", "delete", "restore"],
  "editor3@fastmail.nl": ["decline", "edit", "publish", "delete", "restore"],
  "viewer1@fastmail.nl": [],
  "viewer2@fastmail.nl": [],
};

const checkPermissions = (email: string | null): PermissionType[] => {
  if (email && permissionsList[email]) {
    return permissionsList[email];
  }
  return ["decline", "edit", "publish", "delete", "restore", "unpublish"];
};

///////////

interface IBlockAdminCard {
  items: any;
  status: string;
  handleClick: (id: number, status: Status) => void;
  featchItems?: (offset: number) => void;
  hasMore: boolean;
}

export const BlockAdminCard = ({
  items,
  status,
  handleClick,
  featchItems,
  hasMore,
}: IBlockAdminCard) => {
  const [offset, setOffset] = useState<number>(5);
  const next = () => {
    if (featchItems) featchItems(offset);
    setOffset((prev) => prev + 5);
  };

  //Permissions for buttons
  let userInfoRaw: null | string = sessionStorage.getItem("userInfo");
  let userEmail: null | string = null;
  if (userInfoRaw) userEmail = JSON.parse(userInfoRaw).email;

  const permissions: PermissionType[] = useMemo(() => {
    return checkPermissions(userEmail);
  }, [userInfoRaw]);


  return (
    <div className="blockAdminCard" id={status}>
      <InfiniteScroll
        height={600}
        dataLength={items.length} //This is important field to render the next data
        next={next}
        hasMore={!hasMore}
        loader={<h4>Loading...</h4>}
        scrollableTarget={status}
      >
        {items.map((el: any) => (
          <AdminCard key={el.id} item={{ ...el, status }} handleClick={handleClick} permissions={permissions} />
        ))}
      </InfiniteScroll>
    </div>
  );
};
