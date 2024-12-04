import React from "react";
import { BiUser } from "react-icons/bi";

function Fact() {
  const fact = [
    {
      number: "300",
      text: (
        <>
          Community <br /> members
        </>
      ),
    },
    { number: "40", text: <>Projects</>, icon: <BiUser /> },
    {
      number: "10",
      text: (
        <>
          Team <br />
          members
        </>
      ),
    },
    {
      number: "5",
      text: (
        <>
          Years of
          <br />
          experience
        </>
      ),
    },
  ];
  return (
    <section className="fact-section gradient-bg">
      <div className="container">
        <div className="grid grid-cols-4 grid-rows-1 gap-1 lg:gap-1">
          {fact.map((f, k) => (
            <div className="fact fx lg:py-0 py-4 gap-4 col-span-4 sm:col-span-2 lg:col-span-1 row-span-1">
              <h2 className="text-white rbh text-5xl">
                {f.number}
                <span className="opacity-45">+</span>
              </h2>
              <p className="text-c2">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Fact;
