import config from "@/config";
import axios from "axios";

const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

// Add a request interceptor
httpRequest.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
httpRequest.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    if (
      location.pathname !== config.routes.login &&
      location.pathname !== config.routes.register
    ) {
      if (error.status === 401)
        location.href =
          config.routes.login +
          "?continue=" +
          encodeURIComponent(location.pathname);
    }

    return Promise.reject(error);
  }
);

const send = async (method, url, data, config) => {
  try {
    const response = await httpRequest.request({
      method,
      url,
      data,
      ...config,
    });

    return response;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const get = (url, config) => send("get", url, null, config);

export const post = (url, data, config) => send("post", url, data, config);

export const put = (url, data, config) => send("put", url, data, config);

export const patch = (url, data, config) => send("patch", url, data, config);

export const del = (url, config) => send("delete", url, null, config);

export const setToken = (token) => {
  httpRequest.defaults.headers["Authorization"] = "Bearer " + token;
  localStorage.setItem("token", token);
};

export default {
  get,
  post,
  put,
  setToken,
};
