import { ETaskImportance, ETaskUrgency } from "@app/(root)/tasks/_types";

import type { IMatrixCell } from "../_types";

export const matrixCell: IMatrixCell[] = [
  {
    id: "cell-0",
    importance: ETaskImportance.IMPORTANT,
    urgency: ETaskUrgency.URGENTLY
  },
  {
    id: "cell-1",
    importance: ETaskImportance.IMPORTANT,
    urgency: ETaskUrgency.NO_TURGENTLY
  },
  {
    id: "cell-2",
    importance: ETaskImportance.NO_MATTER,
    urgency: ETaskUrgency.URGENTLY
  },
  {
    id: "cell-3",
    importance: ETaskImportance.NO_MATTER,
    urgency: ETaskUrgency.NO_TURGENTLY
  }
] as const;
