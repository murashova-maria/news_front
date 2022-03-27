export interface INewsItem {
    id: number,
    img: string,
    tag: Array<'New' | 'Sport' | 'Investigations' | 'Weather' | 'Business & Economy' | 'Technology & Science'>,
    title: string,
    description: string,
    author: string,
    date: string,
    mainNews: boolean
}
export interface IAdminItem {
    id: number,
    img: string,
    tag: Array<'New' | 'Sport' | 'Investigations' | 'Weather' | 'Business & Economy' | 'Technology & Science'>,
    title: string,
    description: string,
    author: string,
    date: string,
    status: 'newItem' | 'declinedNews' | 'publishedNews'
}
export interface ITabsItem {
    tab: string,
    has: boolean
}

export type TextEditorProps = {
    className?: string;
  }

export interface IProps {
    item: INewsItem;
    hasNewsId: boolean;
}
export interface IPropsAdmin {
    item: IAdminItem;
}

export interface IInput {
    locked: boolean,
    focussed: boolean,
    value: string,
    error: string,
    label: string,
}