import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const textSwitch = theme === "dark" ? "Light" : "Dark";
  return (
    <>
      {mounted && (
        <button
          aria-label="Toggle Dark Mode"
          title="Switch theme"
          type="button"
          className="text-gray-100 dark:text-black bg-gray-800 dark:bg-gray-200 hover:bg-black dark:hover:bg-white rounded p-1 focus:outline-none"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <p className="text-xs">{textSwitch} Mode</p>
        </button>
      )}
    </>
  );
};

export default ThemeChanger;
