import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNavbar = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between h-14 items-center">
      <div className="flex">
        <h1 className="text-white text-[20px] font-light">
          GYM<span className="text-[#FAFF00]">24</span>
        </h1>
      </div>
      <div>
        <ul className="hidden sm:flex items-center sm:gap-4 md:gap-16">
          <li className="text-sm">
            <a href="">Advantages</a>
          </li>
          <li className="text-sm">
            <a href="">Membership</a>
          </li>
          <li className="text-sm">
            <a href="">About</a>
          </li>
          <li className="text-sm">
            <a href="">Trainers</a>
          </li>
        </ul>
        {/* responsive bar */}
        <FaBars
          size={20}
          className="flex sm:hidden cursor-pointer"
          onClick={handleNavbar}
        />
      </div>
      {nav && (
        <>
          <div className="bg-black/80 left-0 fixed w-full h-screen z-10 top-0"></div>
          <div className={nav ? 'fixed sm:hidden duration-300 transition-all  z-10 h-full bg-white top-0 left-0  w-[200px] xs:w-[300px]':'fixed sm:hidden duration-300 transition-all h-screen z-10 bg-white top-0 left-[-%100]  w-[300px]'}>
            <div className="bg-white  p-4">
              <AiOutlineClose
                className="text-black absolute top-0 right-0 pr-2 mt-3 font-bold flex items-center"
                size={32}
                onClick={handleNavbar}
              />
              <h1 className="text-black font-bold text-[20px] ">
                GYM<span className="text-yellow-500 ">24</span>
              </h1>
              <nav>
                <ul className="text-black gap-10 font-bold text-xl flex flex-col justify-center items-center mt-32">
                  <li className=" text-base xs:text-xl ">
                    <a href="">Advantages</a>
                  </li>
                  <li className="text-base xs:text-xl">
                    <a href="">Membership</a>
                  </li>
                  <li className="text-base xs:text-xl ">
                    <a href="">About</a>
                  </li>
                  <li className="text-base xs:text-xl ">
                    <a href="">Trainers</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
