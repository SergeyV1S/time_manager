"use client";

import { translateCategory } from "@/lib/translateCategory";
import { FilterIcon, FilterXIcon } from "lucide-react";

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
  PopoverTrigger
} from "@/components/ui";

import { useFilter } from "../_model/useFilter";
import { ETaskCategory, type ITask } from "../_types";
import { TaskItem } from "./TaskItem";

interface ITasksWithFilterProps {
  tasks: ITask[];
  children: React.ReactNode;
}

export const TasksWithFilter = ({ tasks, children }: ITasksWithFilterProps) => {
  const { filteres, filterByCategory, filterTask } = useFilter(tasks);

  const filteredTasks = filterTask();

  return (
    <>
      <div className='w-full max-w-[700px] flex items-center justify-end'>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant='ghost' size='icon' className='relative'>
              {filteres.category.length > 0 ? <FilterXIcon /> : <FilterIcon />}
              {filteres.category.length > 0 && (
                <div className='absolute bottom-0 right-0 bg-red-600 size-4 flex items-center justify-center rounded-full'>
                  <p className='text-white text-[10px]'>{filteres.category.length}</p>
                </div>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className='space-y-3 divide-y'>
              <h3 className='text-center text-sm'>Категории</h3>
              <div className='grid grid-cols-[1fr_90px] gap-y-2 pt-3'>
                {Object.values(ETaskCategory).map((category) => (
                  <div key={category} className='flex items-center gap-2 text-xs'>
                    <Checkbox
                      id={category}
                      checked={filteres.category.includes(category)}
                      onCheckedChange={() => filterByCategory(category)}
                    />
                    <Label htmlFor={category}>{translateCategory(category)}</Label>
                  </div>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
        {children}
      </div>
      <div className='w-full max-w-[700px] divide-y divide-blue-300'>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) =>
            task.description ? (
              <Accordion type='single' collapsible key={task.uid}>
                <AccordionItem value='item-1'>
                  <AccordionTrigger>
                    <TaskItem isComplete={task.isComplete} body={task.body} taskUid={task.uid} />
                  </AccordionTrigger>
                  <AccordionContent className={task.isComplete ? "opacity-60" : ""}>
                    {task.description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <div className='py-4' key={task.uid}>
                <TaskItem isComplete={task.isComplete} body={task.body} taskUid={task.uid} />
              </div>
            )
          )
        ) : (
          <div className='bg-blue-500 text-white dark:bg-blue-950 m-auto rounded-xl w-full max-w-fit'>
            <p className='px-4 py-2 text-sm'>Нет активных задач</p>
          </div>
        )}
      </div>
    </>
  );
};
