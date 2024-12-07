import React, { useEffect } from "react";
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
  useEffect(() => {
    //  const loader = document.querySelector(".loader");
    const preloder = document.querySelector("#preloder");

    //  if (loader) loader.style.display = "none";
    if (preloder) {
      preloder.classList.add("fadeOut");
      setTimeout(() => {
        preloder.style.display = "none";
      }, 400);
    }
  }, []);

  return (
    <>
      <div id="preloder" className="">
        <div class="loader"></div>
      </div>

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
