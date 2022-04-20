import React, {useState} from "react";
import { AdminCard } from "./AdminCard/AdminCard";
import { IPropsAdmin, Status } from "../../types";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box } from "@mui/material";

interface IBlockAdminCard {
  items: any;
  status: string;
  handleClick: (id: number, status: Status) => void;
  featchItems?: (offset: number) => void
}

export const BlockAdminCard = ({
  items,
  status,
  handleClick,
  featchItems
}: IBlockAdminCard) => {
  const [offset, setOffset] = useState<number>(5);
  const next = () => {
    if(featchItems) featchItems(offset)
    setOffset((prev) => prev + 5)
  }

  return (
    <Box className="blockAdminCard" id={status} height={100}>
      <InfiniteScroll
          dataLength={items.length} //This is important field to render the next data
          next={next}
          hasMore={true}
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
    </Box>
  );
};
