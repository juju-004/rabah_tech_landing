import React from "react";
import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero/Hero";
import Why from "./components/Why/Why";
import Services from "./components/Services/Services";
// import Roadmap from "./components/Roadmap";
import Team from "./components/Team/Team";
import Projects from "./components/Projects/Project";
import Users from "./components/Users/Users";
import Footer from "./components/Footer";
import Break from "./components/Break";
import ParticlesBg from "particles-bg";

function HomePage() {
  return (
    <div className="">
      <div className="fixed inset-0 -z-10">
        <ParticlesBg type="lines" num={250} bg={true} />
      </div>
      <Navbar />
      <Hero id="hero" />
      <div className="bg-zinc-700/20 backdrop-blur-sm -z-10">
        <Break />
        <Why id="why" />
        <Break />
      </div>
      <div className="bg-zinc-700/20 backdrop-blur-sm -z-10">
        <Break />
        <Services id="services" />
        <Break />
      </div>
      <div className="bg-zinc-700/20 backdrop-blur-sm -z-10">
        <Break />
        <Projects id="projects" />
        <Break />
      </div>
      {/* <div className="bg-zinc-700/20">
        <Break />
        <Team id="team" />
        <Break />
      </div>
      <div className="bg-zinc-700/20">
        <Break />
        <Users id="users" />
        <Break />
      </div> */}
      <Footer />

      {/* 
      <Break />
      <Roadmap id="roadmap" />
      <Break />
      <Team id="team" />
      <Break />
      <Collection id="collection" />
      <Break />
      <QnA id="qna" />
      <Break />
      */}
    </div>
  );
}

export default HomePage;
