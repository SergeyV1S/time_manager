import db from "@/db";
import type { ISessionPayload } from "@/lib/session";
import { decrypt } from "@/lib/session";
import { PlusIcon } from "lucide-react";

import { cookies } from "next/headers";

import { Button } from "@/components/ui";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { CreateTaskForm } from "./_components/CreateTaskForm";
import { TasksWithFilter } from "./_components/TasksWithFilter";
import type { ITask } from "./_types";

const TasksPage = async () => {
  const cookie = (await cookies()).get("session")?.value || "";
  const session = (await decrypt(cookie)) as unknown as ISessionPayload;

  const tasks = (await db.task.findMany({ where: { userUid: session.uid }, orderBy: { position: "asc" } })) as ITask[];

  return (
    <main className='container flex min-h-svh flex-col items-center space-y-4 mt-20'>
      <TasksWithFilter tasks={tasks}>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant='ghost' size='icon'>
              <PlusIcon />
            </Button>
          </DialogTrigger>
          <DialogContent aria-describedby={undefined} className='sm:max-w-md'>
            <DialogHeader>
              <DialogTitle>Создание задачи</DialogTitle>
            </DialogHeader>
            <CreateTaskForm tasksLenght={tasks.length} userUid={session.uid} />
          </DialogContent>
        </Dialog>
      </TasksWithFilter>
    </main>
  );
};

export default TasksPage;
