"use client";

import useIsMobile from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface IDynamicWidthContainerProps extends React.ComponentProps<"div"> {
  abilitiesSectionRef: React.RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}

const DynamicWidthContainer = ({ abilitiesSectionRef, children, className }: IDynamicWidthContainerProps) => {
  const isMobile = useIsMobile();
  const ourAbilitiesSectionScrollHandler = () => {
    const initialWidthPercent = 90;
    const maxWidthPercent = 100;
    if (!abilitiesSectionRef?.current) return;

    const sectionTop = abilitiesSectionRef.current.getBoundingClientRect().top;

    if (sectionTop > 600) {
      abilitiesSectionRef.current.style.width = `${90}%`;
      return;
    }

    const closeness = Math.max(0, 1 - sectionTop / window.innerHeight);

    const newWidthPercent = initialWidthPercent + (maxWidthPercent - initialWidthPercent / 1.05) * closeness;

    if (newWidthPercent > 100) return;

    abilitiesSectionRef.current.style.width = `${newWidthPercent}%`;
  };

  useEffect(() => {
    if (!isMobile) window.addEventListener("scroll", ourAbilitiesSectionScrollHandler);
    return () => window.removeEventListener("scroll", ourAbilitiesSectionScrollHandler);
  }, []);

  return (
    <section
      ref={abilitiesSectionRef}
      className={cn(
        "h-fit mt-12 rounded-3xl transform transition-all duration-200 flex items-center justify-center flex-col",
        className
      )}
      style={{ width: "90%" }}
    >
      {children}
    </section>
  );
};

export default DynamicWidthContainer;
