"use client";

import { MoonIcon, Palette, SunIcon, TvMinimal } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger
} from "../ui/dropdown-menu";

export const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Palette /> Тема
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <SunIcon />
            Светлая
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <MoonIcon />
            Тёмная
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setTheme("system")}>
            <TvMinimal />
            Системная
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};
