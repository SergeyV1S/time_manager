"use client";

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { cn } from "@/lib/utils";
import {
  SET_SELECTED_TASK,
  UPDATE_TASK_URGENCY_AND_IMPORTANCE,
  updateTaskStatusActionCreator,
  updateTaskUrgencyAndImportanceActionCreator,
  useTaskStore
} from "@/store/task";
import { DeleteTask } from "@app/(root)/tasks/_components/DeleteTask";
import type { ITask } from "@app/(root)/tasks/_types";
import { useDndMonitor, useDraggable } from "@dnd-kit/core";
import { Check } from "lucide-react";

import { Label } from "@/components/ui";

import type { IMatrixCell } from "../_types";

export const MatrixTaskItem = ({ uid, body, isComplete }: ITask) => {
  const updateTaskStatus = async () => await updateTaskStatusActionCreator(uid, !isComplete)(dispatch);
  const { selectedTask, storedTasks, dispatch } = useTaskStore((state) => state);

  const handleStopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const { listeners, setNodeRef, isDragging } = useDraggable({ id: uid });
  useDndMonitor({
    onDragStart(event) {
      const element = event.active?.data?.current?.node as HTMLElement | null;
      if (element?.closest("[data-dnd-disable]")) {
        event.active.data.current!.cancelled = true;
      }
      dispatch({ type: SET_SELECTED_TASK, payload: storedTasks.find((task) => task.uid === event.active.id)! });
    },
    onDragMove(event) {
      if (event.active?.data?.current?.cancelled) {
        return;
      }
    },
    onDragOver(e) {
      if (!e.over) {
        return;
      }

      const overElement = e.over.data.current?.sortable
        ? (e.over.data.current.sortable.containerId as string)
        : (e.over.data.current as IMatrixCell);

      if (typeof overElement === "string") return;

      if (selectedTask)
        dispatch({
          type: UPDATE_TASK_URGENCY_AND_IMPORTANCE,
          payload: {
            ...selectedTask,
            urgency: overElement.urgency,
            importance: overElement.importance
          }
        });
    },
    async onDragEnd(e) {
      if (!e.over) {
        return;
      }

      const overElement = e.over.data.current?.sortable
        ? (e.over.data.current.sortable.containerId as string)
        : (e.over.data.current as IMatrixCell);

      if (typeof overElement === "string") return;
      if (selectedTask) await updateTaskUrgencyAndImportanceActionCreator(selectedTask, overElement)(dispatch);
    }
  });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "w-full grid grid-cols-[1fr_20px] cursor-default items-center text-sm px-6 py-4 hover:bg-blue-50 dark:hover:bg-slate-900",
        isComplete && "opacity-60",
        isDragging ? "cursor-grabbing" : "cursor-grab"
      )}
      {...listeners}
    >
      <Label
        onClick={handleStopPropagation}
        htmlFor={uid}
        className='relative inline-flex items-center gap-2 h-9 cursor-pointer'
      >
        <input
          type='checkbox'
          className='hidden peer hover:pointer-events-auto'
          defaultChecked={isComplete}
          onChange={(e) => {
            e.stopPropagation();
            updateTaskStatus();
          }}
          id={uid}
          data-dnd-disable
        />
        <span className='absolute border cursor-pointer border-slate-900 dark:border-slate-50 rounded-sm bg-slate-50 h-4 w-4 left-0 dark:bg-slate-950 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:dark:bg-slate-50'>
          <Check className='text-slate-50 dark:text-slate-950' />
        </span>
        <span
          className={cn(isComplete ? "line-through" : "", "truncate absolute left-6")}
          style={{ maxWidth: "calc(100% - 32px)" }}
        >
          {body}
        </span>
      </Label>
      <DeleteTask taskUid={uid} />
    </div>
  );
};
