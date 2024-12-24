import db from "@/db";
import { decrypt } from "@/lib/session";
import type { ISessionPayload } from "@/lib/session";

import { cookies } from "next/headers";

import { Card } from "@/components/ui/card";

import type { ITask } from "../tasks/_types";
import { MatrixDndContext } from "./_components";

const EisenhowerMatrixPage = async () => {
  const cookie = (await cookies()).get("session")?.value || "";
  const session = (await decrypt(cookie)) as unknown as ISessionPayload;

  const tasks = (await db.task.findMany({ where: { userUid: session.uid }, orderBy: { position: "asc" } })) as ITask[];

  return (
    <main className='container flex min-h-svh mt-12'>
      <Card className='w-full min-h-[670px] h-fit grid grid-cols-2 gap-5 p-5 relative'>
        <MatrixDndContext tasks={tasks} />
      </Card>
    </main>
  );
};

export default EisenhowerMatrixPage;
