"use client";

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { ITask } from "@app/(root)/tasks/_types";
import type { DragEndEvent, DragOverEvent, DragStartEvent } from "@dnd-kit/core";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  rectIntersection,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useEffect } from "react";

import { matrixCell } from "../_constants";
import { selectTasksForUrgencyAndImportans } from "../_lib/selectTasksForUrgencyAndImportans";
import {
  SET_SELECTED_TASK,
  SET_TASKS,
  updateTaskUrgencyAndImportanceActionCreater,
  useEisenhowerMatrixStore
} from "../_store";
import type { IMatrixCell } from "../_types";
import { MatrixCell } from "./MatrixCell";
import { MatrixTaskItem } from "./MatrixTaskItem";

export const MatrixDndContext = ({ tasks }: { tasks: ITask[] }) => {
  const { selectedTask, storedTasks, dispatch } = useEisenhowerMatrixStore((state) => state);

  useEffect(() => dispatch({ type: SET_TASKS, payload: tasks }), []);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const handleDragEnd = async (e: DragEndEvent) => {
    if (!e.over) {
      return;
    }

    const overElement = e.over.data.current?.sortable
      ? (e.over.data.current.sortable.containerId as string)
      : (e.over.data.current as IMatrixCell);

    if (typeof overElement === "string") return;
    if (selectedTask) await updateTaskUrgencyAndImportanceActionCreater(selectedTask, overElement)(dispatch);
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
      {/* {storedTasks.length > 0 ? (
        matrixCell.map((cell, index) => (
          <MatrixCell
            cell={cell}
            tasks={selectTasksForUrgencyAndImportans(storedTasks, cell.urgency, cell.importance)}
            key={index}
          />
        ))
      ) : (
        <Spinner />
      )} */}
      <DragOverlay>{selectedTask ? <MatrixTaskItem {...selectedTask!} /> : null}</DragOverlay>
    </DndContext>
  );
};
