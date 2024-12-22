import { createTaskActionCreator, useTaskStore } from "@/store/task";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { createTaskFormSchema } from "../_lib/createTaskFormSchema";
import type { TCreateTaskForm } from "../_types";

export const useCreateTask = (userUid: string) => {
  const { dispatch, isLoading } = useTaskStore((state) => state);

  const createTaskForm = useForm<TCreateTaskForm>({
    resolver: zodResolver(createTaskFormSchema),
    defaultValues: {
      body: "",
      category: undefined,
      userUid: userUid
    }
  });

  const createTask = (data: TCreateTaskForm, tasksLenght: number) =>
    createTaskActionCreator(data, tasksLenght)(dispatch);

  return { createTask, createTaskForm, isLoading };
};
