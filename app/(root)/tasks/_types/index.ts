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
  isComplete: boolean;
  category: ETaskCategory;
  description: string;
  importance: ETaskImportance;
  urgency: ETaskUrgency;
}

export enum ETaskImportance {
  IMPORTANT = "IMPORTANT",
  NO_MATTER = "NOMATTER"
}

export enum ETaskUrgency {
  URGENTLY = "URGENTLY",
  NO_TURGENTLY = "NOTURGENTLY"
}

export enum ETaskCategory {
  OCCUPATION = "OCCUPATION",
  HOBBY = "HOBBY",
  HOMEWORK = "HOMEWORK",
  STUDY = "STUDY"
}
