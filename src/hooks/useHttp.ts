import { HttpRequestType, IUseHttp } from '../types/IUseHttp';
import { useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { request } from '../common/functions/http';
import { useGlobalState } from "../store";

export const useHttp = (): IUseHttp => {
    const [, setIsLoggedIn] = useGlobalState('isLoggedIn');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // const history = Navigate();

    const httpRequest: HttpRequestType = async <ResponseType>(parameters: any) => {
        try {
            setLoading(true);
            const response = await request<ResponseType>(parameters);

            if (response.statusCode === 401) {
                setIsLoggedIn(false);
                toast.error('Your session has expired. Please log in.');
                // if (history.location.pathname !== '/login') {
                //     history.push(`/login?redirect=${history.location.pathname}`);
                // }

                return null;
            }

            setError(response.error);
            setLoading(false);
            return response.data;
        } catch {
            setLoading(false);
            setError(true);
            return null;
        }
    };
    return { loading, request: useCallback(httpRequest, []), error };
};