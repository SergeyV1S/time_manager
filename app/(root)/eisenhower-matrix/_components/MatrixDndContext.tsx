"use client";

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { SET_SELECTED_TASK, SET_TASKS, updateTaskUrgencyAndImportanceActionCreator, useTaskStore } from "@/store/task";
import type { ITask } from "@app/(root)/tasks/_types";
import type { DragEndEvent, DragOverEvent, DragStartEvent } from "@dnd-kit/core";
import { DndContext, DragOverlay, PointerSensor, rectIntersection, useSensor, useSensors } from "@dnd-kit/core";
import { useEffect } from "react";

import { Spinner } from "@/components/ui";

import { matrixCell } from "../_constants";
import { selectTasksForUrgencyAndImportans } from "../_lib/selectTasksForUrgencyAndImportans";
import type { IMatrixCell } from "../_types";
import { MatrixCell } from "./MatrixCell";
import { MatrixTaskItem } from "./MatrixTaskItem";

export const MatrixDndContext = ({ tasks }: { tasks: ITask[] }) => {
  const { selectedTask, storedTasks, dispatch } = useTaskStore((state) => state);

  useEffect(() => dispatch({ type: SET_TASKS, payload: tasks }), []);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = async (e: DragEndEvent) => {
    if (!e.over) {
      return;
    }

    const overElement = e.over.data.current?.sortable
      ? (e.over.data.current.sortable.containerId as string)
      : (e.over.data.current as IMatrixCell);

    if (typeof overElement === "string") return;
    if (selectedTask) await updateTaskUrgencyAndImportanceActionCreator(selectedTask, overElement)(dispatch);
  };

  const handleDragOver = async (e: DragOverEvent) => {
    if (!e.over) {
      return;
    }

    const overElement = e.over.data.current?.sortable
      ? (e.over.data.current.sortable.containerId as string)
      : (e.over.data.current as IMatrixCell);

    if (typeof overElement === "string") return;
  };

  const handleDragStart = (e: DragStartEvent) =>
    dispatch({ type: SET_SELECTED_TASK, payload: storedTasks.find((task) => task.uid === e.active.id)! });

  if (tasks.length > 0 && storedTasks.length === 0) return <Spinner />;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={rectIntersection}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
    >
      {matrixCell.map((cell, index) => (
        <MatrixCell
          cell={cell}
          tasks={selectTasksForUrgencyAndImportans(storedTasks, cell.urgency, cell.importance)}
          key={index}
        />
      ))}
      <DragOverlay>{selectedTask ? <MatrixTaskItem {...selectedTask!} /> : null}</DragOverlay>
    </DndContext>
  );
};
