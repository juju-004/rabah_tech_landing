import React from "react";
import Logo from "./shared/Logo";
import Container from "./shared/Container";
import { Link } from "react-router-dom";

function Footer() {
  const links = [
    {
      name: "facebook",
      link: "https://www.facebook.com/profile.php?id=61564479796384",
    },
    {
      name: "Whatsapp",
      link: "https://wa.me/2347036869758",
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/@RabahTechDev",
    },
  ];

  return (
    <footer className=" bg-black/20 text-center w-full py-10">
      <Container>
        <div className="row">
          <div className="col-md-6 font-bold flex items-start text-5xl">
            <Logo />
          </div>
          <div className="col-md-6">
            <div className="row links text-c3">
              <div className="col-md-6 mt-14 md:mt-0">
                <h3>Quick Links</h3>
                <Link
                  className="hover:text-c1 text-c2 hover:no-underline duration-150"
                  to={"/projects"}
                >
                  Projects
                </Link>
                <span>Terms of service</span>
                <span>Privacy Policy</span>
                <span>About Us</span>
              </div>
              <div className="col-md-6 mt-14 md:mt-0">
                <h3>Social</h3>
                {links.map((i, key) => (
                  <a
                    key={key}
                    className="hover:text-c1 text-c2 hover:no-underline duration-150"
                    href={i.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {i.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
