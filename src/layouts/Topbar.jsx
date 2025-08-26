import React from "react";

const Topbar = ({ title_1, title_2 }) => {
  return (
    <div className="flex flex-col items-start py-2 px-5 cursor-default">

      {/* Title */}
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row gap-2 text-[2em] tracking-widest font-medium">
          <span className="text-[#24575B] dark:text-[#DBDBDB]">{title_1}</span>
          <span className="text-[#4FC6CE]">{title_2}</span>
        </div>

        {/* Resume Download Button */}
        <button className="cursor-pointer px-10 py-1 bg-none transition text-[#24575B] hover:text-[#EBEDF0] hover:bg-[#24575B] dark:text-[#4FC6CE] hover:dark:text-[#1A2328] hover:dark:bg-[#4FC6CE] border-2 border-[#24575B] dark:border-[#4FC6CE] rounded-2xl">
          Resume
        </button>

      </div>

      {/* Underline */}
      <div className="w-[70%] h-[1px] mt-2 rounded bg-black/20 dark:bg-white/20"></div>

    </div>
  );
};

export default Topbar;
