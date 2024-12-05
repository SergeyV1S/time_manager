/* eslint-disable @typescript-eslint/no-non-null-assertion */
import db from "@/db";
import { paths } from "@/lib/constants";
import type { TCreateTaskForm } from "@app/(root)/tasks/_types";

import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body: TCreateTaskForm = await req.json();

    await db.task.create({
      data: {
        body: body.body,
        category: body.category!,
        userUid: body.userUid
      }
    });

    revalidatePath(paths.TASKS);

    return NextResponse.json({ status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(error);
    }

    return NextResponse.json({ error: "Неизвестная ошибка сервера" }, { status: 500 });
  }
};
