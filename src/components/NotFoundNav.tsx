"use client";

import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { buttonVariants } from "@/components/ui";

export const NotFoundNav = () => {
  const router = useRouter();

  return (
    <nav aria-label='Навигация' className='flex items-center justify-center gap-2'>
      <a
        className={cn(buttonVariants({ variant: "link" }), "w-fit text-sm")}
        onClick={() => router.back()}
        role='button'
      >
        <ArrowLeftIcon />
        <span>Назад</span>
      </a>
      <Link href='/' className={cn(buttonVariants({ variant: "link" }), "w-fit text-sm")}>
        На главную
      </Link>
    </nav>
  );
};
