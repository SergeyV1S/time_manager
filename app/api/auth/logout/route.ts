import { deleteSession } from "@/lib/session";

import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const POST = () => {
  try {
    deleteSession();
    redirect("/login");

    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(error);
    }
    return NextResponse.json({ error: "Неизвестная ошибка сервера" }, { status: 500 });
  }
};
