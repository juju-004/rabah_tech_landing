import React from "react";

function Hero() {
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
              <div className="row-span-1 col-span-1">
                <img
                  src={process.env.PUBLIC_URL + "/img/bgimg(2).jpg"}
                  className="shadow-2xl w-full h-full -skew-x-6"
                  alt=""
                />
              </div>
              <div className="row-span-1 col-span-1 hidden lg:block">
                <img
                  src={process.env.PUBLIC_URL + "/img/bgimg(1).png"}
                  className="shadow-2xl w-full h-full -skew-x-6"
                  alt=""
                />
              </div>
              <div className="row-span-1 col-span-1">
                <img
                  src={process.env.PUBLIC_URL + "/img/bgimg(3).jpg"}
                  className="shadow-2xl w-full h-full -skew-x-6"
                  alt=""
                />
              </div>
              <div className="row-span-1 col-span-1 hidden lg:block">
                <img
                  src={process.env.PUBLIC_URL + "/img/bgimg(1).jpg"}
                  className="shadow-2xl w-full h-full -skew-x-6"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
