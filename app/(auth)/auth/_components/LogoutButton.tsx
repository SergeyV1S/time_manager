"use client";

import { LogOut } from "lucide-react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import { useAuth } from "../_model/useAuth";

export const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <DropdownMenuItem className='cursor-pointer' onClick={() => logout()}>
      <LogOut />
      Выйти
    </DropdownMenuItem>
  );
};
