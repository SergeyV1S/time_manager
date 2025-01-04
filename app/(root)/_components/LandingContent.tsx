"use client";

import { MainLangingIcon } from "@/icons";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

import { Button } from "@/components/ui";

import { DynamicWidthContainer } from "./DynamicWidthContainer";

export const LandingContent = () => {
  const abilitiesSectionRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const scrollToOurAbilitiesSection = () => abilitiesSectionRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div ref={mainRef} className='flex items-center justify-between flex-col'>
      <div className='flex items-center justify-between container'>
        <div className='space-y-8'>
          <h1 className='text-6xl'>Вам хватит на всё!</h1>
          <p className='text-xl opacity-90'>
            Распределяйте время грамотно! <br />А мы предоставим для этого все удобства!
          </p>
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
        <MainLangingIcon width={600} height={450} />
      </div>
      <DynamicWidthContainer abilitiesSectionRef={abilitiesSectionRef} className='dark:bg-slate-900'>
        <div className='p-10 space-y-6 container'>
          <h2 className='text-3xl font-semibold text-center'>Наши возможности</h2>
          <div className='flex items-center'>
            <p className='basis-1/2'>Создайте свой список задач использую удобный интефрейс (фото тудушки)</p>
          </div>
          <div className='flex items-center'>
            <p className='basis-1/2'>
              Грамотно делегируйте задачи по их важности и срочности с помощью Матрицы Эйзенхауэра
            </p>
          </div>
          <div className='flex items-center'>
            <p>Отслеживайте свою активность по выбранному периоду в разделе &quot;Статистика&quot;</p>
          </div>
          <div className='flex items-center'>
            <p className='basis-1/2'>Ставьте себе цели и смотрите как вы к ним приближаетесь!</p>
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio tenetur, nobis libero numquam modi!
          Necessitatibus facilis corrupti fugiat laborum placeat repellendus, soluta reprehenderit dolore consectetur
          laudantium culpa mollitia voluptate!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio
          tenetur, nobis libero numquam modi! Necessitatibus facilis corrupti fugiat laborum placeat repellendus, soluta
          reprehenderit dolore consectetur laudantium culpa mollitia voluptate!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolor distinctio tenetur, nobis libero numquam modi! Necessitatibus facilis corrupti fugiat
          laborum placeat repellendus, soluta reprehenderit dolore consectetur laudantium culpa mollitia voluptate!Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio tenetur, nobis libero numquam modi!
          Necessitatibus facilis corrupti fugiat laborum placeat repellendus, soluta reprehenderit dolore consectetur
          laudantium culpa mollitia voluptate!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio
          tenetur, nobis libero numquam modi! Necessitatibus facilis corrupti fugiat laborum placeat repellendus, soluta
          reprehenderit dolore consectetur laudantium culpa mollitia voluptate!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolor distinctio tenetur, nobis libero numquam modi! Necessitatibus facilis corrupti fugiat
          laborum placeat repellendus, soluta reprehenderit dolore consectetur laudantium culpa mollitia voluptate!Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio tenetur, nobis libero numquam modi!
          Necessitatibus facilis corrupti fugiat laborum placeat repellendus, soluta reprehenderit dolore consectetur
          laudantium culpa mollitia voluptate!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio
          tenetur, nobis libero numquam modi! Necessitatibus facilis corrupti fugiat laborum placeat repellendus, soluta
          reprehenderit dolore consectetur laudantium culpa mollitia voluptate!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolor distinctio tenetur, nobis libero numquam modi! Necessitatibus facilis corrupti fugiat
          laborum placeat repellendus, soluta reprehenderit dolore consectetur laudantium culpa mollitia voluptate!
        </div>
      </DynamicWidthContainer>
    </div>
  );
};
