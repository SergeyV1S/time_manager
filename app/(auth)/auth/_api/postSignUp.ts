import { api } from "@/lib/api";

import type { TRegisterRequest } from "../_lib/formSchemas";

export const postSignUp = (data: TRegisterRequest) => api.post("/auth/register", data);
