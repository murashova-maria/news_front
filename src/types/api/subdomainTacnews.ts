export interface BreackingType {
  id: number;
  title: string;
  cupturn: string;
}

export interface TabType {
  id: number;
  name: string;
}

export interface TabNewsType {
  id: number;
  title: string;
  media_link: string;
  tab: string;
  by: string;
  date: string;
}

export interface MainType {
  id: number;
  title: string;
  text: string;
  media_link: string;
  tab: string;
  by: string;
  date: string;
}

export interface IProps {
  item: MainType;
  hasNewsId: boolean;
}

export interface ExpandType {
  id: number;
  title: string;
  text: string;
  media_link: string;
  tab: string;
  by: string;
  date: string;
  link: string;
}
