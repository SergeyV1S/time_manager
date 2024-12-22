import type { ITask } from "@app/(root)/tasks/_types";

import type {
  DELETE_TASK,
  SET_SELECTED_TASK,
  SET_TASKS,
  UPDATE_TASK_POSITION,
  UPDATE_TASK_STATUS,
  UPDATE_TASK_URGENCY_AND_IMPORTANCE
} from "./actions";

export interface ITaskState {
  storedTasks: ITask[];
  selectedTask: ITask | null;
}

interface ISetTasksAction {
  type: typeof SET_TASKS;
  payload: ITask[];
}

interface ISetSelectedTaskAction {
  type: typeof SET_SELECTED_TASK;
  payload: ITask | null;
}

interface IUpdateTaskStatusAction {
  type: typeof UPDATE_TASK_STATUS;
  payload: {
    taskUid: string;
    isComplete: boolean;
  };
}

interface IDeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: string;
}

interface IUpdateTaskPositionAction {
  type: typeof UPDATE_TASK_POSITION;
  payload: ITask[];
}

interface IUpdateTaskUrgencyAndImportanceAction {
  type: typeof UPDATE_TASK_URGENCY_AND_IMPORTANCE;
  payload: ITask;
}

export type TTaskStoreActions =
  | ISetTasksAction
  | ISetSelectedTaskAction
  | IUpdateTaskStatusAction
  | IUpdateTaskUrgencyAndImportanceAction
  | IUpdateTaskPositionAction
  | IDeleteTaskAction;
