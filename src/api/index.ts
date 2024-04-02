import axios, { AxiosRequestConfig } from "axios";

const baseURL = `/api`;

const baseInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": `${process.env.NEXT_PUBLIC_ACCESS_CONTROL_ALLOW_ORIGIN_URL}`,
  },
});

export interface DefaultResponse {
  opcode: number;
  message: string;
}

export type ResponseData<T = undefined> = false extends (
  T extends undefined ? true : false
)
  ? DefaultResponse & {
      data: T;
    }
  : DefaultResponse;

const apiRequest = {
  get: <T = undefined>(url: string, request?: AxiosRequestConfig) =>
    baseInstance.get<T, ResponseData<T>>(url, request),
  delete: <T = undefined>(url: string, request?: AxiosRequestConfig) =>
    baseInstance.delete<T, ResponseData<T>>(url, request),
  post: <T = undefined>(
    url: string,
    request?: unknown,
    config?: AxiosRequestConfig,
  ) => baseInstance.post<T, ResponseData<T>>(url, request, config),
  put: <T = undefined>(
    url: string,
    request?: unknown,
    config?: AxiosRequestConfig,
  ) => baseInstance.put<T, ResponseData<T>>(url, request, config),
  patch: <T = undefined>(
    url: string,
    request?: unknown,
    config?: AxiosRequestConfig,
  ) => baseInstance.patch<T, ResponseData<T>>(url, request, config),
};

export default apiRequest;
