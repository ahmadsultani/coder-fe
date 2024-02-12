import { DataProvider, Options, fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

const fetchJson = async (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "*/*" });
  } else {
    options.headers.set("Accept", "*/*");
  }

  const token = localStorage.getItem("token");

  options.headers.set("Authorization", `Bearer ${token}`);

  options.user = {
    token: token ?? "",
  };

  return fetchUtils.fetchJson(url, options).catch((error) => {
    if (error.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/admin#/login";
    }
    throw error;
  });
};

const defaultProvider = simpleRestProvider(API_URL, fetchJson);

export const dataProvider: DataProvider = {
  ...defaultProvider,
  create: async (resource, params) => {
    if (resource === "projects") {
      const url = `${API_URL}/${resource}?divisionId=${params.data.divisionId}`;
      return fetchJson(url, {
        method: "POST",
        body: params.data.body,
      }).then(({ json }) => ({
        data: json,
      }));
    }

    return defaultProvider.create(resource, params);
  },
  getList: async (resource, params) => {
    const start = (params.pagination.page - 1) * params.pagination.perPage;
    const end = start + params.pagination.perPage - 1;
    const url = `${API_URL}/${resource}?range=[${start},${end}]`;
    return fetchJson(url).then(({ json }) => ({
      data: json.data,
      total: json.length,
    }));
  },
  getMany: async (resource, params) => {
    const url = `${API_URL}/${resource}`;
    return fetchJson(url).then(({ json }) => ({
      data: json.data,
    }));
  },
  getOne: async (resource, params) => {
    const url = `${API_URL}/${resource}/${params.id}`;
    return fetchJson(url).then(({ json }) => ({
      data: json.data,
    }));
  },
  update: async (resource, params) => {
    if (resource === "projects") {
      const url = `${API_URL}/${resource}/${params.id}`;
      return fetchJson(url, {
        method: "PUT",
        body: params.data.body,
      }).then(({ json }) => ({
        data: json.data,
      }));
    }

    return defaultProvider.update(resource, params);
  },
};
