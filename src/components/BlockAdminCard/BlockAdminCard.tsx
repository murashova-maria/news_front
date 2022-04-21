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
    console.log('sss');
    
    if(featchItems) featchItems(offset)
    setOffset((prev) => prev + 5)
  }

  return (
    <div className="blockAdminCard" id={status} >
      <InfiniteScroll
          height={900}
          dataLength={items.length} //This is important field to render the next data
          next={next}
          hasMore={!hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget={status}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
      >
      {items.map((el: any) => (
        <AdminCard item={{ ...el, status }} handleClick={handleClick} />
      ))}
      </InfiniteScroll>
    </div>
  );
};
