import React from "react";
import { motion } from "framer-motion";

const Topbar = ({ title_1, title_2 }) => {
  return (
    <div className="flex flex-col items-start py-2 px-5 cursor-default">

      {/* Title */}
      <div className="flex flex-row justify-between items-center w-full py-3">

        {/* Only this part animates */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -60, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-row gap-2 text-[2em] tracking-widest font-semibold"
        >
          <span className="text-[#24575B] dark:text-[#DBDBDB] transition-colors">
            {title_1}
          </span>
          <span className="text-[#4FC6CE]">{title_2}</span>
        </motion.div>

        {/* This stays fixed */}
        <button className="cursor-pointer px-10 py-1 bg-none font-medium text-[#24575B] hover:text-[#EBEDF0] hover:bg-[#24575B] dark:text-[#4FC6CE] hover:dark:text-[#1A2328] hover:dark:bg-[#4FC6CE] border-2 border-[#24575B] dark:border-[#4FC6CE] rounded-2xl transition-colors">
          Resume
        </button>

      </div>

      <div className="w-[100%] h-[1px] mt-2 rounded bg-black/20 dark:bg-white/20 transition-colors"></div>

    </div>
  );
};

export default Topbar;