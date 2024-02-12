export interface IListResponse<T> {
  status: "success" | "error";
  message: string;
  data?: T[];
}

export interface IResponse<T> {
  status: "success" | "error";
  message: string;
  data?: T;
}

export interface IRedirectResponse {
  status: "redirect";
  newUrl: string;
}
