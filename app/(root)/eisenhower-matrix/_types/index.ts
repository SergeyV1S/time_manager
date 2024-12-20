import type { ETaskImportance, ETaskUrgency } from "@app/(root)/tasks/_types";

export interface IMatrixCell {
  importance: ETaskImportance;
  urgency: ETaskUrgency;
}
