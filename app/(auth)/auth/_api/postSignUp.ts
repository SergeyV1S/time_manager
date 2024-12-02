import { api } from "@/lib/api";

import type { IAuthReasponse, TRegisterRequest } from "../_lib/formSchemas";

export const postSignUp = async (data: TRegisterRequest) => api.post<IAuthReasponse>("/auth/register", data);
