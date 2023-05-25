"use client";

import React from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function ToggleThemeButton() {
  const { theme, systemTheme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      className="flex items-center justify-center rounded-full border-2 border-cyan-400 border-opacity-0 p-2 transition-all duration-500 hover:border-opacity-100 hover:text-cyan-400"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      {currentTheme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
    </button>
  );
}
