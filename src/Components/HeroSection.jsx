import React from "react";
import appleLogo from "../assets/Apple_logo.png";
import arrowSvg from "../assets/icons arrow-right.svg";
import iphonePic from "../assets/iphone pic.jpg";

function HeroSection() {
  return (
    <div className=" w-full py-10">
      <div className=" max-w-6xl mx-auto bg-black text-white h-[344px] overflow-hidden">
        <div className=" max-w-5xl mx-auto py-5 flex space-x-5">
          <div className="py-7">
          <div className="flex items-center space-x-3">
            <img src={appleLogo} alt="Apple Logo" />
            <p className=" text-base">iPhone 14 Series</p>
          </div>
          <div className=" py-5">
            <h1 className="leading-[60px] text-5xl font-semibold">
              Up to 10% <br /> off Voucher
            </h1>
          </div>
          <div className="flex space-x-3 items-center">
            <button className="py-1 border-b text-base">Shop Now</button>
            <img src={arrowSvg} alt="" className="pt-1" />
          </div>
          </div>
            <div>
                <img src={iphonePic} alt="" />
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default HeroSection;
