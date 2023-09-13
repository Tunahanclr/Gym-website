import React from "react";
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"

export default function Reasons() {
  return (
    <div>
      <h3 className="text-white font-bold text-4xl ">Reasons to join</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 gap-6 ">
        <div className="flex flex-col">
            <div className="flex items-center">
                <img src={icon1} className="w-6" alt="" />
          <h2 className="text-white text-lg font-bold">15000 sq.m</h2>  
            </div>
          <p className="text-sm text-gray-300">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, possimus? Doloribus odit blanditiis corporis velit.
          </p>
        </div>
        <div>
        <div className="flex items-center">
                <img src={icon3} className="w-6" alt="" />
          <h2 className="text-white text-lg font-bold">15000 sq.m</h2>  
            </div>          <p className="text-sm text-gray-300">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reprehenderit quas earum ipsum eos? Fugit.
          </p>
        </div>
        <div>
        <div className="flex items-center">
                <img src={icon2} className="w-6" alt="" />
          <h2 className="text-white text-lg font-bold">15000 sq.m</h2>  
            </div>          <p className="text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint deserunt officiis deleniti voluptas neque iste?
          </p>
        </div>
        <div>
        <div className="flex items-center">
                <img src={icon4} className="w-6" alt="" />
          <h2 className="text-white text-lg font-bold">15000 sq.m</h2>  
            </div>          <p className="text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint deserunt officiis deleniti voluptas neque iste?
  
          </p>
        </div>
      </div>
    </div>
  );
}
