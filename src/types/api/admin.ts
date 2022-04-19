export interface INewsItemAPI {
  title: string;
  by: string;
  copyright_label: string;
  date: string;
  id: number;
  link: string;
  media_link: string;
  source: string;
}

export interface CreatePost {
  title: string;
  text: string;
  copyright_label: string;
  copyright_link: string;
  by: string;
  tab: number;
  media: string;
}

export interface IPublishedItemAPI {
  breacking: boolean;
  by: string;
  copyright_label: string;
  copyright_link: string;
  date: string;
  id: number;
  link: string;
  main: boolean;
  media_link: string;
  original: number;
  source: string;
  tab: number;
  title: string;
}

export interface SourcesAPI {
  id: number;
  source: string;
  status: string;
}
