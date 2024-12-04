import React from "react";
import Logo from "./shared/Logo";
import Container from "./shared/Container";

function Footer() {
  return (
    <footer className=" bg-black/20 text-center w-full py-10">
      <Container>
        <div className="row">
          <div className="col-md-6 font-bold flex items-start text-5xl">
            <Logo />
          </div>
          <div className="col-md-6">
            <div className="row links !text-c3">
              <div className="col-md-6 mt-14 md:mt-0">
                <h3>Quick Links</h3>
                <span>Projects</span>
                <span>Terms of service</span>
                <span>Privacy Policy</span>
                <span>About Us</span>
              </div>
              <div className="col-md-6 mt-14 md:mt-0">
                <h3>Social</h3>
                <span>facebook</span>
                <span>instagram</span>
                <span>Whatsapp community</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
