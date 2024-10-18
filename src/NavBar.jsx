import React from "react";
import { FaBars } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { IoPowerOutline } from "react-icons/io5";
import { TfiHelpAlt } from "react-icons/tfi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbClockPause } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";
import { BiCategory } from "react-icons/bi";
import { IoArrowBackOutline } from "react-icons/io5";
import { RiFileList3Line } from "react-icons/ri";
import { TbSettingsCog } from "react-icons/tb";
import { GrPieChart } from "react-icons/gr";
import { RiGalleryView2 } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { RxUpdate } from "react-icons/rx";
import { BsPower } from "react-icons/bs";

import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const sideOpenToggle = () => {
    setSideOpen(!sideOpen);
  };
  const noPropagate = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={sideOpenToggle}>
            <FaBars className="inline-block px-[11px] ml-2 text-[46px]" />
          </button>
          <h1 className="inline-block font-semibold text-[20px] pr-3">
            <Link to='/'>LOGO-Image</Link>
          </h1>
          <button className="text-white bg-[#e40039de] font-bold rounded-[4px] px-3 py-2">
           <Link to='/'> New Order</Link>
          </button>
          <div className="flex justify-center items-center">
            <IoSearchOutline className="absolute mr-[54px] opacity-30 text-[22px]" />
            <input
              className="px-2 pl-7 ml-4 h-[40px] outline-none placeholder:text-gray-400 w-[100px] border border-gray-300 rounded-[3px]"
              placeholder="Bill No"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-center gap-x-3 border px-2 border-gray-400 rounded-[5px]">
            <IoMdCall className="text-[34px] rounded-full bg-red-100 p-[7px]" />
            <div className="flex flex-col text-[15px]">
              <div>Call For Support</div>
              <div className="text-center">9676920019</div>
            </div>
          </div>
          <div>
            <BiCategory className="text-[32px] opacity-[67%] ml-5" />
          </div>
          <div>
            <CgNotes className="text-[28px] opacity-[67%] ml-5" />
          </div>
          <div>
            <TbClockPause className="text-[32px] opacity-[67%] ml-5" />
          </div>
          <div>
            <IoIosNotificationsOutline className="text-[36px] ml-5" />
          </div>
          <div>
            <TfiHelpAlt className="text-[27px] ml-5" />
          </div>
          <div>
            <IoPowerOutline className="text-[32px] mx-5 mr-6" />
          </div>
        </div>
      </div>
      <div
        className={`bg-black fixed bg-opacity-40 inset-0 z-50 w-full flex justify-start ${
          sideOpen ? "bg-opacity-65" : "opacity-0 pointer-events-none"
        }`}
        onClick={sideOpenToggle}
      >
        <div
          className={`text-white bg-[#1E201E] transform transition-transform duration-[330ms] w-1/4 min-h-screen ${
            sideOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={noPropagate}
        >
          <div className="flex justify-between px-[21px] pt-9 pb-6 text-[21px]">
            <div>MenuBar</div>
            <button onClick={sideOpenToggle}>
              <IoArrowBackOutline className="text-[25px]" />
            </button>
          </div>
          <div className="flex justify-start text-[17px] gap-x-4 items-center px-7 py-4 hover:bg-white hover:bg-opacity-40 cursor-pointer">
            <RiFileList3Line className="text-[28px]" />
            Billing
          </div>
          <div className="flex justify-start text-[17px] gap-x-5 items-center px-6 py-4 hover:bg-white hover:bg-opacity-40 cursor-pointer">
            <TbSettingsCog className="text-[28px]" />
            Configuration
          </div>
          <div className="flex justify-start text-[17px] gap-x-5 items-center px-[26px] py-4 hover:bg-white hover:bg-opacity-40 cursor-pointer">
            <GrPieChart className="text-[25px]" />
            Reports
          </div>
          <div className="flex justify-start text-[17px] gap-x-5 items-center px-6 py-4 hover:bg-white hover:bg-opacity-40 cursor-pointer">
            <RiGalleryView2 className="text-[27px]" />
            Live View
          </div>
          <div className="flex justify-start text-[17px] gap-x-5 items-center px-6 py-4 hover:bg-white hover:bg-opacity-40 cursor-pointer">
            <FaRegCalendarCheck className="text-[26px]" />
            Day End
          </div>
          <div className="flex justify-start text-[17px] gap-x-5 items-center px-6 py-4 hover:bg-white hover:bg-opacity-40 cursor-pointer">
            <RxUpdate className="text-[26px]" />
            Check For Updates
          </div>
          <div className="flex justify-start text-[17px] gap-x-5 items-center px-[20px] py-4 hover:bg-white hover:bg-opacity-40 cursor-pointer">
            <BsPower className="text-[31px]" />
            Logout
          </div>
          <div className="h-[1px] mb-1 mt-7 bg-white w-full"></div> 
          <div className="flex items-center justify-evenly">
            <div>Ref ID : A52581R</div>
            <div>Version : 102.0.3</div>
          </div>
          <div className="h-[1px] mt-1 mb-1 bg-white w-full"></div>
          <div className="flex justify-center items-center">
            Biller Name : sai
          </div>
          <div className="h-[1px] mt-1 bg-white w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
