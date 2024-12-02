import { api } from "@/lib/api";

import type { IAuthReasponse, TSignInRequest } from "../_types";

export const postSignIn = async (data: TSignInRequest) => api.post<IAuthReasponse>("/auth/sign-in", data);
