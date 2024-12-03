import { api } from "@/lib/api";

export interface ILogoutResponse {
  message: string;
  status: number;
}

export const postLogout = () => api.post<ILogoutResponse>("/auth/logout");
