'use client';

import { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";

const Themes = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "emerald";
    }
    return "emerald";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "emerald" ? "night" : "emerald"));
  };

  return (
    <label className="swap swap-rotate dark:bg-black/20">
      {/* Hidden checkbox to control theme toggling */}
      <input type="checkbox" onChange={toggleTheme} checked={theme === "night"} />

      {/* Sun Icon for Light Mode */}
      <IoSunny className="swap-on text-[48px] lg:block" />

      {/* Moon Icon for Dark Mode */}
      <IoMdMoon className="swap-off text-[48px] lg:block" />
    </label>
  );
};

export default Themes;
