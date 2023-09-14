import React from "react";
import {BiPhoneCall}from "react-icons/bi"
import {AiOutlineMail}from"react-icons/ai"
export default function Footer() {
  return (
    <div className="mt-28 flex items-center justify-between">
      <div className="hidden sm:flex flex-col">
        <h1 className="text-white text-[20px] font-light">
          GYM<span className="text-[#FAFF00]">24</span>
        </h1>
        <p className="mt-4 text-xs w-[350px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          atque corrupti voluptatibus eaque, suscipit sed doloremque qui aperiam
          numquam autem.
        </p>
      </div>
      <div>
        <h1 className="text-[20px]">ADRESS</h1>
        <p className="mt-4 text-xs w-[130px]">
          Republic Belarus Minsk city Dzerzhinsky Avenue 15
        </p>
      </div>
      <div>
        <h1 className="text-[20px]">Contact</h1>
        <p className="text-xs mt-4 flex items-center gap-1"><BiPhoneCall/>+375(44)-777-24-12</p>
        <p className="text-xs mt-2 flex items-center gap-1"><AiOutlineMail/>gym24@gmail.com</p>
      </div>
    </div>
  );
}
