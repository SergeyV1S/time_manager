import type { ITask } from "../_types";

export const reorderTasks = (tasks: ITask[], startIndex: number, endIndex: number) => {
  const result = Array.from(tasks);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result.map((task, index) => ({ ...task, position: index + 1 }));
};
