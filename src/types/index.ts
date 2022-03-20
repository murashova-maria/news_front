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

export interface IProps {
    item: INewsItem;
    hasNewsId: boolean;
}

export interface IInput {
    locked: boolean,
    focussed: boolean,
    value: string,
    error: string,
    label: string,
}