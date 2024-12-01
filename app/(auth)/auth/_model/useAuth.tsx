/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-console */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { postSignUp } from "../_api/postSignUp";
import type { TSignInForm, TSignUpForm } from "../_lib/formSchemas";
import { signInFormSchema, signUpFormSchema } from "../_lib/formSchemas";

export const useAuth = () => {
  const signInForm = useForm<TSignInForm>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      mail: "",
      password: ""
    }
  });

  const signUpForm = useForm<TSignUpForm>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      surname: "",
      mail: "",
      password: "",
      confirmPassword: ""
    }
  });

  const signUp = async (data: TSignUpForm) => {
    try {
      const { mail, name, password, surname } = data;
      const result = await postSignUp({
        mail,
        name,
        password,
        surname
      });
      console.log(result);
    } catch (error: any) {
      toast({
        className: "bg-red-800 text-white hover:bg-red-700",
        title: "Ошибка авторизации",
        description: `${error.message}`
      });
    }
  };

  const signIn = async (data: TSignInForm) => {
    try {
      // const result = await signInAction(data);
      console.log("result");
    } catch (error: any) {
      toast({
        className: "bg-red-800 text-white hover:bg-red-700",
        title: "Ошибка авторизации",
        description: `${error.response.data.message}`
      });
    }
  };

  return { signInForm, signUpForm, signUp, signIn };
};
