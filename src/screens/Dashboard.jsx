import React from "react";
import Hero from "../components/Hero";
import Choose from "../components/Choose";
import Services from "../components/Services";
import Review from "../components/Review";
import Team from "../components/Team";
import Fact from "../components/Fact";
import Projects from "../components/Projects";

function Dashboard() {
  return (
    <>
      <Hero />
      <Choose />
      <Services />
      <Projects />
      <Review />
      <Team />
      <Fact />
    </>
  );
}

export default Dashboard;
