import { LogoIcon } from "@/icons";
import { paths } from "@/lib/constants";
import type { ISessionPayload } from "@/lib/session";
import { decrypt } from "@/lib/session";
import { LogoutButton } from "@app/(auth)/auth/_components/LogoutButton";
import { ChartColumn, ClipboardList, KeyRound, Settings, UserIcon } from "lucide-react";

import { cookies } from "next/headers";
import Link from "next/link";

import { ThemeToggle } from "@/components/theme";
import { Avatar, AvatarFallback, AvatarImage, buttonVariants } from "@/components/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export const Header = async () => {
  const cookie = (await cookies()).get("session")?.value || "";
  const session = (await decrypt(cookie)) as unknown as ISessionPayload;

  return (
    <header className='border-b border-b-gray-400 py-4'>
      <div className='px-8 flex items-center justify-between'>
        <LogoIcon />
        <div className=''>
          {cookie ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src='https://github.com/shadcn.png' alt={"avatar"} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56'>
                <DropdownMenuLabel>{session?.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link href={paths.PROFILE} className='flex items-center gap-2 rounded-sm text-sm outline-none'>
                      <UserIcon size={16} /> Мой профиль
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={paths.TASKS} className='flex items-center gap-2 rounded-sm text-sm outline-none'>
                      <ClipboardList size={16} /> Мои задачи
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={paths.MY_STATISTIC} className='flex items-center gap-2 rounded-sm text-sm outline-none'>
                      <ChartColumn size={16} /> Моя статистика
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={paths.SETTINGS} className='flex items-center gap-2 rounded-sm text-sm outline-none'>
                      <Settings size={16} /> Настройки
                    </Link>
                  </DropdownMenuItem>
                  {session?.isAdmin ? (
                    <DropdownMenuItem>
                      <Link href={paths.ADMIN} className='flex items-center gap-2 rounded-sm text-sm outline-none'>
                        <KeyRound size={16} /> Панель админа
                      </Link>
                    </DropdownMenuItem>
                  ) : (
                    ""
                  )}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <ThemeToggle />
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <LogoutButton />
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href={paths.AUTH} className={buttonVariants({ variant: "link" })}>
              Войти
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
