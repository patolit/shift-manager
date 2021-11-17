interface SuccessApiResponse<T> {
  success: true;
  payload: T;
}

interface FailureApiResponse {
  success: false;
  error: Error;
}

export type { SuccessApiResponse, FailureApiResponse };
