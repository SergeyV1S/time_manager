/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { createTaskFormSchema } from "../_lib/createTaskFormSchema";
import type { TCreateTaskForm } from "../_types";
import { createTaskAction } from "../action";

export const useCreateTask = (userUid: string) => {
  const [isLoading, setIsLoading] = useState(false);

  const createTaskForm = useForm<TCreateTaskForm>({
    resolver: zodResolver(createTaskFormSchema),
    defaultValues: {
      body: "",
      category: undefined,
      userUid: userUid
    }
  });

  const createTask = async (data: TCreateTaskForm, tasksLenght: number) => {
    setIsLoading(true);
    try {
      const result = await createTaskAction(data, tasksLenght);

      if (result.status === 200) {
        toast({
          className: "bg-green-600 text-white hover:bg-green-500",
          title: "Задача успешно создана!"
        });
      }
    } catch (error: any) {
      toast({
        className: "bg-red-800 text-white hover:bg-red-700",
        title: "Не удалось создать задачу",
        description: `${error.response.data.message}`
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { createTask, createTaskForm, isLoading };
};
