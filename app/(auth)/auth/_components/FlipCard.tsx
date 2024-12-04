"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

import { Button } from "@/components/ui";

interface IFlipCardProps {
  children: [React.ReactNode, React.ReactNode];
}

export const FlipCard = ({ children }: IFlipCardProps) => {
  const [isFront, setIsFront] = useState(true);

  return (
    <div className='w-[550px] h-[600px] group perspective-1000 rounded-3xl bg-transparent'>
      <div className={cn("relative h-full w-full transform-style-3d duration-500", isFront && "rotate-y-180")}>
        <div className='w-full h-full border border-slate-400 shadow-xl bg-white dark:bg-slate-950 dark:border dark:border-slate-800 absolute rounded-3xl overflow-hidden p-10 backface-hidden'>
          {children[1]}
          <div className='bottom-10 right-1/2 absolute translate-x-1/2 flex items-center text-xs gap-2'>
            <p>Уже есть аккаунт?</p>
            <Button
              className='text-xs px-0 before:bottom-2 before:h-[1px]'
              variant='link'
              onClick={() => setIsFront((prev) => !prev)}
            >
              Войти
            </Button>
          </div>
        </div>
        <div className='absolute rotate-y-180 border border-slate-400 shadow-xl w-full bg-white dark:bg-slate-950 dark:border dark:border-slate-800 h-full rounded-3xl p-10 bg-opacity-90 space-y-5 overflow-hidden backface-hidden'>
          {children[0]}
          <div className='bottom-10 right-1/2 absolute text-xs translate-x-1/2 flex items-center gap-2'>
            <p className='whitespace-nowrap'>Еще не зарегистрированы?</p>
            <Button
              className='text-xs px-0 before:bottom-2 before:h-[1px]'
              variant='link'
              onClick={() => setIsFront((prev) => !prev)}
            >
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
