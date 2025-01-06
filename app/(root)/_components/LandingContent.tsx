"use client";

import { MainLangingIcon } from "@/icons";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

import Image from "next/image";

import { Button } from "@/components/ui";

import { DynamicWidthContainer } from "./DynamicWidthContainer";

export const LandingContent = () => {
  const abilitiesSectionRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const scrollToOurAbilitiesSection = () => abilitiesSectionRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div ref={mainRef} className='flex items-center justify-between flex-col'>
      <div className='flex items-center gap-10 justify-center container'>
        <div className='space-y-8 max-md:text-center max-md:flex max-md:flex-col max-md:items-center'>
          <h1 className='text-6xl max-xl:text-4xl'>Вам хватит на всё!</h1>
          <p className='text-xl max-xl:text-lg opacity-90'>
            Распределяйте время грамотно! <br />А мы предоставим для этого все удобства!
          </p>
          <MainLangingIcon className='md:w-[45vw] hidden max-md:block' />
          <Button
            variant='secondary'
            onClick={scrollToOurAbilitiesSection}
            size='lg'
            className='flex items-center gap-3'
          >
            <span>Наши возможности</span>
            <ArrowDown size={10} />
          </Button>
        </div>
        <MainLangingIcon className='w-[45vw] max-md:hidden' />
      </div>
      <DynamicWidthContainer abilitiesSectionRef={abilitiesSectionRef} className='dark:bg-slate-900'>
        <div className='p-10 space-y-24 container text-xl max-lg:text-lg max-md:text-base'>
          <h2 className='text-3xl font-semibold text-center'>Наши возможности</h2>

          <div className='flex justify-center gap-10 max-md:flex-col max-md:items-center'>
            <p className='md:w-[36vw] max-md:text-center'>
              <strong>Интуитивно понятный интерфейс</strong> Создавайте, редактируйте и управляйте задачами легко и
              быстро. Ваши планы — в одном месте, доступные в любой момент!
            </p>
            <Image
              src='/app-images/matrix.jpg'
              alt='Task'
              width={400}
              height={400}
              className='rounded-xl shadow-md dark:shadow-landingPhotoDark md:w-[36vw] md:h-[18vw]'
            />
          </div>

          <div className='flex justify-center gap-10 max-md:flex-col-reverse max-md:items-center'>
            <Image
              src='/app-images/taskpage.jpg'
              alt='Task'
              width={300}
              height={300}
              className='rounded-xl shadow-md dark:shadow-landingPhotoDark md:size-[30vw]'
            />
            <p className='md:w-[36vw] max-md:text-center'>
              <strong>Эффективное управление задачами</strong> Расставляйте приоритеты с помощью Матрицы Эйзенхауэра и
              достигайте результатов быстрее. Важное — вперед!
            </p>
          </div>

          <div className='flex justify-center gap-10 max-md:flex-col max-md:items-center'>
            <p className='md:w-[36vw] max-md:text-center'>
              <strong>Полная аналитика и статистика</strong> Отслеживайте свою продуктивность, анализируйте прогресс и
              настраивайте стратегию для максимального результата.
            </p>
            <Image
              src='/app-images/taskpage.jpg'
              alt='Task'
              width={300}
              height={300}
              className='rounded-xl shadow-md dark:shadow-landingPhotoDark md:size-[30vw]'
            />
          </div>

          <div className='flex justify-center gap-10 max-md:flex-col-reverse max-md:items-center'>
            <Image
              src='/app-images/taskpage.jpg'
              alt='Task'
              width={300}
              height={300}
              className='rounded-xl shadow-md dark:shadow-landingPhotoDark md:size-[30vw]'
            />
            <p className='md:w-[36vw] max-md:text-center'>
              <strong>Достижение целей с удовольствием</strong> Ставьте амбициозные цели, следите за прогрессом и
              празднуйте каждую победу. Ваша мотивация — наш приоритет!
            </p>
          </div>
        </div>
      </DynamicWidthContainer>
    </div>
  );
};
