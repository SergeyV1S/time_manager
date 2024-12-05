import { z } from "zod";

import { ETaskCategory } from "../_types";

export const createTaskFormSchema = z.object({
  body: z.string().min(1, "Поле не может быть пустым"),
  category: z
    .enum([ETaskCategory.HOBBY, ETaskCategory.HOMEWORK, ETaskCategory.OCCUPATION, ETaskCategory.STUDY])
    .optional(),
  userUid: z.string().min(1)
});
