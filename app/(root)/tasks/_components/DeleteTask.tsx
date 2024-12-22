import { deleteTaskActionCreator, useTaskStore } from "@/store/task";
import { TrashIcon } from "lucide-react";
import type { MouseEvent } from "react";

import { Button } from "@/components/ui";

interface IDeleteTaskProps extends React.ComponentProps<"button"> {
  taskUid: string;
}

export const DeleteTask = ({ taskUid, ...props }: IDeleteTaskProps) => {
  const dispatch = useTaskStore((state) => state.dispatch);

  const deleteTask = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    await deleteTaskActionCreator(taskUid)(dispatch);
  };

  return (
    <Button
      variant='ghost'
      size='icon'
      asChild
      className='hover:bg-red-600 hover:dark:bg-red-600 size-8 p-2 cursor-pointer'
      onClick={deleteTask}
      {...props}
    >
      <TrashIcon />
    </Button>
  );
};
