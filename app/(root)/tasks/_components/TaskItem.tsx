import { PencilIcon } from "lucide-react";

import { Button } from "@/components/ui";

import { DeleteTask } from "./DeleteTask";

interface ITaskItemProps {
  body: string;
  taskUid: string;
}

export const TaskItem = ({ body, taskUid }: ITaskItemProps) => (
  <div className='w-full grid grid-cols-[1fr_100px] items-center text-sm px-6 py-4 hover:bg-blue-50 dark:hover:bg-slate-900'>
    <p className='whitespace-nowrap flex items-center h-9'>{body}</p>
    <div className='text-end space-x-1'>
      <Button asChild variant='ghost' className='size-8 p-2'>
        <PencilIcon />
      </Button>
      <DeleteTask taskUid={taskUid} />
    </div>
  </div>
);
