import { useState } from "react";

import type { ETaskCategory, ITask } from "../_types";

interface IFilteresState {
  category: ETaskCategory[];
}

export const useFilter = (tasks: ITask[]) => {
  const [filteres, setFilteres] = useState<IFilteresState>({ category: [] });

  const filterTask = () => {
    if (filteres.category.length === 0) {
      return tasks;
    }

    return tasks.filter((task) => filteres.category.includes(task.category));
  };

  const filterByCategory = (category: ETaskCategory) => {
    const categoryIndex = filteres.category.findIndex((element) => element === category);

    if (categoryIndex === -1) {
      setFilteres((prev) => ({ ...prev, category: [...prev.category, category] }));
    } else {
      setFilteres((prev) => ({
        ...prev,
        category: prev.category.filter((_, index) => index !== categoryIndex)
      }));
    }
  };

  return { filterByCategory, filterTask, filteres };
};
