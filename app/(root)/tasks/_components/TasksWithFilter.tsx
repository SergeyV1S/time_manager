"use client";

import { paths } from "@/lib/constants";
import { translateCategory } from "@/lib/translateCategory";
import type { DragEndEvent } from "@dnd-kit/core";
import { DndContext, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { FilterIcon, FilterXIcon, Grid2X2Icon } from "lucide-react";

import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Checkbox,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  buttonVariants
} from "@/components/ui";

import { reorderTasks } from "../_lib/reorderTask";
import { useFilter } from "../_model/useFilter";
import { ETaskCategory, type ITask } from "../_types";
import { updateTaskPositionAction } from "../action";
import { TaskItem } from "./TaskItem";

interface ITasksWithFilterProps {
  tasks: ITask[];
  children: React.ReactNode;
}

export const TasksWithFilter = ({ tasks, children }: ITasksWithFilterProps) => {
  const { filteres, filterByStatus, filterByCategory, resetFilters, filterTask } = useFilter(tasks);
  const filteredTasks = filterTask;
  const isAnyFilterActive = filteres.category.length > 0 || filteres.isComplete !== null;

  const onDragEndHandler = async (e: DragEndEvent) => {
    if (e.active.id === e.over?.id) return;

    const oldIndex = tasks.findIndex((task) => task.uid === e.active.id);
    const newIndex = tasks.findIndex((task) => task.uid === e.over?.id);

    if (oldIndex === -1 || newIndex === -1) return;

    const reorderedTasks = reorderTasks(tasks, oldIndex, newIndex);

    await updateTaskPositionAction(reorderedTasks);
  };

  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

  return (
    <DndContext onDragEnd={onDragEndHandler} sensors={sensors}>
      <div className='w-full max-w-[700px] flex items-center justify-end'>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={paths.EISENHOWER_MATRIX} className={buttonVariants({ variant: "ghost", size: "icon" })}>
              <Grid2X2Icon />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Матрица Эйзенхауэра</p>
          </TooltipContent>
        </Tooltip>

        <Popover>
          <Tooltip>
            <TooltipTrigger asChild>
              <PopoverTrigger asChild>
                <Button variant='ghost' size='icon' className='relative'>
                  {isAnyFilterActive ? <FilterXIcon /> : <FilterIcon />}
                  {isAnyFilterActive && (
                    <div className='absolute bottom-0 right-0 bg-red-600 size-4 flex items-center justify-center rounded-full'>
                      <p className='text-white text-[10px]'>
                        {filteres.isComplete !== null ? filteres.category.length + 1 : filteres.category.length}
                      </p>
                    </div>
                  )}
                </Button>
              </PopoverTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>Фильтры</p>
            </TooltipContent>
          </Tooltip>
          <PopoverContent className='space-y-3'>
            <div className='divide-y'>
              <h3 className='text-center text-sm pb-3'>Категории</h3>
              <div className='grid grid-cols-[1fr_90px] gap-y-2 pt-3'>
                {Object.values(ETaskCategory).map((category) => (
                  <div key={category} className='flex items-center gap-2'>
                    <Checkbox
                      id={category}
                      checked={filteres.category.includes(category)}
                      onCheckedChange={() => filterByCategory(category)}
                    />
                    <Label htmlFor={category} className='text-xs'>
                      {translateCategory(category)}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className='divide-y'>
              <h3 className='text-center text-sm py-3'>Статус</h3>
              <div className='space-y-2 pt-3'>
                {[false, true].map((status, index) => (
                  <div key={index} className='flex items-center gap-2'>
                    <Checkbox
                      id={index.toString()}
                      checked={filteres.isComplete === status}
                      onCheckedChange={() => filterByStatus(status)}
                    />
                    <Label htmlFor={index.toString()} className='text-xs'>
                      {status ? "Выполненные" : "Невыполненные"}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Button variant='ghost' size='sm' onClick={resetFilters} className='w-full mt-4'>
              Сбросить все фильтры
            </Button>
          </PopoverContent>
        </Popover>
        {children}
      </div>

      <div className='w-full max-w-[700px] divide-y divide-blue-300'>
        {filteredTasks.length > 0 ? (
          <SortableContext strategy={verticalListSortingStrategy} items={filteredTasks.map((task) => task.uid)}>
            {filteredTasks.map((task) =>
              task.description ? (
                <Accordion type='single' collapsible key={task.uid}>
                  <AccordionItem value='item-1'>
                    <AccordionTrigger>
                      <TaskItem {...task} />
                    </AccordionTrigger>
                    <AccordionContent className={task.isComplete ? "opacity-60" : ""}>
                      {task.description}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <div className='py-4' key={task.uid}>
                  <TaskItem {...task} />
                </div>
              )
            )}
          </SortableContext>
        ) : (
          <div className='bg-blue-500 text-white dark:bg-blue-950 m-auto rounded-xl w-full max-w-fit'>
            <p className='px-4 py-2 text-sm'>Нет активных задач</p>
          </div>
        )}
      </div>
    </DndContext>
  );
};
