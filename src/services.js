import axios from "axios";

const axiosInstance = axios.create({
  baseUrl: "http://localhost:3000"
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  }
};
