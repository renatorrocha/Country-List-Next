"use client";

import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useState } from "react";

export default function ThemeSwitch() {
  const [toggleTheme, setToggleTheme] = useState("light" || "dark");
  const { setTheme } = useTheme();

  return (
    <section className="flex items-center gap-2">
      <Switch id="dark-mode-switch" onClick={() => setTheme("light")} />
      <Label htmlFor="dark-mode-switch">Dark Mode</Label>
    </section>
  );
}
