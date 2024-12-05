import type { z } from "zod";

import type { createTaskFormSchema } from "../_lib/createTaskFormSchema";

export type TCreateTaskForm = z.infer<typeof createTaskFormSchema>;

export interface ICreateTaskResponse {
  status: number;
}

export enum ETaskCategory {
  OCCUPATION = "OCCUPATION",
  HOBBY = "HOBBY",
  STUDY = "STUDY",
  HOMEWORK = "HOMEWORK"
}
