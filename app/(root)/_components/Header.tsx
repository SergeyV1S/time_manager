import { LogoIcon } from "@/icons";
import { paths } from "@/lib/constants";

import Link from "next/link";

import { buttonVariants } from "@/components/ui";

export const Header = () => (
  <header className='border-b border-b-gray-400 py-4'>
    <div className='container flex items-center justify-between'>
      <LogoIcon />
      <div className=''>
        <Link href={paths.AUTH} className={buttonVariants({ variant: "link" })}>
          Войти
        </Link>
      </div>
    </div>
  </header>
);
