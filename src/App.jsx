import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Choose from "./components/Choose";
import Team from "./components/Team";
import Fact from "./components/Fact";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Choose />
      <Services />
      <Projects />
      <Review />
      <Team />
      <Fact />
      <Footer />
    </>
  );
}

export default App;
