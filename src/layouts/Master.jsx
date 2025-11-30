import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import { motion } from "framer-motion";

const Master = ({ children, title_1, title_2 }) => {

  return (
    <div className='flex h-screen bg-[#EBEDF0] dark:bg-[#1A2328] font-[Jaldi] p-3 overflow-hidden transition-colors'>

      <Sidebar />

      <div className='flex flex-col w-full overflow-auto'>
        <Topbar title_1={title_1} title_2={title_2} />

        {/* Global fade animation wrapper */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="py-2 px-5"
        >
          {children}
        </motion.div>

      </div>

    </div>
  );
};

export default Master;