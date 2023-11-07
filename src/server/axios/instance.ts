import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
});

instance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user") ?? "{}");

    if (Object.keys(user).length !== 0) {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
    }

    return config;
  },
  async (error) => {
    return await Promise.reject(error);
  },
);

export { instance };
