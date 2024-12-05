import { PencilIcon, TrashIcon } from "lucide-react";

import { Button } from "@/components/ui";

interface ITaskItemProps {
  body: string;
}

export const TaskItem = ({ body }: ITaskItemProps) => (
  <div className='w-full grid grid-cols-[1fr_100px] items-center text-sm px-6 py-4 hover:bg-blue-50 dark:hover:bg-slate-900'>
    <p className='whitespace-nowrap flex items-center h-9'>{body}</p>
    <div className='text-end space-x-2'>
      <Button variant='ghost' size='icon'>
        <PencilIcon />
      </Button>
      <Button variant='ghost' size='icon' className='hover:bg-red-600 hover:dark:bg-red-600'>
        <TrashIcon />
      </Button>
    </div>
  </div>
);
