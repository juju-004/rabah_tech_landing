import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Container from "./shared/Container";
import {
  BiLogoInstagram,
  BiLogoWhatsapp,
  BiLogoFacebook,
} from "react-icons/bi";
import Logo from "./shared/Logo";

function Navbar() {
  const links = ["services", "projects", "Our users", "team"];
  const icons = [
    {
      icon: <BiLogoFacebook />,
      className: "bg-blue-500",
    },
    { icon: <BiLogoWhatsapp />, className: "bg-green-500" },
    {
      icon: <BiLogoInstagram />,
      className: "from-purple-600 to-orange-400 bg-gradient-to-br",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (
        window.scrollY > 20 &&
        !document.querySelector(".scroller").classList.contains("active")
      ) {
        document.querySelector(".scroller").classList.add("active");
      } else if (
        window.scrollY < 21 &&
        document.querySelector(".scroller").classList.contains("active")
      ) {
        document.querySelector(".scroller").classList.remove("active");
      }
    });
  }, []);

  return (
    <nav className="w-screen flex top-3 fixed  genty px-2 z-[1000] justify-center">
      <Container
        className={`rounded-[30px] !px-5 duration-200 shadow-none bg-transparent scroller py-[11px] fx`}
      >
        <div className=" flex-1 md:pl-4">
          <Logo />
        </div>
        <div className="fx gap-6">
          <div className="lg:flex hidden justify-center items-center none pt-1 gap-4 px-2">
            {links.map((item, key) => (
              <>
                {key ? <span className="opacity-20">|</span> : <></>}
                <span key={key} className="nav-item">
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-link cursor-pointer active:text-blue-600 text-white duration-300 scale-100 capitalize"
                  >
                    {item}
                  </Link>
                </span>
              </>
            ))}
          </div>
          <div className="fx gap-3">
            {icons.map((i, key) => (
              <button
                className={`w-7 h-7 duration-150 hover:scale-105 active:scale-75 active:rotate-2 hover:rotate-2 relative rounded-lg fx text-white text-xl overflow-hidden ${i.className}`}
                key={key}
              >
                {i.icon}
                <span className="absolute h-1/2 w-full bg-black/10 z-10 bottom-0"></span>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
