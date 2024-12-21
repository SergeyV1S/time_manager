import type { ETaskImportance, ETaskUrgency } from "@app/(root)/tasks/_types";

export interface IMatrixCell {
  id: string;
  importance: ETaskImportance;
  urgency: ETaskUrgency;
}
