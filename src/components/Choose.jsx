import React from "react";
import Header from "./shared/Header";
import { BiAlarm, BiMoneyWithdraw, BiStar } from "react-icons/bi";

function Choose() {
  let data = [
    {
      title: "We are faster",
      content:
        "Experience lightning-fast turnaround times without compromising on quality. Your project, delivered on time!",
      icon: <BiAlarm />,
    },
    {
      title: "We are cooler",
      content:
        "Stay ahead of the curve with sleek, modern websites that make your project stand out in style!",
      icon: <BiStar />,
    },
    {
      title: "We offer the best rates",
      content:
        "Get top-notch website design for your final year projects at unbeatable prices. Quality and affordability guaranteed!",
      icon: <BiMoneyWithdraw />,
    },
  ];
  return (
    <section className="process-section spad bg-[#f3f7f9]">
      <div className="container">
        <Header>Why choose Us</Header>
        <div className="row">
          {data.map((d) => (
            <div className="col-md-4 process ">
              <div className="process-step h-full font-[genty]">
                <span className="fx w-full text-7xl">{d.icon}</span>
                <h4 className="font-[genty] text-c1 mt-3">{d.title}</h4>
                <p>{d.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Choose;
