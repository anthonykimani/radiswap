import { AboutImg } from "@/constants/svg";
import { aboutSource } from "@/helpers/aboutSource";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="flex flex-col items-center font-jakarta">
      <h3 className="text-aqua font-semibold text-xl">WHY USE RADISWAP</h3>
      <h2 className="text-center text-3xl xsm:text-[40px] font-bold my-2">
        Easy, Simple, Affordable
      </h2>
      <h4 className="text-[#596780ab] text-center text-base xsm:text-lg md:text-xl">
        Empowering the African community through inclusive savings, providing
        exclusive futures for every individual.
      </h4>
        <article className="flex flex-col md:flex-row justify-around md:justify-around lg:h-[500px]">
          {aboutSource.map((element, index) => {
            return (
              <div
                key={index}
                className="flex flex-col xsm:flex-row xsm:my-2 items-center text-center"
              >
                <Image
                  src={element.icon}
                  alt="wallet"
                  className="my-5 xsm:m-0 h-[200px]"
                />
                <span className="px-0 xsm:px-5">
                  <h3 className="font-semibold text-3xl xsm:text-3xl">
                    {element.title}
                  </h3>
                  <p className="text-[#596780] mt-2 text-lg">{element.subtitle}</p>
                </span>
              </div>
            );
          })}
        </article>
    </section>
  );
};

export default About;
