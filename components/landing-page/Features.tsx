import { HeroImg } from "@/constants/svg";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="bg-aqua font-jakarta  p-5 md:py-10 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-center p-5 md:py-10 md:px-20">
        <Image src={HeroImg} alt="nexus-logo" className="w-full md:w-[50%]" />
        <article className="text-white flex flex-col justify-around md:justify-center h-[400px] px-10">
          <h1 className="text-4xl lg:text-4xl font-semibold md:my-[20px]">
            Radiswap{" "}
            <span className="fill-transparent stroke-white">Token</span>Swap
          </h1>
          <h2 className="md:my-[20px] text-gray-400">
            Our Mission: To empower Africa with Micro savings technology,
            offering a secure alternative to traditional mobile money services.
          </h2>
          <button className=" py-2 px-6 w-[150px] rounded-full border bg-gradient-to-br from-[#8BC2FF] to-[#2D55FF] font-semibold hover:bg-white hover:border-aqua hover:cursor-pointer">
            Launch App
          </button>
        </article>
      </div>
    </section>
  );
};

export default Features;
