"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */
import db from "@/db";

import { revalidatePath } from "next/cache";

import type { ITask, TCreateTaskForm } from "./_types";

export const createTaskAction = async (body: TCreateTaskForm, tasksLenght: number) => {
  try {
    await db.task.create({
      data: {
        body: body.body,
        category: body.category,
        userUid: body.userUid,
        description: body.description || "",
        importance: body.importance,
        urgency: body.urgency,
        position: tasksLenght
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

export const updateTaskStatusAction = async (taskUid: string, isComplete: boolean) => {
  try {
    await db.task.update({ data: { isComplete: isComplete }, where: { uid: taskUid } });

    revalidatePath("/tasks");
  } catch (error: any) {
    return error;
  }
};

export const updateTaskPositionAction = async (taskPositions: ITask[]) => {
  try {
    const updatePromises = taskPositions.map((task) =>
      db.task.update({
        where: { uid: task.uid },
        data: { position: task.position }
      })
    );

    await Promise.all(updatePromises);

    revalidatePath("/tasks");
  } catch (error: any) {
    return error;
  }
};
