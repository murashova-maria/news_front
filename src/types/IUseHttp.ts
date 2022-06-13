import { StatusCodes } from 'http-status-codes';

// http
export type MethodType = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'TRACE' | 'PATCH';

export type BodyType = Record<string, string | number | boolean>;

export interface RequestParameters {
    path: string;
    method?: MethodType;
    body?: FormData | BodyType | BodyType[];
    query?: BodyType;
    userOptions?: RequestInit;
    host?: string;
}

type ValueOf<T> = T[keyof T];

export type UnionRequestParameters = ValueOf<RequestParameters>;

export type RequestType = <ResponseType = any>(requestParameters: RequestParameters) => Promise<HttpResponse<ResponseType>>;

interface HttpResponse<T = unknown> {
    data: T;
    statusCode: StatusCodes;
    error: boolean;
}

// useHttp
export type HttpRequestType = <ResponseType = any>(requestParameters: RequestParameters) => Promise<ResponseType | null>;

export interface IUseHttp {
    loading: boolean;
    request: HttpRequestType;
}

// useCacheHttp
type StorageType = 'global' | 'session' | 'local';

interface CacheParameters {
    keys: string[];
    storageType: StorageType;
}

export type CacheRequestType = <ResponseType>(
    requestParameters: RequestParameters,
    cacheParameters: CacheParameters
) => Promise<ResponseType | string>;

export interface IUseCacheHttp extends Pick<IUseHttp, 'loading'> {
    request: CacheRequestType;
}