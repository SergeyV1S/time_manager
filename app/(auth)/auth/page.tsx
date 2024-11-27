import { FlipCard } from "./_components/FlipCard";
import { SignInForm } from "./_components/SignInForm";
import { SignUpForm } from "./_components/SignUpForm";

const Auth = () => (
  <div className='w-full min-h-screen grid place-content-center'>
    <FlipCard>
      <div className='space-y-6'>
        <h1 className='font-bold text-2xl text-center'>Авторизация</h1>
        <SignInForm />
      </div>
      <div className='space-y-6'>
        <h1 className='font-bold text-2xl text-center'>Регистрация</h1>
        <SignUpForm />
      </div>
    </FlipCard>
  </div>
);

export default Auth;
