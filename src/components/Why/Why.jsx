import React from "react";
import "./Why.css";
import Header from "../shared/Header";

export default function Why() {
  const title = ["faster", "cooler", "affordable"];

  const content = [
    " Get your sites finished in less than 2weeks",
    "You never have to worry about the beauty of your project",
    "We create at better market rates",
  ];

  let classN = ["sm:pl-8", "sm:pl-16", "sm:pl-32"];

  return (
    <section className="why">
      <div className="container-fluid">
        <div className="content">
          <Header item={"Why"} spanItem={"choose us"} />
          <div className="flex flex-col gap-3">
            {title.map((item, key) => (
              <div
                key={key}
                className={`flex sm:gap-10 flex-col sm:flex-row w-full ${classN[key]}`}
              >
                <h3 className="text-7xl pt-4">#{key + 1}</h3>
                <div className="bg-black/20 flex flex-col sm:flex-row p-8 text-white gap-3 flex-1 rounded-3xl">
                  <h3 className="text-zinc-400 text-left text-3xl rounded-xl sm:rounded-none sm:pr-7 border-r-0 sm:border-r-2 border-black">
                    <span className="whitespace-nowrap">We are</span> <br />{" "}
                    {item}
                  </h3>
                  <span className="text-3xl text-left">{content[key]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
