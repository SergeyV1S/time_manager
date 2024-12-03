"use client";

import { Button } from "@/components/ui";
import { Input } from "@/components/ui";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { useAuth } from "../_model/useAuth";

export const SignInForm = () => {
  const { signInForm, signIn } = useAuth();

  return (
    <Form {...signInForm}>
      <form onSubmit={signInForm.handleSubmit(signIn)} className='space-y-7 pt-10'>
        <FormField
          control={signInForm.control}
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
          control={signInForm.control}
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
        <Button
          disabled={!signInForm.formState.dirtyFields.password || !signInForm.formState.dirtyFields.mail}
          className='w-full'
          type='submit'
        >
          Авторизоваться
        </Button>
      </form>
    </Form>
  );
};
