import { callAPI } from "@/_config/api";
import { IDivision } from "@/_types/division";
import { IListResponse } from "@/_types/response";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllDivision = async () => {
  const response = await callAPI<IListResponse<IDivision>>({
    url: `${API_URL}/divisions`,
    method: "GET",
  });
  return response;
};
