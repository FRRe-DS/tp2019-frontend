import axios, { AxiosInstance } from "axios";

const Instance = {

  axiosInstance(timeout?: number, baseUrl?: string): AxiosInstance {
    const instance = axios.create({
      baseURL: baseUrl || this.getBaseUrl(),
      timeout: timeout || 5000,
      headers: { "Content-Type": "application/json" }
    });
    instance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
    return instance;
  },

  /** Base base web app URL */
  getBaseUrl(): string | undefined {
    return process.env.VUE_APP_ROOT_API;
  }
};

export default Instance;
