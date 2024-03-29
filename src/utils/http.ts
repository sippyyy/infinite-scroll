import axios, { AxiosInstance } from "axios";

export class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
      timeout: 10000,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

const http = new Http().instance;
export default http;