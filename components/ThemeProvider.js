"use client"

import React from "react";
import { ThemeProvider as Provider } from "next-themes";

export default function ThemeProvider({ children }) {
  return <Provider attribute="class">{children}</Provider>;
}
