import axios, { AxiosHeaders } from "axios";

interface callAPIConfig<TBody, TQuery> {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: TBody;
  params?: TQuery;
  headers?: AxiosHeaders;
}

export async function callAPI<TRes, TQuery = undefined, TBody = undefined>(
  config: callAPIConfig<TBody, TQuery>,
) {
  const {
    url,
    method = "GET",
    data,
    params,
    headers = { "Content-Type": "application/json" },
  } = config;

  const axiosClient = axios.create();

  const response = await axiosClient<TRes>({
    method,
    url,
    data: JSON.stringify(data),
    params,
    headers,
  }).catch((error) => {
    if (error.response) {
      return Promise.reject(error.response.data.message);
    }
    return Promise.reject(error);
  });

  return response.data;
}
