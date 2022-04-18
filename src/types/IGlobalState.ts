import { IAdminItem, INewsItem, ITabsItem } from "./index";

export interface IGlobalState {
  isLoggedIn: boolean
  news: Array<INewsItem>;
  adminNews: Array<IAdminItem>;
  tabs: Array<ITabsItem>;
}
