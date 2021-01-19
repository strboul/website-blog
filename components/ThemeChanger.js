import { useTheme } from "next-themes";

import { useState, useEffect } from "react";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {mounted && (
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="text-gray-100 dark:text-black bg-gray-800 dark:bg-gray-300 hover:bg-black dark:hover:bg-white rounded p-1 focus:outline-none"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <p className="text-xs dark:bg-gray-100">
            {theme === "dark" ? "Light" : "Dark"} Mode
          </p>
        </button>
      )}
    </>
  );
};

export default ThemeChanger;
