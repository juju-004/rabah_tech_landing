import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import Container from "./shared/Container";

export default function Hero() {
  return (
    <section className="hero text-white bg-slate-300 z-30 bgstrg relative flex items-center h-[95vh] w-full mx-auto">
      <Container className="flex !px-14 sm:flex-row flex-col sm:items-center items-start gap-4">
        <h1 className="sm:border-r-2 flex flex-col sm:items-end items-start font-[suse] pb-2 sm:pb-0 sm:pr-9">
          <span className="sm:text-[90px] text-[60px] text-slate-400">
            rabah
          </span>
          <span className="sm:text-[75px] text-[40px] -mt-6 text-blue-600">
            tech
          </span>
        </h1>
        <h3 className="text-left text-slate-400 text-3xl">
          Create your dream <br /> projects{" "}
          <span className="text-blue-600">with us</span>
        </h3>
      </Container>
      <div className="absolute -top-[40%] -z-20 -right-[10%] -rotate-[35deg] fx px-3">
        {/* <div className="grid grid-cols-3 grid-rows-4 gap-5">
          {Array(12)
            .fill("")
            .map((_, k) => {
              let src = `${process.env.PUBLIC_URL}/images/img(${k + 1}).jpg`;

              return (
                <div
                  className={`inline-block col-span-1 shadow-xl row-span-1 py-8 px-3 rounded-xl bg-white`}
                >
                  <img
                    src={src}
                    className="w-40 h-40"
                    alt={`Background ${k}`}
                  />
                </div>
              );
            })}
        </div> */}
      </div>
    </section>
  );
}
