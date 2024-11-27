"use client";

import { Button } from "@/components/ui";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useAuth } from "../_model/useAuth";

export const SignUpForm = () => {
  const { signUpForm, signUp } = useAuth();

  return (
    <Form {...signUpForm}>
      <form onSubmit={signUpForm.handleSubmit(signUp)} className='space-y-7'>
        <div className='flex items-center gap-5'>
          <FormField
            control={signUpForm.control}
            name='name'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Имя*</FormLabel>
                <FormControl>
                  <Input placeholder='Введите имя' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signUpForm.control}
            name='surname'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Фамилия*</FormLabel>
                <FormControl>
                  <Input placeholder='Введите фамилию' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={signUpForm.control}
          name='mail'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Почта*</FormLabel>
              <FormControl>
                <Input placeholder='Введите электронную почту' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={signUpForm.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль*</FormLabel>
              <FormControl>
                <Input placeholder='Введите пароль' autoComplete='off' type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={signUpForm.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Подтвердите пароль*</FormLabel>
              <FormControl>
                <Input placeholder='Подтвердите пароль' autoComplete='off' type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={
            !signUpForm.formState.dirtyFields.password ||
            !signUpForm.formState.dirtyFields.name ||
            !signUpForm.formState.dirtyFields.mail ||
            !signUpForm.formState.dirtyFields.surname ||
            !signUpForm.formState.dirtyFields.confirmPassword
          }
          className='w-full'
          type='submit'
        >
          Зарегистрироваться
        </Button>
      </form>
    </Form>
  );
};
