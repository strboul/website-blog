import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { BsMoon } from "react-icons/bs";
import { BiSun } from "react-icons/bi";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const themeCond = theme === "dark" ? "light" : "dark";
  const tooltip = `Switch to ${themeCond} theme`
  return (
    <>
      {mounted && (
        <button
          aria-label={tooltip}
          title={tooltip}
          type="button"
          className="text-gray-100 dark:text-black bg-gray-800 dark:bg-gray-200 hover:bg-black dark:hover:bg-white rounded p-1 focus:outline-none"
          onClick={() => setTheme(themeCond)}
        >
          {theme === "dark" ? <BiSun /> : <BsMoon />}
        </button>
      )}
    </>
  );
};

export default ThemeChanger;
