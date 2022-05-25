import {API_URL} from '../config.js'

const HOST = API_URL.replaceAll('/api', '')
export const getImgUrl = (url: string) => {
    if (url.includes('http')) return url;
    else if (url.includes('/media/uploads/')) return `${HOST}${url}`;
    return url;
}