import { create } from "zustand";

import { eisenhowerMatrixReducer } from "./reducer";
import type { ITaskState, TTaskStoreActions } from "./types";

export const useTaskStore = create<ITaskState & { dispatch: (args: TTaskStoreActions) => void }>((set) => ({
  storedTasks: [],
  selectedTask: null,

  dispatch: (actions) => set((state) => eisenhowerMatrixReducer(state, actions))
}));
