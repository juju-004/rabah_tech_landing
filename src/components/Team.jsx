import React from "react";
import Header from "./shared/Header";
import Container from "./shared/Container";
import { BiLogoFacebook, BiLogoTwitter, BiLogoGithub } from "react-icons/bi";

function Team() {
  let data = [
    {
      img: "img/review/img(1).png",
      name: "David Udoh",
      position: "Chief developer",
      description: "",
    },
    {
      img: "img/review/img(1).png",
      name: "Precious",
      position: "Chief Marketer(CEO)",
      description: "",
    },
    {
      img: "img/review/img(1).png",
      name: "Gospel",
      position: "Digital Marketer",
      description: "",
    },
  ];

  return (
    <section className="team-section bg-white spad">
      <Header>Meet our Team</Header>
      <Container className={"!max-w-[950px]"}>
        <div className="row">
          {data.map((d, key) => (
            <div className="col-md-4" key={key}>
              <div className="member w-full">
                <div className="member-text">
                  <div className="member-img">
                    <img src={d.img} alt="" />
                  </div>
                  <h2>{d.name}</h2>
                  <span>{d.position}</span>
                </div>
                <div className="member-social flex justify-center">
                  <a href="" className="text-2xl !flex !justify-center">
                    {key ? <BiLogoFacebook /> : <BiLogoGithub />}
                  </a>
                  <a href="" className="text-2xl !flex !justify-center">
                    <BiLogoTwitter />
                  </a>
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
