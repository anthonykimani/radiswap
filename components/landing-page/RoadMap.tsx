import { RoadMapImg } from "@/constants/svg";
import Image from "next/image";
import React from "react";

const RoadMap = () => {
  return (
    <section className="flex flex-col items-center font-jakarta py-[50px]">
      <div className="flex flex-col xsm:flex-row xsm:my-2 items-center text-center">
        <span className="px-0 xsm:px-5">
          <h3 className="font-semibold text-3xl xsm:text-3xl">
            Swap and Spend Today
          </h3>
          <p className="text-[#596780] mt-2 text-lg">
            {" "}
            Stake Tokens, Spend in Stablecoins on Radiswap
          </p>
          <div className="flex justify-around">
            <button className="py-2 px-6 w-[150px] rounded-full bg-white text-[#8BC2FF] font-semibold hover:bg-white hover:border-aqua hover:cursor-pointer">
              LAUNCH EXCHANGE
            </button>
            <button className="py-2 px-6 w-[150px] rounded-full bg-white text-[#8BC2FF] font-semibold hover:bg-white hover:border-aqua hover:cursor-pointer">
              CREATE AN ACCOUNT
            </button>
          </div>
        </span>
      </div>
    </section>
  );
};

export default RoadMap;
