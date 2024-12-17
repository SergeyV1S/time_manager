import { ETaskCategory, ETaskImportance, ETaskUrgency } from "@app/(root)/tasks/_types";

export const translateCategory = (category: ETaskCategory) => {
  switch (category) {
    case ETaskCategory.HOMEWORK:
      return "Домашняя работа";
    case ETaskCategory.HOBBY:
      return "Хобби";
    case ETaskCategory.OCCUPATION:
      return "Работа";
    case ETaskCategory.STUDY:
      return "Учёба";
  }
};

export const translateImportance = (importance: ETaskImportance) => {
  switch (importance) {
    case ETaskImportance.IMPORTANT:
      return "Важно";
    case ETaskImportance.NO_MATTER:
      return "Неважно";
  }
};

export const translateUrgency = (urgency: ETaskUrgency) => {
  switch (urgency) {
    case ETaskUrgency.URGENTLY:
      return "Срочно";
    case ETaskUrgency.NO_TURGENTLY:
      return "Не срочно";
  }
};
