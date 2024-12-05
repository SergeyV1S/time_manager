import { ETaskCategory } from "@app/(root)/tasks/_types";

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
