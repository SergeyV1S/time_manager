"use client";

import { SET_TASKS, useTaskStore } from "@/store/task";
import type { ITask } from "@app/(root)/tasks/_types";
import { DndContext, DragOverlay, PointerSensor, rectIntersection, useSensor, useSensors } from "@dnd-kit/core";
import { useEffect } from "react";

import { Spinner } from "@/components/ui";

import { matrixCell } from "../_constants";
import { selectTasksForUrgencyAndImportans } from "../_lib/selectTasksForUrgencyAndImportans";
import { MatrixCell } from "./MatrixCell";
import { MatrixTaskItem } from "./MatrixTaskItem";

export const MatrixDndContext = ({ tasks }: { tasks: ITask[] }) => {
  const { selectedTask, storedTasks, dispatch } = useTaskStore((state) => state);

  useEffect(() => dispatch({ type: SET_TASKS, payload: tasks }), []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5
      }
    })
  );

  if (tasks.length > 0 && storedTasks.length === 0) return <Spinner />;

  return (
    <DndContext sensors={sensors} collisionDetection={rectIntersection}>
      {matrixCell.map((cell, index) => (
        <MatrixCell
          cell={cell}
          tasks={selectTasksForUrgencyAndImportans(storedTasks, cell.urgency, cell.importance)}
          key={index}
        />
      ))}
      <DragOverlay>{selectedTask ? <MatrixTaskItem {...selectedTask} /> : null}</DragOverlay>
    </DndContext>
  );
};
