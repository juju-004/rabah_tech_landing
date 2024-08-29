import React from "react";
import ParticlesBg from "particles-bg";

function Hero() {
  return (
    <section id="hero" className="relative h-52 w-full">
      <ParticlesBg type="lines" num={50} bg={true} />
      <div className="container valign-wrapper jc-center">
        <div className="valign center-align white-text">
          <h2>YOUR JAVASCRIPT LIBRARY</h2>

          <p className="big">
            We build your website using cutting edge frameworks
            <br />
            entirely customized and made to order
          </p>

          <a className="btn waves-light waves-effect m-r-16">Feature</a>
          <a
            className="btn waves-light waves-effect"
            target="_blank"
            href="https://github.com/nordicgiant2/cool-landing"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
