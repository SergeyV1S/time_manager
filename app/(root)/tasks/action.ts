"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */
import db from "@/db";

import { revalidatePath } from "next/cache";

import type { ETaskCategory, TCreateTaskForm } from "./_types";

export const createTaskAction = async (body: TCreateTaskForm) => {
  try {
    await db.task.create({
      data: {
        body: body.body,
        category: body.category as ETaskCategory,
        userUid: body.userUid
      }
    });

    revalidatePath("/tasks");

    return { status: 200 };
  } catch (error: any) {
    return error;
  }
};

export const deleteTaskAction = async (taskUid: string) => {
  try {
    await db.task.delete({ where: { uid: taskUid } });

    revalidatePath("/tasks");

    return { status: 200 };
  } catch (error: any) {
    return error;
  }
};
