"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */
import db from "@/db";

import type { ETaskImportance, ETaskUrgency } from "../tasks/_types";

export const updateTaskUrhencyAndImportance = async (
  taskUid: string,
  urgency: ETaskUrgency,
  importance: ETaskImportance
) => {
  try {
    await db.task.update({
      data: {
        importance: importance,
        urgency: urgency
      },
      where: { uid: taskUid }
    });

    return { status: 200 };
  } catch (error: any) {
    return error;
  }
};
