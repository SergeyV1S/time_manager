"use client";

import type { ITask } from "@app/(root)/tasks/_types";
import { DndContext } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

import { Card } from "@/components/ui/card";

import { MatrixTaskItem } from "./MatrixTaskItem";

interface IMatrixCellProps {
  tasks: ITask[];
}

export const MatrixCell = ({ tasks }: IMatrixCellProps) => {
  console.log(tasks);
  return (
    <DndContext>
      <Card
        className='p-3 max-h-[500px] h-[300px] relative overflow-y-auto 
      [&::-webkit-scrollbar]:w-1
      [&::-webkit-scrollbar-track]:rounded-full 
      [&::-webkit-scrollbar-track]:bg-slate-300 
      [&::-webkit-scrollbar-thumb]:bg-slate-500 
      [&::-webkit-scrollbar-thumb]:rounded-full 
      dark:[&::-webkit-scrollbar-track]:bg-slate-600 
      dark:[&::-webkit-scrollbar-thumb]:bg-slate-800'
      >
        <SortableContext strategy={verticalListSortingStrategy} items={tasks.map((task) => task.uid)}>
          {tasks.length > 0 ? (
            tasks.map((task) => <MatrixTaskItem {...task} key={task.uid} />)
          ) : (
            <p className='absolute translate-x-1/2 translate-y-1/2 bottom-1/2 right-1/2 text-sm'>Нет задач</p>
          )}
        </SortableContext>
      </Card>
    </DndContext>
  );
};
