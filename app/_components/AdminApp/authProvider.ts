import { AuthProvider } from "react-admin";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const request = new Request(`${API_URL}/login`, {
      body: JSON.stringify({ username, password }),
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        return response.json();
      })
      .then(({ data, status, message }) => {
        if (!data.accessToken) {
          throw new Error(message);
        }

        // store the token in local storage
        localStorage.setItem("token", data.accessToken);
      })
      .catch((error) => {
        console.error("error", error);
        throw new Error(error.message);
      });
  },
  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },
  checkError: (error) => {
    console.error("error", error);
    return Promise.resolve();
  },
  checkAuth: async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Unauthenticated!");
      }
      return Promise.resolve();
    } catch (error: string | any) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return Promise.reject(error);
    }
  },
  getPermissions: () => {
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};
