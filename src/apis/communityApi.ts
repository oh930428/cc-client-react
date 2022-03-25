import axios, { AxiosError } from "axios";

export const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

serverApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error?.response?.data);
  }
);

export const getAllCommunity = async () => {
  return await serverApi
    .get("/communities")
    .then((res) => res.data.data)
    .catch((err) => {
      console.error(err);
    });
};
