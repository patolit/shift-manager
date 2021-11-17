import axios, { AxiosError } from "axios";
import {
  FailureApiResponse,
  SuccessApiResponse,
} from "../../types/ApiResponse";

const api = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 20000,
});

async function wrapApiCall<T>(apiCall: () => Promise<T>) {
  try {
    const data = await apiCall();
    return {
      success: true,
      payload: data,
    } as SuccessApiResponse<T>;
  } catch (error) {
    const errorData = (error as AxiosError).response?.data;
    return {
      success: false,
      error: new Error(errorData.message),
    } as FailureApiResponse;
  }
}

export { api, wrapApiCall };
