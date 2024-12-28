"use client";

import { translateImportance, translateUrgency } from "@/lib/translateCategory";
import type { ITask } from "@app/(root)/tasks/_types";
import { useDroppable } from "@dnd-kit/core";
import { useState } from "react";

import { Card, CardFooter } from "@/components/ui/card";

import type { IMatrixCell } from "../_types";
import { MatrixTaskItem } from "./MatrixTaskItem";

interface IMatrixCellProps {
  tasks: ITask[];
  cell: IMatrixCell;
}

export const MatrixCell = ({ tasks, cell }: IMatrixCellProps) => {
  const { setNodeRef } = useDroppable({ id: cell.id, data: cell });
  const [cardFooterIsVisible, setCardFooterIsVisible] = useState(false);
  const onMouseEnterHandler = () => setCardFooterIsVisible(true);

  const onMouseLeaveHandler = () => setCardFooterIsVisible(false);

  return (
    <Card
      ref={setNodeRef}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      className='relative p-3 max-h-[500px] h-[300px] overflow-y-auto overflow-x-hidden
      [&::-webkit-scrollbar]:w-1
      [&::-webkit-scrollbar-track]:rounded-full 
      [&::-webkit-scrollbar-track]:bg-slate-300 
      [&::-webkit-scrollbar-thumb]:bg-slate-500 
      [&::-webkit-scrollbar-thumb]:rounded-full 
      dark:[&::-webkit-scrollbar-track]:bg-slate-600 
      dark:[&::-webkit-scrollbar-thumb]:bg-slate-800'
    >
      {tasks.length > 0 ? (
        tasks.map((task) => <MatrixTaskItem {...task} key={task.uid} />)
      ) : (
        <p className='absolute translate-x-1/2 translate-y-1/2 bottom-1/2 right-1/2 text-sm'>Нет задач</p>
      )}
      {cardFooterIsVisible && (
        <CardFooter className='absolute bottom-0 left-0 right-0'>
          <p>
            {translateImportance(cell.importance)}
            <span>/</span>
            {translateUrgency(cell.urgency)}
          </p>
        </CardFooter>
      )}
    </Card>
  );
};
