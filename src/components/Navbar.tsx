import { useState } from "react";
import Logo from "../assets/CW-logo-white.svg";
import Image from "../assets/blue-abstract-background_698452-2057.jpg";
import { menus } from "../libs/menus";
import HeroSection from "./HeroSection";
import Sidebar from "./Sidebar";

export default function Navbar() {

  const [state,setState] = useState(false)
  return (
    <div
      className="relative py-3 bg-cover h-[970px] lg:h-screen w-full"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className={`px-3 flex items-center lg:justify-between lg:py-5 lg:w-[80%] lg:mx-auto`}>
        <div className="lg:hidden">
          <svg
            onClick={() => setState(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-9 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <div className="">
          <img src={Logo} alt="" className="w-32 h-auto lg:w-36" />
        </div>
        <div className="">
          <ul className="hidden lg:flex gap-7">
            {menus.map((menu, index) => (
              <li
                className={`font-semibold text-white text-[17px] transition-colors ${
                  index === 0
                    ? "border-b-4  border-teal-500"
                    : "hover:border-b-4 hover:border-teal-500 duration-1000 ease-linear"
                }`}
              >
                {menu}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <HeroSection/>
      <Sidebar open={state} close={setState}/>
    </div>
  );
}
