import { ETaskImportance, ETaskUrgency } from "@app/(root)/tasks/_types";

import type { IMatrixCell } from "../_types";

export const matrixCell: IMatrixCell[] = [
  {
    importance: ETaskImportance.IMPORTANT,
    urgency: ETaskUrgency.URGENTLY
  },
  {
    importance: ETaskImportance.IMPORTANT,
    urgency: ETaskUrgency.NO_TURGENTLY
  },
  {
    importance: ETaskImportance.NO_MATTER,
    urgency: ETaskUrgency.URGENTLY
  },
  {
    importance: ETaskImportance.NO_MATTER,
    urgency: ETaskUrgency.NO_TURGENTLY
  }
] as const;
