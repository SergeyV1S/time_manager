import type { ETaskImportance, ETaskUrgency, ITask } from "@app/(root)/tasks/_types";

export const selectTasksForUrgencyAndImportans = (tasks: ITask[], urgency: ETaskUrgency, importance: ETaskImportance) =>
  tasks.filter((task) => task.urgency === urgency && task.importance === importance);
