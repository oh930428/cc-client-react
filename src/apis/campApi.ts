import axios, { AxiosError } from "axios";
import { SERVER_URL } from "constants/env";

export const serverApi = axios.create({
  baseURL: SERVER_URL,
});

serverApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error?.response?.data);
  }
);

export const getCampsByType = async (type: string) => {
  return await serverApi
    .get(`/camps?type=${type}`)
    .then((res) => res.data.data)
    .catch((err) => {
      console.error(err);
    });
};
