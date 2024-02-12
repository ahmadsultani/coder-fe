import {
  IBestProject,
  IProject,
  IProjectParams,
  IProjectQueryParams,
} from "@/_types/project";
import { callAPI } from "@/_config/api";
import { IListResponse } from "@/_types/response";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllProject = async ({
  divisionId,
  page = 1,
  size = 9,
}: IProjectParams) => {
  const range = `[${(page - 1) * size},${page * size - 1}]`;
  const response = await callAPI<IListResponse<IProject>, IProjectQueryParams>({
    url: `${API_URL}/projects`,
    params: {
      divisionId,
      range,
    },
    method: "GET",
  });
  return response;
};

export const getAllBestProject = async () => {
  const response = await callAPI<IListResponse<IBestProject>>({
    url: `${API_URL}/best-projects`,
    method: "GET",
  });
  return response;
};
