import React from "react";
import Header from "./shared/Header";
import Container from "./shared/Container";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.theme.green.css";

function Team() {
  let data = [
    {
      img: "img/team/me.svg",
      name: "David Udoh",
      position: "Chief Tech Officer(CTO)",
      description: "",
    },
    {
      img: "img/team/apex.jpg",
      name: "Godsent V.P Ozioma",
      position: "Founder/CEO",
      description: "",
    },
    {
      img: "img/team/photo.jpg",
      name: "Gospel Onyekwere",
      position: "Strategist/writer",
      description: "",
    },
  ];

  return (
    <section
      id="team"
      className="team-section overflow-hidden w-screen bg-white spad"
    >
      <Header>Meet our Team</Header>
      <Container className={"!max-w-[950px] overflow-hidden mt-20 lg:mt-0"}>
        <div className="block sm:hidden">
          <OwlCarousel items={1} loop margin={20} autoplay dots={true}>
            {data.map((d, key) => (
              <div className="fx w-full" key={key}>
                <div className="w-full even:scale-110 !max-w-[250px] group p-4">
                  <div className="rounded-full h-48 w-48 overflow-hidden fx group-even:shadow-xl  bg-white shadow-lg">
                    <img src={d.img} alt="" className="w-full h-full" />
                  </div>
                  <h3 className="text-center mt-4">{d.name}</h3>
                  <div className="text-center w-full">{d.position}</div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
        <div className=" !hidden sm:!grid grid-cols-3 grid-rows-1 justify-around">
          {data.map((d, key) => (
            <div
              className="row-span-1 col-span-1 flex items-start justify-center"
              key={key}
            >
              <div className="w-full flex flex-col items-center even:scale-110 md:!max-w-[250px] sm:!max-w-[100px] group ">
                <div className="rounded-full h-48 sm:h-32 sm:w-32 fx lg:w-40 lg:h-40 w-48 overflow-hidden group-even:shadow-xl  bg-blue-400 shadow-lg">
                  <img
                    src={d.img}
                    alt=""
                    className="bg-blue-600 w-full h-full"
                  />
                </div>

                <h4 className="text-center text-c3 mt-4">{d.name}</h4>
                <div className="text-center text-c3/80 w-full">
                  {d.position}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Team;
