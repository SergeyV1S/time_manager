import { cn } from "@/lib/utils";
import { DeleteTask } from "@app/(root)/tasks/_components/DeleteTask";
import type { ITask } from "@app/(root)/tasks/_types";
import { updateTaskStatusAction } from "@app/(root)/tasks/action";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Check } from "lucide-react";

import { Label } from "@/components/ui";

export const MatrixTaskItem = ({ uid, body, isComplete }: ITask) => {
  const updateTaskStatus = async () => updateTaskStatusAction(uid, !isComplete);

  const handleStopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const { listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: uid });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "w-full grid grid-cols-[1fr_20px] cursor-default items-center text-sm px-6 py-4 hover:bg-blue-50 dark:hover:bg-slate-900",
        isComplete && "opacity-60",
        isDragging ? "cursor-grabbing" : "cursor-grab"
      )}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      {...listeners}
    >
      <div className='flex items-center space-x-2 relative'>
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
      </div>
      <div className='text-end'>
        <DeleteTask taskUid={uid} />
      </div>
    </div>
  );
};
