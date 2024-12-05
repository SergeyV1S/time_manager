"use client";

import { Button, Input, Spinner } from "@/components/ui";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { useCreateTask } from "../_model/useCreateTask";
import { ETaskCategory } from "../_types";

interface ICreateTaskFormProps {
  userUid: string;
}

export const CreateTaskForm = ({ userUid }: ICreateTaskFormProps) => {
  const { createTask, createTaskForm, isLoading } = useCreateTask(userUid);

  return (
    <Form {...createTaskForm}>
      <form onSubmit={createTaskForm.handleSubmit(createTask)} className='space-y-10 pt-5'>
        <FormField
          control={createTaskForm.control}
          name='body'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Текст задачи*</FormLabel>
              <FormControl>
                <Input placeholder='Введите текст задачи' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={createTaskForm.control}
          name='category'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Категория*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Выберите категорию' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={ETaskCategory.HOMEWORK}>Домашнии дела</SelectItem>
                  <SelectItem value={ETaskCategory.STUDY}>Учёба</SelectItem>
                  <SelectItem value={ETaskCategory.HOBBY}>Хобби</SelectItem>
                  <SelectItem value={ETaskCategory.OCCUPATION}>Работа</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={
            !createTaskForm.formState.dirtyFields.body || !createTaskForm.formState.dirtyFields.category || isLoading
          }
          className='w-full relative'
          type='submit'
        >
          {isLoading ? <Spinner /> : "Создать задачу"}
        </Button>
      </form>
    </Form>
  );
};
