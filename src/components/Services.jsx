import React from "react";
import Header from "./shared/Header";
import Container from "./shared/Container";

function Services() {
  const services = [
    "Websites",
    "App development",
    "Final year project work & writing",
  ];
  return (
    <section id="services" className="about-section spad">
      <Container className={"service"}>
        <div className="row items-center">
          <div className="col-md-6">
            <img src="img/serviceImg.svg" alt="" />
          </div>
          <div className="col-md-6">
            <Header className={"!text-left"} style>
              Our Services
            </Header>
            <p className="text-c3 text-center md:text-left">
              Explore our range of services designed to bring your final year
              project to life. From custom website design to seamless
              functionality, we provide everything you need to make a lasting
              impression!
            </p>
            <div className="flex flex-col gap-8 mt-7">
              {services.map((d, k) => (
                <span
                  key={k}
                  className={`relative text-2xl text-blue-500 flex items-center font-bold`}
                >
                  <span className="absolute -left-4 text-6xl rbh text-c3/5">
                    {k + 1}
                  </span>
                  <span className="z-10">{d}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Services;
