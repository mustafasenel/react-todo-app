import React, { useEffect, useState } from "react";
import { MdDarkMode,MdLightMode, MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light" ? "dark" : "light"
  );

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="px-32 flex items-center justify-between w-full h-16 bg-gray-100 dark:bg-gray-900 dark:text-gray-50">
      <Link to={"/"}>
        <h2 className="text-4xl font-bold">My Notes</h2>
      </Link>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handleTheme}
          className="text-3xl text-gray-800 dark:text-gray-50"
        >
          {theme==="dark" ? <MdDarkMode /> : <MdLightMode />}
          
        </button>
        <button className="text-3xl text-gray-800 dark:text-gray-50">
          <MdPerson />
        </button>
      </div>
    </div>
  );
}
