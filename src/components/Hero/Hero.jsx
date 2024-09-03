import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero bg-black/60 z-30 fx h-[95vh]">
      <div className="content flex sm:flex-row flex-col sm:items-center items-start gap-4">
        <h1 className="sm:border-r-2 border-b-2 border-zinc-800/20 flex flex-col sm:items-end items-start font-[suse] pb-2 sm:pb-0 sm:pr-9">
          <span className="sm:text-[90px] text-[60px] text-zinc-500">
            Rabah
          </span>
          <span className="sm:text-[75px] text-[40px] -mt-6">tech</span>
        </h1>
        <h3 className="text-left text-zinc-500">
          Create your dream <br /> projects
          <span className="grad">with us</span>
        </h3>
      </div>
    </section>
  );
}
