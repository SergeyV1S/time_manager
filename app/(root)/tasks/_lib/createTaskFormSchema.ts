import { z } from "zod";

export const createTaskFormSchema = z.object({
  body: z.string().min(1, "Поле не может быть пустым"),
  category: z.string().min(1, "Поле не может быть пустым"),
  userUid: z.string().min(1)
});
