/* eslint-disable no-restricted-imports */
import db from "@/db";
import { createSession } from "@/lib/session";
import { hash } from "bcrypt";

import { NextResponse } from "next/server";

import type { TRegisterRequest } from "../../../(auth)/auth/_types";

export const POST = async (req: Request) => {
  try {
    const body: TRegisterRequest = await req.json();

    const candidate = await db.user.findFirst({
      where: { mail: { equals: body.mail } }
    });

    if (candidate) {
      return NextResponse.json({ error: "Пользователь с таким адресом электронной почты уже существует", status: 409 });
    }

    const hashPassword = await hash(body.password, 10);

    const user = await db.user.create({ data: { ...body, password: hashPassword } });

    await createSession(user.uid, user.isAdmin, user.name);

    return NextResponse.json({ message: { name: user.name, isAdmin: user.isAdmin } }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(error);
    }
    return NextResponse.json({ error: "Неизвестная ошибка сервера", status: 500 });
  }
};
