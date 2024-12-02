import type { z } from "zod";

import type { signInFormSchema, signUpFormSchema } from "../_lib/formSchemas";

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
