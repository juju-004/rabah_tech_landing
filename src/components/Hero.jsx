import React from "react";
import Image from "./Image";

function Hero() {
  let images = [
    "/img/bgimg(2).jpg",
    "/img/bgimg(1).png",
    "/img/bgimg(3).jpg",
    "/img/bgimg(1).jpg",
  ];
  return (
    <section className="hero-section flex flex-col justify-center h-screen md:h-[900px]">
      <div className="container">
        <div className="row">
          <div className="col-md-6 flex flex-col justify-center">
            <h2 className="text-c1 !text-6xl mb-10">Smart, Simple, Stunning</h2>
            <span className="text-5xl flex gap-4 text-c3 items-center">
              <span className="hidden lg:flex">-</span> Craft your websites with
              us!
            </span>
          </div>
          <div className="col-md-6 md:flex hidden">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 grid-rows-2 h-[400px]">
              {images.map((i, key) => {
                let className = (key + 1) % 2 === 0 ? "hidden lg:block" : "";
                return (
                  <div
                    className={`row-span-1 col-span-1 ${className}`}
                    key={key}
                  >
                    <Image
                      src={process.env.PUBLIC_URL + i}
                      loading={
                        <div
                          className={`shadow-2xl w-full h-full animate-pulse bg-black/25 -skew-x-6 `}
                        ></div>
                      }
                      className={`shadow-2xl w-full h-full -skew-x-6`}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
