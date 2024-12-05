import { api } from "@/lib/api";

import type { ICreateTaskResponse, TCreateTaskForm } from "../_types";

export const postCreateTask = async (data: TCreateTaskForm) => api.post<ICreateTaskResponse>("/tasks/create", data);
