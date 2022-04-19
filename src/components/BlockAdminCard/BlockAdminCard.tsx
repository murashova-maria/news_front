import React from "react";
import { AdminCard } from "./AdminCard/AdminCard";
import { IPropsAdmin, Status } from "../../types";

interface IBlockAdminCard {
  items: any;
  status: string;
  handleClick: (id: number, status: Status) => void;
}

export const BlockAdminCard = ({
  items,
  status,
  handleClick,
}: IBlockAdminCard) => {
  return (
    <div className="blockAdminCard">
      {items.map((el: any) => (
        <AdminCard item={{ ...el, status }} handleClick={handleClick} />
      ))}
    </div>
  );
};
