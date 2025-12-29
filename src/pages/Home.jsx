// import React from 'react'
import Picture from '../assets/Picture.png';
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { MdMailOutline } from "react-icons/md";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-full cursor-default px-6 md:px-20">

      {/* Left side */}
      <div className="flex flex-col justify-center flex-1 text-center space-y-4">
        <div className="text-4xl sm:text-5xl md:text-7xl text-[#24575B] dark:text-[#98B1BA] transition-colors space-y-4">
          <p>Hi,</p>
          <p>I'm Alyanna Nicolas</p>
        </div>

        <div className="text-xl sm:text-2xl md:text-3xl text-[#4FC6CE] font-bold mt-4 text-center tracking-widest">
          <p>Frontend Developer</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-6 justify-center items-center">
          <button className="px-8 py-2 border-3 text-[#24575B] dark:text-[#98B1BA] border-[#24575B24575B] dark:border-[#98B1BA] rounded-full cursor-pointer transition-colors">
            About Me
          </button>
          <button className="px-8 py-2 border-3 text-[#EBEDF0] border-[#24575B] bg-[#24575B] dark:text-[#1A2328] dark:border-[#98B1BA] dark:bg-[#98B1BA] rounded-full cursor-pointer transition-colors">
            Contact Me
          </button>
        </div>
      </div>


      {/* Right side */}
      <div className="flex flex-col items-center flex-1 mt-8 md:mt-0 space-y-6">
        {/* Image */}
        <img
          src={Picture}
          alt="Picture"
          className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md object-contain border-4 border-[#4FC6CE] rounded-full"
        />

        {/* Social Icons */}
        <div className="flex gap-6 text-[#4FC6CE] text-xl">
          <SlSocialFacebook className="cursor-pointer hover:scale-110 transition-transform" />
          <SlSocialLinkedin className="cursor-pointer hover:scale-110 transition-transform" />
          <SlSocialGithub className="cursor-pointer hover:scale-110 transition-transform" />
          <MdMailOutline className="cursor-pointer hover:scale-110 transition-transform" />
        </div>

      </div>
    </div>
  )
}

export default Home