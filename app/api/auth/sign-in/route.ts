/* eslint-disable no-restricted-imports */
import prisma from "@/db";
import { createSession } from "@/lib/session";
import { compare } from "bcrypt";

import { NextResponse } from "next/server";

import type { TSignInRequest } from "../../../(auth)/auth/_types";

export const POST = async (req: Request) => {
  try {
    const body: TSignInRequest = await req.json();

    const user = await prisma.user.findFirst({
      where: { mail: body.mail }
    });

    if (!user) {
      return NextResponse.json({ error: "Пользователь с таким адресом электронной почты не существует", status: 404 });
    }

    const isPasswordEquals = await compare(body.password, user.password);

    if (!isPasswordEquals) {
      return NextResponse.json({ error: "Неверный пароль", status: 400 });
    }

    await createSession(user.uid, user.isAdmin, user.name);

    return NextResponse.json({ message: { name: user.name, isAdmin: user.isAdmin } }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(error);
    }
    return NextResponse.json({ error: "Неизвестная ошибка сервера", status: 500 });
  }
};
