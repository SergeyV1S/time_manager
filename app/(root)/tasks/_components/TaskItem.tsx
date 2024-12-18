import { DragIcon } from "@/icons";
import { translateCategory, translateImportance, translateUrgency } from "@/lib/translateCategory";
import { cn } from "@/lib/utils";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Check, PencilIcon } from "lucide-react";

import { Button, HoverCard, HoverCardContent, HoverCardTrigger, Label } from "@/components/ui";

import type { ITask } from "../_types";
import { updateTaskStatusAction } from "../action";
import { DeleteTask } from "./DeleteTask";

export const TaskItem = ({ uid, body, category, isComplete, urgency, importance }: ITask) => {
  const updateTaskStatus = async () => updateTaskStatusAction(uid, !isComplete);

  const handleStopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const { listeners, setNodeRef, transform, transition } = useSortable({ id: uid });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "w-full grid grid-cols-[1fr_100px] cursor-default items-center text-sm px-6 py-4 hover:bg-blue-50 dark:hover:bg-slate-900",
        isComplete && "opacity-60"
      )}
      style={{ transform: CSS.Transform.toString(transform), transition }}
    >
      <div className='flex items-center space-x-2 relative'>
        <DragIcon {...listeners} />
        <HoverCard closeDelay={50} openDelay={200}>
          <HoverCardTrigger className='w-full'>
            <Label
              onClick={handleStopPropagation}
              htmlFor={uid}
              className='whitespace-nowrap relative pl-6 flex items-center gap-2 h-9 cursor-pointer'
            >
              <input
                type='checkbox'
                className='hidden peer'
                onClick={handleStopPropagation}
                defaultChecked={isComplete}
                onChange={updateTaskStatus}
                id={uid}
              />
              <span className='absolute border cursor-pointer border-slate-900 dark:border-slate-50 rounded-sm bg-slate-50 h-4 w-4 left-0 dark:bg-slate-950 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:dark:bg-slate-50'>
                <Check className='text-slate-50 dark:text-slate-950' />
              </span>
              <span className={isComplete ? "line-through" : ""}>{body}</span>
            </Label>
          </HoverCardTrigger>
          <HoverCardContent className='grid grid-cols-2 grid-rows-2 gap-2 text-center py-2'>
            <p className='col-span-2 text-sm'>{translateCategory(category)}</p>
            <p>{translateUrgency(urgency)}</p>
            <p>{translateImportance(importance)}</p>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className='text-end space-x-1'>
        <Button asChild variant='ghost' className='size-8 p-2 cursor-pointer' onClick={handleStopPropagation}>
          <PencilIcon />
        </Button>
        <DeleteTask taskUid={uid} />
      </div>
    </div>
  );
};
