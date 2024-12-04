/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "@/hooks/use-toast";
import { paths } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

import { postSignIn, postSignUp } from "../_api";
import { postLogout } from "../_api/postLogout";
import { signInFormSchema, signUpFormSchema } from "../_lib/formSchemas";
import type { TSignInForm, TSignUpForm } from "../_types";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

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

  const router = useRouter();

  const signUp = async (data: TSignUpForm) => {
    setIsLoading(true);
    try {
      const { mail, name, password, surname } = data;
      const result = await postSignUp({
        mail,
        name,
        password,
        surname
      });

      if (result.data.message.isAdmin) {
        router.push(paths.ADMIN);
      } else {
        router.push("/"); // Временно
      }
    } catch (error: any) {
      toast({
        className: "bg-red-800 text-white hover:bg-red-700",
        title: "Ошибка регистрации",
        description: `${error.message}`
      });
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (data: TSignInForm) => {
    setIsLoading(true);
    try {
      const result = await postSignIn(data);
      if (result.data.message.isAdmin) {
        router.push(paths.ADMIN);
      } else {
        router.push("/"); // Временно
      }
    } catch (error: any) {
      toast({
        className: "bg-red-800 text-white hover:bg-red-700",
        title: "Ошибка авторизации",
        description: `${error.response.data.message}`
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      const result = await postLogout();

      toast({
        className: "bg-green-600 text-white hover:bg-green-500",
        title: result.data.message
      });

      router.push(paths.AUTH);
    } catch (error: any) {
      toast({
        className: "bg-red-800 text-white hover:bg-red-700",
        title: "Ошибка авторизации",
        description: `${error.response.data.message}`
      });
    }
  };

  return { signInForm, signUpForm, signUp, signIn, logout, isLoading };
};
