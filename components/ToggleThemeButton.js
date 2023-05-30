"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function ToggleThemeButton() { 

    const [mounted, setMounted] = useState(false);
    const { theme, systemTheme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (!mounted) 
        return null;

    return (
        <button
        className="w-[50px] h-[50px] z-40 flex items-center justify-center rounded-full border-2 border-transparent p-2 shadow-white transition-all duration-500 hover:border-yellow-600 hover:text-yellow-600 hover:shadow-xl"
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        >
        {currentTheme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
    );
}
