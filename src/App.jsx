import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import Projects from "./components/Projects/Project";
// import Users from "./components/Users/Users";
import Footer from "./components/Footer";
import Break from "./components/Break";

function App() {
  let pages = [
    { page: <Why />, id: "why" },
    { page: <Services />, id: "services" },
    { page: <Projects />, id: "projects" },
    { page: <Team />, id: "team" },
  ];

  return (
    <div className="">
      <Navbar />
      <Hero id="hero" />
      {pages.map((page, i) => (
        <div id={page.id} key={i} className=" -z-10">
          <Break />
          {page.page}
          <Break />
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default App;
