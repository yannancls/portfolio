import React from "react";
import { Link, useLocation } from "react-router-dom";
import DarkLightMode from "../components/DarkLightMode";
import {
    MdHome,
    MdAccountCircle,
    MdFeed,
    MdMonitor,
    MdContactPage,
} from "react-icons/md";

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { id: "home", title: "HOME", icon: MdHome, path: "/home" },
        { id: "about", title: "ABOUT", icon: MdAccountCircle, path: "/about" },
        { id: "resume", title: "RESUME", icon: MdFeed, path: "/resume" },
        { id: "projects", title: "PROJECTS", icon: MdMonitor, path: "/projects" },
        { id: "contact", title: "CONTACT", icon: MdContactPage, path: "/contact" },
    ];

  return (
    <div className="flex flex-col justify-between items-center w-[185px] h-full bg-[#24575B] dark:bg-[#26333A] rounded-[1rem] py-6">

        <div className="flex-1 flex flex-col justify-center items-center space-y-4">
        {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
            <Link
                to={item.path}
                key={item.id}
                className={`flex flex-col items-center space-y-1 transition-all duration-300 group ${
                isActive ? "text-[#4FC6CE]" : "text-white"
                }`}
            >
                <item.icon
                className={`text-4xl transition-all duration-300 ${
                    isActive ? "text-[#4FC6CE]" : "text-[#98B1BA] group-hover:text-[#4FC6CE]"
                }`}
                />
                <span className="text-sm transition-all duration-300">
                    {item.title}
                </span>
                {item.id !== "contact" && (
                    <hr className="w-[100px] border-t border-[#98B1BA] mb-2" />
                )}
            </Link>
            );
        })}
        </div>

        
        {/* <DarkLightMode /> */}
    </div>
  );
};

export default Sidebar;
