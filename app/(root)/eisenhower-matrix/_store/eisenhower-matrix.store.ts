import { create } from "zustand";

import { eisenhowerMatrixReducer } from "./reducer";
import type { IMatrixState, TEisenhowerMatrixStoreActions } from "./types";

export const useEisenhowerMatrixStore = create<
  IMatrixState & { dispatch: (args: TEisenhowerMatrixStoreActions) => void }
>((set) => ({
  storedTasks: [],
  selectedTask: null,

  dispatch: (actions) => set((state) => eisenhowerMatrixReducer(state, actions))
}));
