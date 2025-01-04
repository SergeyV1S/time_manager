import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface IDynamicWidthContainerProps extends React.ComponentProps<"div"> {
  abilitiesSectionRef: React.RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}

export const DynamicWidthContainer = ({ abilitiesSectionRef, children, className }: IDynamicWidthContainerProps) => {
  const ourAbilitiesSectionScrollHandler = () => {
    const initialWidthPercent = 85;
    const maxWidthPercent = 100;
    if (!abilitiesSectionRef?.current) return;

    const sectionTop = abilitiesSectionRef.current.getBoundingClientRect().top;

    if (sectionTop > 600) {
      abilitiesSectionRef.current.style.width = `${85}%`;
      return;
    }

    const closeness = Math.max(0, 1 - sectionTop / window.innerHeight);

    const newWidthPercent = initialWidthPercent + (maxWidthPercent - initialWidthPercent / 1.1) * closeness;

    abilitiesSectionRef.current.style.width = `${newWidthPercent}%`;
  };

  useEffect(() => {
    window.addEventListener("scroll", ourAbilitiesSectionScrollHandler);
    return () => window.removeEventListener("scroll", ourAbilitiesSectionScrollHandler);
  }, []);

  return (
    <section
      ref={abilitiesSectionRef}
      className={cn("h-fit mt-12 rounded-3xl transform transition-all duration-200", className)}
      style={{ width: "85%" }}
    >
      {children}
    </section>
  );
};
