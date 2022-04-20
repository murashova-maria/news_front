import { BodyType, RequestType } from "../../types/IUseHttp";
import { StatusCodes } from "http-status-codes";

import merge from "lodash.merge";

const isAdmin = sessionStorage.getItem("isAdmin");
const API_URL = Boolean(isAdmin)
  ? "https://tac.stoi.co/api"
  : "https://tacnews.org/api";

const token = sessionStorage.getItem("token");
console.log('token', token)


if (!isAdmin && token) {
  sessionStorage.removeItem("token");
}

export const request: RequestType = async ({
  path,
  method = "GET",
  body = null,
  query = null,
  userOptions,
  host = API_URL,
}) => {
  const headers: any = {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.9",
    "sec-fetch-site": "same-origin",
  };

  if (isAdmin) headers[`Authorization`] = `Token ${token}`;

  if (method === "GET") {
    // headers[`sec-fetch-dest`] = "document";
    // headers["sec-fetch-mode"] = "navigate";
    // headers["sec-fetch-user"] = "?1";
    // headers["upgrade-insecure-requests"] = "1";
  } else {
    // headers["sec-fetch-dest"] = "empty";
    // headers["sec-fetch-mode"] = "cors";
    // headers["x-requested-with"] = "XMLHttpRequest";

    if (!(body instanceof FormData)) {
      headers["content-type"] =
        "application/x-www-form-urlencoded; charset=UTF-8";
    }
  }

  const defaultOptions = {
    method,
    headers,
    referrer: `${API_URL}`,
    referrerPolicy: "strict-origin-when-cross-origin",
    mode: "cors",
    credentials: "include",
    body: formatBody(body),
  };

  const link = formatPath(path, host, query);
  const options = merge(defaultOptions, userOptions);
  const response = await fetch(link, options);

  const data = await response.json().catch(() => null);

  return {
    data,
    statusCode: response.status,
    error: response.status !== StatusCodes.OK,
  };
};

const formatBody = (body: BodyType | BodyType[] | FormData | null) => {
  if (!body) {
    return null;
  }

  if (body instanceof FormData) {
    return body;
  }

  if (Array.isArray(body)) {
    return JSON.stringify(body);
  }

  let formatResult = "";

  for (const key in body) {
    const element = body[key];

    formatResult += `${key}=${encodeURIComponent(element)}&`;
  }

  return formatResult.slice(0, -1);
};

const formatPath = (path: string, host: string, query?: BodyType | null) => {
  const STARTS_WITH_SLASH = /^\/+/;
  const ENDS_WITH_SLASH = /\/+$/;

  const formattedPath = path.replace(STARTS_WITH_SLASH, "");
  const formattedHost = host.replace(ENDS_WITH_SLASH, "");

  if (query) {
    const parameters = new URLSearchParams(
      query as Record<string, string>
    ).toString();
    return `${formattedHost}/${formattedPath}${
      formattedPath.includes("?") ? "&" : "?"
    }${parameters}`;
  }

  return `${formattedHost}/${formattedPath}`;
};
