import { cn } from "@/lib/utils";
import { Check, PencilIcon } from "lucide-react";

import { Button, Label } from "@/components/ui";

import { updateTaskStatusAction } from "../action";
import { DeleteTask } from "./DeleteTask";

interface ITaskItemProps {
  body: string;
  taskUid: string;
  isComplete: boolean;
}

export const TaskItem = ({ body, taskUid, isComplete }: ITaskItemProps) => {
  const updateTaskStatus = async () => updateTaskStatusAction(taskUid, !isComplete);

  const handleStopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      className={cn(
        "w-full grid grid-cols-[1fr_100px] cursor-default items-center text-sm px-6 py-4 hover:bg-blue-50 dark:hover:bg-slate-900",
        isComplete && "opacity-60"
      )}
    >
      <div className='flex items-center space-x-2'>
        <Label
          onClick={handleStopPropagation}
          htmlFor={taskUid}
          className='whitespace-nowrap relative pl-6 flex items-center gap-2 h-9 cursor-pointer'
        >
          <input
            type='checkbox'
            className='hidden peer'
            onClick={handleStopPropagation}
            defaultChecked={isComplete}
            onChange={updateTaskStatus}
            id={taskUid}
          />
          <span className='absolute border cursor-pointer border-slate-900 dark:border-slate-50 rounded-sm bg-slate-50 h-4 w-4 left-0 dark:bg-slate-950 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:dark:bg-slate-50'>
            <Check className='text-slate-50 dark:text-slate-950' />
          </span>
          <span className={isComplete ? "line-through" : ""}>{body}</span>
        </Label>
      </div>
      <div className='text-end space-x-1'>
        <Button asChild variant='ghost' className='size-8 p-2 cursor-pointer' onClick={handleStopPropagation}>
          <PencilIcon />
        </Button>
        <DeleteTask taskUid={taskUid} />
      </div>
    </div>
  );
};
