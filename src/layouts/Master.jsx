import React, { useState } from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const Master = ({ children }) => {

  return (
    <div className='flex h-screen bg-[#EBEDF0] dark:bg-[#1A2328] font-[Jaldi] p-5 overflow-hidden'>

    <Sidebar />

    <div className='flex flex-col w-full overflow-auto'>
      <Topbar />
      <div>{children}</div>
    </div>

    </div>
  )
}

export default Master