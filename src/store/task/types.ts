import type { ITask } from "@app/(root)/tasks/_types";

import type {
  CREATE_TASK,
  DELETE_TASK,
  SET_IS_LOADING,
  SET_SELECTED_TASK,
  SET_TASKS,
  TOGGLE_MODAL,
  UPDATE_TASK_POSITION,
  UPDATE_TASK_STATUS,
  UPDATE_TASK_URGENCY_AND_IMPORTANCE
} from "./actions";

export interface ITaskState {
  storedTasks: ITask[];
  selectedTask: ITask | null;
  isModalOpen: boolean;
  isLoading: boolean;
}

interface ISetTasksAction {
  type: typeof SET_TASKS;
  payload: ITask[];
}

interface IToggleModalTaskAction {
  type: typeof TOGGLE_MODAL;
  payload: boolean;
}

interface ISetIsLoadingTaskAction {
  type: typeof SET_IS_LOADING;
  payload: boolean;
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

interface ICreateTaskAction {
  type: typeof CREATE_TASK;
  payload: ITask;
}

export type TTaskStoreActions =
  | ISetTasksAction
  | ISetSelectedTaskAction
  | IToggleModalTaskAction
  | IUpdateTaskStatusAction
  | ISetIsLoadingTaskAction
  | IUpdateTaskUrgencyAndImportanceAction
  | ICreateTaskAction
  | IUpdateTaskPositionAction
  | IDeleteTaskAction;
