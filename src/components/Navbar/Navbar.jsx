"use client";
import React, { useState } from "react";
import Themes from "../Theme/Theme";
import Image from "next/image";
import logoDay from "../../../public/ryaenDay.png";
import logoNight from "../../../public/ryaenNight.png";
import profile from "../../../public/profile.png";
import { RiHome7Line } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
import { LuCircuitBoard } from "react-icons/lu";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseSidebar = (drawerId) => {
    const drawerInput = document.getElementById(drawerId);
    if (drawerInput) drawerInput.checked = false;
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="drawer-button ">
              <div className="">
                <Image
                  className="hidden dark:block"
                  src={logoDay}
                  alt="logoDay"
                  width={225}
                  height={48}
                ></Image>
                <Image
                  className="dark:hidden"
                  src={logoNight}
                  alt="logoDay"
                  width={225}
                  height={48}
                ></Image>
              </div>
            </label>
          </div>
          <div className="drawer-side z-50">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="menu bg-base-200 text-base-content rounded-t-2xl rounded-b-2xl my-auto w-[186px] h-[586px] p-4">
              {/* Sidebar content here */}
              <div className="flex flex-col min-h-full">
                <h1 className="text-[16px]">Quick Nav</h1>
                <div className=" bg-black dark:bg-white mt-1 h-[1px]"></div>
                <div className="flex-1"></div>
                <div className="">
                  <div className="flex items-center cursor-pointer gap-2">
                    <RiHome7Line />

                    <span>Home</span>
                  </div>
                  <div className="flex items-center cursor-pointer gap-2">
                    <IoNotificationsOutline />

                    <span>Notifications</span>
                  </div>
                  <div className="flex items-center cursor-pointer gap-2">
                    <BiTask />

                    <span>All tasks</span>
                  </div>
                  <div className="flex items-center cursor-pointer gap-2">
                    <LuCircuitBoard />

                    <span>Rank</span>
                  </div>
                  <div className="flex items-center cursor-pointer gap-2">
                    <IoPersonCircleOutline />

                    <span>Profile</span>
                  </div>
                </div>
                <div className=" bg-black dark:bg-white my-3 h-[1px]"></div>
                <div
                  onClick={() => handleCloseSidebar("my-drawer-4")}
                  className="flex items-center cursor-pointer gap-2 mb-3"
                >
                  <GoArrowLeft />

                  <span>Back</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-none">
        <div className="">
          <Themes></Themes>
        </div>
        <div className="">
          <div className="dropdown dropdown-end relative">
            <div
              tabIndex={0}
              role="button"
              className="rounded-s-full rounded-e-full pe-[16px] border-2 border-black dark:border-white flex  items-center gap-5"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Image src={profile} alt="profile" width={48} height={48}></Image>{" "}
              {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {isOpen && (
              <div
                tabIndex={0}
                className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 px-4 p-2 shadow"
              >
                <div className="">
                  <div className="flex items-center cursor-pointer gap-2">
                    <IoPersonCircleOutline className="text-[#1D6CFF]" />

                    <span>Profile</span>
                  </div>
                  <div className="flex items-center cursor-pointer gap-2 text-[#1D6CFF]">
                    <LuCircuitBoard />

                    <span>Rank</span>
                  </div>
                  <div className="flex items-center cursor-pointer gap-2">
                    <IoLogOutOutline className="text-red-500"/>

                    <span>Log out</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
