import { api } from "@/lib/api";

import type { IAuthReasponse, TSignInRequest } from "../_lib/formSchemas";

export const postSignIn = async (data: TSignInRequest) => api.post<IAuthReasponse>("/auth/sign-in", data);
