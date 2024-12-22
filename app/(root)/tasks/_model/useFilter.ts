import { useTaskStore } from "@/store/task";
import { useMemo, useState } from "react";

import type { ETaskCategory } from "../_types";

interface IFilteresState {
  category: ETaskCategory[];
  isComplete?: boolean | null;
}

export const useFilter = () => {
  const [filteres, setFilteres] = useState<IFilteresState>({ category: [], isComplete: null });
  const { storedTasks } = useTaskStore((state) => state);

  const filterTask = useMemo(() => {
    if (filteres.category.length === 0 && filteres.isComplete === null) {
      return storedTasks;
    }

    return storedTasks.filter((task) => {
      const matchesCategory = filteres.category.length === 0 || filteres.category.includes(task.category);
      const matchesStatus = filteres.isComplete === null || task.isComplete === filteres.isComplete;
      return matchesCategory && matchesStatus;
    });
  }, [storedTasks, filteres]);

  const filterByCategory = (category: ETaskCategory) => {
    setFilteres((prev) => ({
      ...prev,
      category: prev.category.includes(category)
        ? prev.category.filter((cat) => cat !== category)
        : [...prev.category, category]
    }));
  };

  const filterByStatus = (status: boolean | null) => {
    if (status === filteres.isComplete) {
      setFilteres((prev) => ({ ...prev, isComplete: null }));
    } else {
      setFilteres((prev) => ({ ...prev, isComplete: status }));
    }
  };

  const resetFilters = () => {
    setFilteres({ category: [], isComplete: null });
  };

  return { filterByCategory, filterTask, filterByStatus, resetFilters, filteres };
};
