import { AdminEditNews, IAdminItem, INewsItem, ITabsItem } from "./index";

export interface IGlobalState {
  isLogin: boolean;
  isLoggedIn: boolean;
  news: Array<INewsItem>;
  adminEditNews: AdminEditNews | null;
  tabs: Array<ITabsItem>;
}
