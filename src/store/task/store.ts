import { create } from "zustand";

import { taskReducer } from "./reducer";
import type { ITaskState, TTaskStoreActions } from "./types";

export const useTaskStore = create<ITaskState & { dispatch: (args: TTaskStoreActions) => void }>((set) => ({
  storedTasks: [],
  selectedTask: null,
  isModalOpen: false,
  isLoading: false,

  dispatch: (actions) => set((state) => taskReducer(state, actions))
}));
