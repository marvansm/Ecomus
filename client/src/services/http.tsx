import axios, { type AxiosInstance } from "axios";

class ApiServices {
  axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 5000,
    });

    // Request Interceptor: Her istekte token kontrolü yap ve başlığa ekle
    this.axiosInstance.interceptors.request.use(
      (config) => {
        if (typeof window !== "undefined") {
          const token = localStorage.getItem("userToken");
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }

  async getData(url: string): Promise<any> {
    const res = await this.axiosInstance.get(url);
    return res.data;
  }

  async PostData(url: string, payload: any): Promise<any> {
    const res = await this.axiosInstance.post(url, payload);
    return res.data;
  }
}

export default ApiServices;
