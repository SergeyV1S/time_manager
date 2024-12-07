import { z } from "zod";

import { ETaskCategory, ETaskImportance, ETaskUrgency } from "../_types";

export const createTaskFormSchema = z.object({
  body: z.string().min(1, "Поле не может быть пустым"),
  category: z.enum([ETaskCategory.HOBBY, ETaskCategory.HOMEWORK, ETaskCategory.OCCUPATION, ETaskCategory.STUDY]),
  importance: z.enum([ETaskImportance.IMPORTANT, ETaskImportance.NO_MATTER]),
  urgency: z.enum([ETaskUrgency.URGENTLY, ETaskUrgency.NO_TURGENTLY]),
  description: z.string().optional(),
  userUid: z.string().min(1)
});
