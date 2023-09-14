import React from "react";
import trainer1 from "../assets/trainer1.png";
import trainer2 from "../assets/trainer2.png";
import trainer3 from "../assets/trainer3.png";
import trainer4 from "../assets/trainer4.png";

export default function Trainer() {
  return (
    <div>
      <h2 className="text-center text-4xl mt-24 font-bold">Trainers staff</h2>
      <div className="mt-12 grid grid-cols-1  sm:grid-cols-3 md:grid-cols-4 gap-4  ">
        <div className="bg-[#222222] w-[230px] mx-auto  rounded-md h-[350px]">
          <img src={trainer1} alt="" className="h-64 mx-auto mt-2 rounded" />
          <h4 className="text-center mt-6 text-lg">Victoria Shurpik</h4>
        </div>
        <div className="bg-[#222222] w-[230px] mx-auto rounded-md h-[350px]">
          <img src={trainer2} alt="" className="h-64 mx-auto mt-2 rounded" />
          <h4 className="text-center mt-6 text-lg">Victoria Shurpik</h4>
        </div>
        <div className="bg-[#222222] w-[230px] mx-auto rounded-md h-[350px]">
          <img src={trainer3} alt="" className="h-64 mx-auto mt-2 rounded" />
          <h4 className="text-center mt-6 text-lg">Victoria Shurpik</h4>
        </div>{" "}
        <div className="bg-[#222222] w-[230px] mx-auto rounded-md h-[350px]">
          <img src={trainer4} alt="" className="h-64 mx-auto mt-2 rounded" />
          <h4 className="text-center mt-6 text-lg">Victoria Shurpik</h4>
        </div>{" "}
        <div className="bg-[#222222] w-[230px] mx-auto rounded-md h-[350px]">
          <img src={trainer1} alt="" className="h-64 mx-auto mt-2 rounded" />
          <h4 className="text-center mt-6 text-lg">Victoria Shurpik</h4>
        </div>{" "}
        <div className="bg-[#222222] w-[230px]  mx-auto rounded-md h-[350px]">
          <img src={trainer2} alt="" className="h-64 mx-auto mt-2 rounded" />
          <h4 className="text-center mt-6 text-lg">Victoria Shurpik</h4>
        </div>{" "}
        <div className="bg-[#222222] w-[230px] mx-auto  rounded-md h-[350px]">
          <img src={trainer3} alt="" className="h-64 mx-auto mt-2 rounded" />
          <h4 className="text-center mt-6 text-lg">Victoria Shurpik</h4>
        </div>{" "}
        <div className="bg-[#222222] w-[230px] mx-auto rounded-md h-[350px]">
          <img src={trainer4} alt="" className="h-64 mx-auto mt-2 rounded" />
          <h4 className="text-center mt-6 text-lg">Victoria Shurpik</h4>
        </div>
      </div>
    </div>
  );
}
