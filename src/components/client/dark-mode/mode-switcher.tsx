"use client";

import { useEffect, useState } from "react";

import { Switch } from "@/components/ui/switch";

import { useSystemTheme } from "@/hooks/use-system-theme";

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
