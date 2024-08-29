import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Why from './components/Why';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Collection from './components/Collection';
import QnA from './components/QnA';
import Footer from './components/Footer';
import Break from './components/Break';

function HomePage() {
  return (
    <div>
      <Navbar />
      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text  font-extrabold text-transparent text-3xl md:text-5xl">
        {`Have a smooth meeting`}
      </h1>
      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent text-3xl md:text-5xl">
        <span className="block">with team members</span>
      </h1>

      <Hero id="hero" />
      <Break />
      <Why id="why" />
      <Break />
      <About id="about" />
      <Break />
      <Roadmap id="roadmap" />
      <Break />
      <Team id="team" />
      <Break />
      <Collection id="collection" />
      <Break />
      <QnA id="qna" />
      <Break />
      <Footer />
    </div>
  );
}

export default HomePage;
