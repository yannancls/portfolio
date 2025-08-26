import React, { useState } from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const Master = ({ children, title_1, title_2 }) => {

  return (
    <div className='flex h-screen bg-[#EBEDF0] dark:bg-[#1A2328] font-[Jaldi] p-3 overflow-hidden'>

      <Sidebar />

      <div className='flex flex-col w-full overflow-auto'>
        <Topbar title_1={title_1} title_2={title_2} />
        <div className='py-2 px-5'>{children}</div>
      </div>

    </div>
  )
}

export default Master