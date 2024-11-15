import { API_ENDPOINT } from "@/constants";

type CustomRequestInit = Omit<RequestInit, "method" | "body"> & {
  data?: object;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
};

type APISuccessResponse<T> = {
  error?: null;
  data: T;
};

type APIFailedResponse = {
  error: { message: string };
  data?: null;
};

type APIResponse<T> = APISuccessResponse<T> | APIFailedResponse;

class APIClient {
  private static _apiClient: APIClient;

  private constructor() {}

  public static get apiClient(): APIClient {
    if (!this._apiClient) {
      this._apiClient = new APIClient();
    }

    return this._apiClient;
  }

  private async apiRequest<T = object>(
    url: string,
    option?: CustomRequestInit
  ): Promise<APIResponse<T>> {
    const { method = "GET", data = null, headers = {} } = option || {};

    let customOption = { ...option } as RequestInit;

    if (!!data && ["PUT", "POST", "PATCH"].includes(method)) {
      customOption = {
        ...customOption,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      };
    }
    try {
      const response = await fetch(`${API_ENDPOINT}/${url}`, customOption);
      const data = await response.json();
      return { data: (data.data || data) as T };
    } catch (error) {
      const message =
        (error as Error)?.message || `Failed to ${method} on ${url}!`;

      return {
        error: {
          message,
        },
      };
    }
  }

  public get<T = object>(url: string, option?: CustomRequestInit) {
    return this.apiRequest<T>(url, option);
  }

  public post<T = object>(url: string, option: CustomRequestInit) {
    return this.apiRequest<T>(url, { ...option, method: "POST" });
  }

  public patch<T = object>(url: string, option: CustomRequestInit) {
    return this.apiRequest<T>(url, { ...option, method: "PATCH" });
  }

  public put<T = object>(url: string, option: CustomRequestInit) {
    return this.apiRequest<T>(url, { ...option, method: "PUT" });
  }

  public delete<T = object>(url: string, option: CustomRequestInit) {
    return this.apiRequest<T>(url, { ...option, method: "DELETE" });
  }
}

export const apiClient = APIClient.apiClient;
