import { z } from "zod";

const passwordFormShema = z.string().min(8, "Минимальное кол-во символов - 8");

export const signInFormSchema = z.object({
  mail: z.string().email("Неправильный email"),
  password: passwordFormShema
});

export const signUpFormSchema = signInFormSchema
  .merge(
    z.object({
      name: z.string().min(2, "Введите свое имя"),
      surname: z.string().min(2, "Введите свою фамилию"),
      confirmPassword: passwordFormShema
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"]
  });

export type TSignInForm = z.infer<typeof signInFormSchema>;
export type TSignUpForm = z.infer<typeof signUpFormSchema>;
export type TRegisterRequest = Omit<TSignUpForm, "confirmPassword">;
export type TSignInRequest = TSignInForm;
export interface IAuthReasponse {
  message: {
    name: string;
    isAdmin: boolean;
  };
}
