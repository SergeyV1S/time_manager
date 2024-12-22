import type { IMatrixCell } from "@app/(root)/eisenhower-matrix/_types";
import { updateTaskUrhencyAndImportance } from "@app/(root)/eisenhower-matrix/action";
import type { ITask } from "@app/(root)/tasks/_types";
import { updateTaskStatusAction } from "@app/(root)/tasks/action";

import type { TTaskStoreActions } from "./types";

export const SET_TASKS = "SET_TASKS";
export const UPDATE_TASK_URGENCY_AND_IMPORTANCE = "UPDATE_TASK_URGENCY_AND_IMPORTANCE";
export const SET_SELECTED_TASK = "SET_SELECTED_TASK";
export const UPDATE_TASK_STATUS = "UPDATE_TASK_STATUS";

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

    dispatch({ type: SET_SELECTED_TASK, payload: null });
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
