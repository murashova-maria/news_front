import { IAdminItem, INewsItem, ITabsItem } from "./index";

export interface IGlobalState {
  news: Array<INewsItem>;
  adminNews: Array<IAdminItem>;
  tabs: Array<ITabsItem>;
}
