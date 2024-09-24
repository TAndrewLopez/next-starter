"use client";

import { useEffect, useState } from "react";

import { useSystemTheme } from "@/hooks/use-system-theme";

import { Switch } from "./ui/switch";

export const ModeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useSystemTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Switch
      checked={theme === "light"}
      onCheckedChange={() =>
        theme === "light" ? setTheme("dark") : setTheme("light")
      }
    />
  );
};
