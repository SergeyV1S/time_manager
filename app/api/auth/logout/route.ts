import { deleteSession } from "@/lib/session";

import { NextResponse } from "next/server";

export const POST = async () => {
  try {
    await deleteSession();

    return NextResponse.json({ message: "Вы успешно вышли из аккаунта!" }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(error);
    }

    return NextResponse.json({ error: "Неизвестная ошибка сервера" }, { status: 500 });
  }
};
