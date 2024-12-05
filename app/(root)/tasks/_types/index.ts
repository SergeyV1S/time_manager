import type { z } from "zod";

import type { createTaskFormSchema } from "../_lib/createTaskFormSchema";

export type TCreateTaskForm = z.infer<typeof createTaskFormSchema>;

export interface ICreateTaskResponse {
  status: number;
}

export interface ITask {
  uid: string;
  createdAt: Date;
  body: string;
  userUid: string;
  category: ETaskCategory;
}

export enum ETaskCategory {
  OCCUPATION = "OCCUPATION",
  HOBBY = "HOBBY",
  HOMEWORK = "HOMEWORK",
  STUDY = "STUDY"
}
