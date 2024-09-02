"use client";

import * as React from "react";
import { MoonIcon, SunIcon, LaptopIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Badge } from "./ui/badge";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <Badge variant={"outline"} className="flex items-center gap-4 w-fit rounded-none p-2">
      <abbr title="Light">
      <SunIcon
        onClick={() => setTheme("light")}
        className="w-4 h-4 cursor-pointer dark:hover:text-gray-300 hover:text-gray-500"
      />
      </abbr>
      <abbr title="System">
      <LaptopIcon
        onClick={() => setTheme("system")}
        className="w-4 h-4 cursor-pointer dark:hover:text-gray-300 hover:text-gray-500"
      />
      </abbr>
      <abbr title="Dark">
      <MoonIcon
        onClick={() => setTheme("dark")}
       className="w-4 h-4 cursor-pointer dark:hover:text-gray-300 hover:text-gray-500"
      />
      </abbr>
    </Badge>
  );
}
