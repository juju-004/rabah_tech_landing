import React from "react";
import Header from "./shared/Header";
import Container from "./shared/Container";
import { BsClockFill, BsStars, BsPiggyBankFill } from "react-icons/bs";

export default function Why() {
  const title = ["faster", "cooler", "affordable"];

  const content = [<BsClockFill />, <BsStars />, <BsPiggyBankFill />];

  return (
    <Container className="why flex flex-col items-center">
      <Header item={"Why"} spanItem={"choose us"} />
      <div className="flex gap-3 w-full">
        {title.map((item, key) => (
          <div
            key={key}
            className={`flex flex-1 sm:gap-4 flex-col items-center w-full`}
          >
            <h3 className="text-7xl pt-4 text-slate-400 opacity-40">
              #{key + 1}
            </h3>
            <div className="bg-slate-100 w-full flex items-center flex-col p-8 text-white gap-3 flex-1 rounded-[30px]">
              <h2 className="text-9xl py-6 text-blue-600">{content[key]}</h2>
              <h3 className=" text-slate-500 w-full text-3xl rounded-xl text-center sm:rounded-none sm:pr-7 ">
                <span className="whitespace-nowrap text-center">We are</span>{" "}
                <br />
                {item}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
