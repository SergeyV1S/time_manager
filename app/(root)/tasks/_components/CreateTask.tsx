"use client";

import { TOGGLE_MODAL, useTaskStore } from "@/store/task";
import { PlusIcon } from "lucide-react";

import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { CreateTaskForm } from "./CreateTaskForm";

interface ICreateTaskProps {
  userUid: string;
}

export const CreateTask = ({ userUid }: ICreateTaskProps) => {
  const { dispatch, isModalOpen, storedTasks } = useTaskStore((state) => state);

  const toggleCreateTaskModal = () => dispatch({ type: TOGGLE_MODAL, payload: true });

  return (
    <Dialog open={isModalOpen} onOpenChange={toggleCreateTaskModal}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button variant='ghost' size='icon'>
              <PlusIcon />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Создать задачу</p>
        </TooltipContent>
      </Tooltip>
      <DialogContent aria-describedby={undefined} className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Создание задачи</DialogTitle>
        </DialogHeader>
        <CreateTaskForm tasksLenght={storedTasks.length} userUid={userUid} />
      </DialogContent>
    </Dialog>
  );
};
