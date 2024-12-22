import db from "@/db";
import type { ISessionPayload } from "@/lib/session";
import { decrypt } from "@/lib/session";

import { cookies } from "next/headers";

import { CreateTask } from "./_components/CreateTask";
import { TasksWithFilter } from "./_components/TasksWithFilter";
import type { ITask } from "./_types";

const TasksPage = async () => {
  const cookie = (await cookies()).get("session")?.value || "";
  const session = (await decrypt(cookie)) as unknown as ISessionPayload;

  const tasks = (await db.task.findMany({ where: { userUid: session.uid }, orderBy: { position: "asc" } })) as ITask[];

  return (
    <main className='container flex min-h-svh flex-col items-center space-y-4 mt-20'>
      <TasksWithFilter tasks={tasks}>
        <CreateTask userUid={session.uid} />
      </TasksWithFilter>
    </main>
  );
};

export default TasksPage;
