import type { IMatrixCell } from "@app/(root)/eisenhower-matrix/_types";
import { updateTaskUrhencyAndImportance } from "@app/(root)/eisenhower-matrix/action";
import { reorderTasks } from "@app/(root)/tasks/_lib/reorderTask";
import type { ITask } from "@app/(root)/tasks/_types";
import { deleteTaskAction, updateTaskPositionAction, updateTaskStatusAction } from "@app/(root)/tasks/action";
import type { UniqueIdentifier } from "@dnd-kit/core";

import type { TTaskStoreActions } from "./types";

export const SET_TASKS = "SET_TASKS";
export const UPDATE_TASK_URGENCY_AND_IMPORTANCE = "UPDATE_TASK_URGENCY_AND_IMPORTANCE";
export const SET_SELECTED_TASK = "SET_SELECTED_TASK";
export const UPDATE_TASK_STATUS = "UPDATE_TASK_STATUS";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK_POSITION = "UPDATE_TASK_POSITION";

export const updateTaskPositionActionCreator =
  (tasks: ITask[], activeId: UniqueIdentifier, overId: UniqueIdentifier | undefined) =>
  async (dispatch: (action: TTaskStoreActions) => void) => {
    const oldIndex = tasks.findIndex((task) => task.uid === activeId);
    const newIndex = tasks.findIndex((task) => task.uid === overId);

    const reorderedTasks = reorderTasks(tasks, oldIndex, newIndex);

    dispatch({
      type: UPDATE_TASK_POSITION,
      payload: reorderedTasks
    });

    await updateTaskPositionAction(reorderedTasks);
  };

export const updateTaskStatusActionCreator =
  (taskUid: string, isComplete: boolean) => async (dispatch: (action: TTaskStoreActions) => void) => {
    dispatch({
      type: UPDATE_TASK_STATUS,
      payload: {
        taskUid: taskUid,
        isComplete: isComplete
      }
    });

    await updateTaskStatusAction(taskUid, isComplete);
  };

export const deleteTaskActionCreator = (taskUid: string) => async (dispatch: (action: TTaskStoreActions) => void) => {
  dispatch({
    type: DELETE_TASK,
    payload: taskUid
  });

  await deleteTaskAction(taskUid);
};

export const updateTaskUrgencyAndImportanceActionCreator =
  (selectedTask: ITask, overElement: IMatrixCell) => async (dispatch: (action: TTaskStoreActions) => void) => {
    if (selectedTask.urgency === overElement.urgency && selectedTask.importance === overElement.importance) return;
    dispatch({
      type: UPDATE_TASK_URGENCY_AND_IMPORTANCE,
      payload: {
        ...selectedTask,
        urgency: overElement.urgency,
        importance: overElement.importance
      }
    });

    await updateTaskUrhencyAndImportance(selectedTask.uid, overElement.urgency, overElement.importance);

    dispatch({ type: SET_SELECTED_TASK, payload: null });
  };
