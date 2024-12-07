"use client";

import { TrashIcon } from "lucide-react";

import { Button } from "@/components/ui";

import { deleteTaskAction } from "../action";

interface IDeleteTaskProps {
  taskUid: string;
}

export const DeleteTask = ({ taskUid }: IDeleteTaskProps) => (
  <Button
    variant='ghost'
    size='icon'
    asChild
    className='hover:bg-red-600 hover:dark:bg-red-600 size-8 p-2'
    onClick={() => deleteTaskAction(taskUid)}
  >
    <TrashIcon />
  </Button>
);
