import type { ITask } from "@app/(root)/tasks/_types";

import type { SET_SELECTED_TASK, SET_TASKS, UPDATE_TASK_URGENCY_AND_IMPORTANCE } from "./actions";

export interface IMatrixState {
  storedTasks: ITask[];
  selectedTask: ITask | null;
}

interface ISetTasksActions {
  type: typeof SET_TASKS;
  payload: ITask[];
}

interface ISetSelectedTaskActions {
  type: typeof SET_SELECTED_TASK;
  payload: ITask | null;
}

interface IUpdateTaskUrgencyAndImportanceActions {
  type: typeof UPDATE_TASK_URGENCY_AND_IMPORTANCE;
  payload: ITask;
}

export type TEisenhowerMatrixStoreActions =
  | ISetTasksActions
  | ISetSelectedTaskActions
  | IUpdateTaskUrgencyAndImportanceActions;
