/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "@/hooks/use-toast";
import { signInFormSchema } from "@app/(auth)/auth/_lib/formSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { revalidatePath } from "next/cache";

import { postCreateTask } from "../_api/postCreateTask";
import type { TCreateTaskForm } from "../_types";

export const useCreateTask = (userUid: string) => {
  const [isLoading, setIsLoading] = useState(false);

  const createTaskForm = useForm<TCreateTaskForm>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      body: "",
      category: "",
      userUid: userUid
    }
  });

  const createTask = async (data: TCreateTaskForm) => {
    setIsLoading(true);
    try {
      const result = await postCreateTask(data);

      if (result.data.status === 200) {
        toast({
          className: "bg-green-600 text-white hover:bg-green-500",
          title: "Задача успешно создана!"
        });

        revalidatePath("/api/tasks");
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
