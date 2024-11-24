import { FlipCard } from "./_components/FlipCard";
import { SignInForm } from "./_components/SignInForm";
import { SignUpForm } from "./_components/SignUpForm";

const Auth = () => (
  <div className='w-full min-h-screen grid place-content-center'>
    <FlipCard>
      <SignInForm />
      <SignUpForm />
    </FlipCard>
  </div>
);

export default Auth;
