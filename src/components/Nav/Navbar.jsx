import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../../images/logo.svg";
import facebook from "../../images/svg-facebook.svg";
import whatsapp from "../../images/svg-whatsapp.svg";
// import twitter from "../../images/svg-twitter.svg";
import instagram from "../../images/svg-instagram.svg";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["services", "projects", "team", "Our users"];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-screen flex z-[1000]  justify-center">
      <section
        className={`Navbar fixed z-[1000] py-3 fx backdrop-blur-lg top-0 mx-auto`}
      >
        <div className=" flex-1 pl-4">
          <span className="logo">
            rabah<span className="grad">tech</span>
          </span>
        </div>
        <div className="items-center md:flex none pt-1 gap-5 px-2">
          {links.map((item, key) => (
            <span key={key} className="nav-item">
              <Link
                to={item}
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link  capitalize"
              >
                {item}
              </Link>
            </span>
          ))}
        </div>
        <div className="d-flex flex-1 justify-end align-items-center">
          <a href="https://twitter.com" className="btn">
            <img src={facebook} alt="Logo" />
          </a>
          <a href="https://twitter.com" className="btn ">
            <img src={whatsapp} alt="Logo" />
          </a>
          <a href="https://twitter.com" className="btn ">
            <img src={instagram} alt="Logo" />
          </a>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
