import { SET_SELECTED_TASK, SET_TASKS, UPDATE_TASK_URGENCY_AND_IMPORTANCE } from "./actions";
import type { ITaskState, TTaskStoreActions } from "./types";

export const eisenhowerMatrixReducer = (state: ITaskState, action: TTaskStoreActions): ITaskState => {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, storedTasks: action.payload };
    case SET_SELECTED_TASK:
      return { ...state, selectedTask: action.payload };
    case UPDATE_TASK_URGENCY_AND_IMPORTANCE:
      return {
        ...state,
        storedTasks: state.storedTasks.map((task) =>
          task.uid === action.payload.uid ? { ...task, ...action.payload } : task
        )
      };

    default:
      return state;
  }
};
