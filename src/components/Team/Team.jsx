import React, { useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Team.css";
import Header from "../shared/Header";

const teamMembers = [
  {
    name: "Precious Ozioma",
    jobTitle: "Cheif Marketing Strategist",
    image: require("../../images/04.jpg"),
  },
  {
    name: "David Udoh",
    jobTitle: "Cheif Programmer",
    image: require("../../images/08.jpg"),
  },
];

export default function Team() {
  const carouselRef = useRef();

  return (
    <section className="team">
      <div className="container-fluid">
        <div className="fx">
          <Header spanItem={"team"} item={"Our"} />
        </div>
        <div className="row">
          <div className="team-descreption col-2">
            <p>Introducing Our Talented Crew</p>
          </div>
          <div className="col-10 flex">
            {teamMembers.map((member, innerIndex) => (
              <div className="team-member" key={innerIndex}>
                <div className="team-member-image">
                  <img src={member.image} alt="Team Member" />
                </div>
                <div className="team-member-details">
                  <p>{member.jobTitle}</p>
                  <h3>
                    {member.name.split(" ").map((namePart, i) => (
                      <React.Fragment key={i}>
                        {namePart}
                        <br />
                      </React.Fragment>
                    ))}
                  </h3>
                  <div className="social-links">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a
                      href="https://discord.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-discord"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
