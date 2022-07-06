export interface Original {
  by: string;
  copyright_label: string;
  copyright_link: string;
  date: string;
  date_added_to_db: string;
  id: 386;
  link: string;
  media_link: string;
  source: string;
  tag: string;
  text: string;
  title: string;
}

export interface AdminEditNews {
  breacking: boolean;
  by: string;
  copyright_label: string;
  copyright_link: string;
  cupturn: string;
  date: string;
  id: 16;
  original: Original;
  link: string;
  main: boolean;
  media_link: string;
  published: boolean;
  secondary_main: boolean;
  source: string;
  tab: number;
  text: string;
  title: string;
}

export interface INewsItem {
  id: number;
  img: string;
  tag: Array<
    | "New"
    | "Sport"
    | "Investigations"
    | "Weather"
    | "Business & Economy"
    | "Technology & Science"
  >;
  title: string;
  description: string;
  author: string;
  date: string;
  mainNews: boolean;
}

export interface IAdminItem {
  id: number;
  img: string;
  tag: Array<
    | "New"
    | "Sport"
    | "Investigations"
    | "Weather"
    | "Business & Economy"
    | "Technology & Science"
  >;
  title: string;
  description: string;
  author: string;
  date: string;
  status: "newItem" | "declinedNews" | "publishedNews" | 'pending';
}
export interface ITabsItem {
  id: number;
  tab: string;
  has: boolean;
}

export type TextEditorProps = {
  value: string;
  onChange: (text: string) => void;
  className?: string;
};

export interface IProps {
  item: INewsItem;
  hasNewsId: boolean;
}

export type Status = "decline" | "publish" | "restore" | "delete" | "offset";

export type PermissionType =
  | "decline"
  | "edit"
  | "publish"
  | "delete"
  | "restore"
  | "unpublish";

export interface IPropsAdmin {
  item: IAdminItem;
  handleClick: (id: number, status: Status) => void;
  permissions?: PermissionType[]
}

export interface IInput {
  locked: boolean;
  focussed: boolean;
  value: string;
  error: string;
  label: string;
}
