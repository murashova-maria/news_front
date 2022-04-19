import { AdminEditNews, IAdminItem, INewsItem, ITabsItem } from "./index";

export interface IGlobalState {
  isAdmin: boolean;
  isLoggedIn: boolean;
  news: Array<INewsItem>;
  adminEditNews: AdminEditNews | null;
  tabs: Array<ITabsItem>;
}
