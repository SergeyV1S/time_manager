import {
  DELETE_TASK,
  SET_SELECTED_TASK,
  SET_TASKS,
  UPDATE_TASK_POSITION,
  UPDATE_TASK_STATUS,
  UPDATE_TASK_URGENCY_AND_IMPORTANCE
} from "./actions";
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
    case UPDATE_TASK_STATUS:
      return {
        ...state,
        storedTasks: state.storedTasks.map((task) =>
          task.uid === action.payload.taskUid ? { ...task, isComplete: action.payload.isComplete } : task
        )
      };

    case UPDATE_TASK_POSITION:
      return {
        ...state,
        storedTasks: action.payload
      };
    case DELETE_TASK:
      return {
        ...state,
        storedTasks: state.storedTasks.filter((task) => task.uid !== action.payload)
      };
    default:
      return state;
  }
};
