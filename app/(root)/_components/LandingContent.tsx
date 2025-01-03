"use client";

import { MainLangingIcon } from "@/icons";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui";

export const LandingContent = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);

  const scrollToOurAbilitiesSection = () => sectionRef.current?.scrollIntoView({ behavior: "smooth" });

  const ourAbilitiesSectionScrollHandler = () => {
    const maxWidth = window.innerWidth;
    const initialWidth = maxWidth - maxWidth * 0.9;

    return () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;

      const closeness = Math.max(0, 1 - sectionTop / window.innerHeight);

      const newWidth = Math.round(initialWidth + (maxWidth - initialWidth) * closeness);

      sectionRef.current.style.width = `${newWidth}px`;
    };
  };

  const ourAbilitiesSectionScrollHandlerWithEnv = ourAbilitiesSectionScrollHandler();

  useEffect(() => {
    window.addEventListener("scroll", ourAbilitiesSectionScrollHandlerWithEnv);
    return () => window.removeEventListener("scroll", ourAbilitiesSectionScrollHandlerWithEnv);
  }, []);

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
      <section
        ref={sectionRef}
        className='bg-slate-900 h-fit rounded-3xl transform transition-all duration-200 w-[90%]'
      >
        <div className='p-10 space-y-6 container'>
          <h2 className='text-3xl font-semibold text-center'>Наши возможности</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi enim repellendus provident nobis autem quos
            libero, praesentium itaque et dicta quo adipisci distinctio officiis, blanditiis consequatur officia
            inventore porro accusantium!
          </p>
        </div>
      </section>
    </div>
  );
};
