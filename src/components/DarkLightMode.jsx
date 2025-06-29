import React, { useState, useEffect } from "react";
import { MdLightMode, MdOutlineNightlightRound } from "react-icons/md";

export default function DarkLightMode() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="bg-[#98B1BA] hover:bg-[#4FC6CE] cursor-pointer rounded-md p-3 w-12 h-12 flex items-center justify-center transition-all duration-300"
    >
      {isDarkMode ? (
        <MdLightMode className="text-4xl text-gray-600 hover:text-[#26333A] transition duration-300" />
      ) : (
        <MdOutlineNightlightRound className="text-4xl text-gray-600 hover:text-[#26333A] transition duration-300" />
      )}
    </button>
  );
}
