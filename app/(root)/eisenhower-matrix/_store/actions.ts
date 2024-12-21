import type { ITask } from "@app/(root)/tasks/_types";

import type { IMatrixCell } from "../_types";
import { updateTaskUrhencyAndImportance } from "../action";
import type { TEisenhowerMatrixStoreActions } from "./types";

export const SET_TASKS = "SET_TASKS";
export const UPDATE_TASK_URGENCY_AND_IMPORTANCE = "UPDATE_TASK_URGENCY_AND_IMPORTANCE";
export const SET_SELECTED_TASK = "SET_SELECTED_TASK";

export const updateTaskUrgencyAndImportanceActionCreater =
  (selectedTask: ITask, overElement: IMatrixCell) =>
  async (dispatch: (action: TEisenhowerMatrixStoreActions) => void) => {
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
