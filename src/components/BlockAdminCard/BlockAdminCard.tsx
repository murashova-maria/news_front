import React, {useState} from "react";
import { AdminCard } from "./AdminCard/AdminCard";
import { Status } from "../../types";
import InfiniteScroll from 'react-infinite-scroll-component';

interface IBlockAdminCard {
  items: any;
  status: string;
  handleClick: (id: number, status: Status) => void;
  featchItems?: (offset: number) => void
  hasMore: boolean
}

export const BlockAdminCard = ({
  items,
  status,
  handleClick,
  featchItems,
  hasMore
}: IBlockAdminCard) => {
  const [offset, setOffset] = useState<number>(5);
  const next = () => {
    if(featchItems) featchItems(offset)
    setOffset((prev) => prev + 5)
  }

  return (
    <div className="blockAdminCard" id={status} >
      <InfiniteScroll
          height={600}
          dataLength={items.length} //This is important field to render the next data
          next={next}
          hasMore={!hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget={status}
      >
      {items.map((el: any) => (
        <AdminCard item={{ ...el, status }} handleClick={handleClick} />
      ))}
      </InfiniteScroll>
    </div>
  );
};
