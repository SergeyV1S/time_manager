import type { ISessionPayload } from "@/lib/session";
import { decrypt } from "@/lib/session";
import { PlusIcon } from "lucide-react";

import { cookies } from "next/headers";

import { Button } from "@/components/ui";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { CreateTaskForm } from "./_components/CreateTaskForm";
import { TaskItem } from "./_components/TaskItem";

const TasksPage = async () => {
  const cookie = (await cookies()).get("session")?.value || "";
  const session = (await decrypt(cookie)) as unknown as ISessionPayload;

  return (
    <main className='container flex min-h-svh flex-col items-center space-y-5 mt-20'>
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
          <CreateTaskForm userUid={session.uid} />
        </DialogContent>
      </Dialog>
      <div className='w-full max-w-[700px] divide-y divide-blue-300'>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </main>
  );
};

export default TasksPage;
