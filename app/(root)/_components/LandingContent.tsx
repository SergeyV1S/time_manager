"use client";

import { LogoIcon, MainLangingIcon } from "@/icons";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { Button, Skeleton, buttonVariants } from "@/components/ui";

import CompletedTaskImg from "/public/app-images/completedtask.webp";
import MatrixImg from "/public/app-images/matrix.webp";
import RegPageImg from "/public/app-images/reg.webp";
import TaskPageImg from "/public/app-images/taskpage.webp";

const DynamicWidthContainer = dynamic(() => import("./DynamicWidthContainer"), {
  ssr: false,
  loading: () => <Skeleton className='w-[90%] h-screen container rounded-3xl mt-12' />
});

export const LandingContent = () => {
  const abilitiesSectionRef = useRef<HTMLDivElement | null>(null);
  const howToUseItSectionRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const scrollToOurAbilitiesSection = () => abilitiesSectionRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div ref={mainRef} className='flex items-center justify-between flex-col gap-10'>
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
      <DynamicWidthContainer
        abilitiesSectionRef={abilitiesSectionRef}
        className='dark:bg-slate-900 border dark:border-slate-600'
      >
        <div className='p-10 space-y-24 container text-xl max-lg:text-lg max-md:text-base'>
          <h2 className='text-3xl font-semibold text-center'>Наши возможности</h2>

          <div className='flex justify-center gap-10 max-md:flex-col max-md:items-center'>
            <p className='md:w-[36vw] max-md:text-center'>
              <strong>Интуитивно понятный интерфейс</strong> Создавайте, редактируйте и управляйте задачами легко и
              быстро. Ваши планы — в одном месте, доступные в любой момент!
            </p>
            <Image
              src={MatrixImg}
              alt='Task'
              width={400}
              height={200}
              className='rounded-xl shadow-md dark:shadow-landingPhotoDark md:w-[36vw] md:h-[18vw]'
            />
          </div>

          <div className='flex justify-center gap-10 max-md:flex-col-reverse max-md:items-center'>
            <Image
              src={TaskPageImg}
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
              src={TaskPageImg}
              alt='Task'
              width={300}
              height={300}
              className='rounded-xl shadow-md dark:shadow-landingPhotoDark md:size-[30vw]'
            />
          </div>

          <div className='flex justify-center gap-10 max-md:flex-col-reverse max-md:items-center'>
            <Image
              src={TaskPageImg}
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
        <DynamicWidthContainer abilitiesSectionRef={howToUseItSectionRef} className='dark:bg-slate-800'>
          <div className='p-10 space-y-24 container text-xl max-lg:text-lg max-md:text-base'>
            <h2 className='text-3xl font-semibold text-center'>Как эти пользоваться?</h2>

            <ul className='space-y-24'>
              <li className='flex justify-center gap-10 max-md:flex-col max-md:items-center'>
                <p className='md:w-[36vw] max-md:text-center'>
                  <strong>1.</strong> Пройдите регистрацию и создайте учетную запись на платформе
                </p>
                <Image
                  src={RegPageImg}
                  alt='Task'
                  width={450}
                  height={450}
                  className='rounded-xl shadow-md dark:shadow-landingPhotoDark md:size-[35vw]'
                />
              </li>

              <li className='flex justify-center gap-10 max-md:flex-col max-md:items-center'>
                <p className='md:w-[36vw] max-md:text-center'>
                  <strong>2.</strong> Создайте и выполните свою первую задачу
                </p>
                <Image
                  src={CompletedTaskImg}
                  alt='Task'
                  width={400}
                  height={130}
                  className='rounded-xl shadow-md dark:shadow-landingPhotoDark md:w-[40vw] md:h-[13vw]'
                />
              </li>

              <li className='flex justify-center gap-10 max-md:flex-col max-md:items-center'>
                <p className='md:w-[36vw] max-md:text-center'>
                  <strong>3.</strong> Зайдите в раздел статистики и восхотитесь своим достижением!
                </p>
                <Image
                  src={RegPageImg}
                  alt='Task'
                  width={400}
                  height={400}
                  className='rounded-xl shadow-md dark:shadow-landingPhotoDark md:size-[35vw]'
                />
              </li>
            </ul>
          </div>
        </DynamicWidthContainer>
      </DynamicWidthContainer>
      <footer className='w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
        <div className='container mx-auto py-10 px-5'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 mb-6'>
            <LogoIcon />

            <div className='text-center md:text-right max-w-md'>
              <h3 className='text-lg font-medium'>Ваш успех — наша цель!</h3>
              <p className='text-sm mt-2'>
                С нашим приложением управление задачами становится проще, а цели — ближе. Спасибо, что выбираете нас!
              </p>
            </div>
          </div>

          <hr className='border-t border-gray-300 dark:border-gray-700 my-4' />

          <div className='flex flex-col md:flex-row items-center justify-between text-sm'>
            <p>© 2025 Time Manager. Все права защищены.</p>
            <div className='flex gap-4 mt-4 md:mt-0 max-sm:flex-col max-sm:items-center'>
              <Link href='/' className={cn(buttonVariants({ variant: "link" }), "text-sm")}>
                Политика конфиденциальности
              </Link>
              <Link href='/' className={cn(buttonVariants({ variant: "link" }), "text-sm")}>
                Условия использования
              </Link>
              <Link href='/' className={cn(buttonVariants({ variant: "link" }), "text-sm")}>
                Контакты
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
