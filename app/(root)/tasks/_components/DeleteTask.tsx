import { TrashIcon } from "lucide-react";

import { Button } from "@/components/ui";

import { deleteTaskAction } from "../action";

interface IDeleteTaskProps extends React.ComponentProps<"button"> {
  taskUid: string;
}

export const DeleteTask = ({ taskUid, ...props }: IDeleteTaskProps) => (
  <Button
    variant='ghost'
    size='icon'
    asChild
    className='hover:bg-red-600 hover:dark:bg-red-600 size-8 p-2 cursor-pointer'
    onClick={() => deleteTaskAction(taskUid)}
    {...props}
  >
    <TrashIcon />
  </Button>
);
