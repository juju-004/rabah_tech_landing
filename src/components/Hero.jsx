import React from "react";

function Hero() {
  return (
    <section class="hero-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 hero-text">
            <h2>
              Invest in <span>Bitcoin</span> <br />
              Bitcoin Trading
            </h2>
            <h4>
              Use modern progressive technologies of Bitcoin to earn money
            </h4>
            <form class="hero-subscribe-from">
              <input type="text" placeholder="Enter your email" />
              <button class="site-btn sb-gradients">Get Started</button>
            </form>
          </div>
          <div class="col-md-6">
            <img
              src={process.env.PUBLIC_URL + "/img/laptop.png"}
              class="laptop-image"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
