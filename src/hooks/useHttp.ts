import { HttpRequestType, IUseHttp } from "../types/IUseHttp";
import { useCallback, useState } from "react";
import { request } from "../common/functions/http";
import { useGlobalState } from "../store";

export const useHttp = (): IUseHttp => {
  const [, setIsLoggedIn] = useGlobalState("isLoggedIn");

  const [loading, setLoading] = useState(false);

  const httpRequest: HttpRequestType = async <ResponseType>(
    parameters: any
  ) => {
    try {
      setLoading(true);
      const response = await request<ResponseType>(parameters);

      if (response.statusCode === 401) {
        setIsLoggedIn(false);

        return null;
      }

      setLoading(false);
      return response.data;
    } catch {
      setLoading(false);
      return null;
    }
  };
  return { loading, request: useCallback(httpRequest, []) };
};
