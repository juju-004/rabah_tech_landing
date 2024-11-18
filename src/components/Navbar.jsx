import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Container from "./shared/Container";
import {
  BiLogoInstagram,
  BiLogoWhatsapp,
  BiLogoFacebook,
} from "react-icons/bi";

function Navbar() {
  const links = ["services", "projects", "team", "Our users"];
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
      console.log(window.scrollY);

      if (
        window.scrollY > 20 &&
        document.querySelector(".scroller").classList.contains("shadow-none")
      ) {
        document
          .querySelector(".scroller")
          .classList.replace("bg-transparent", "bg-white/60");
        document
          .querySelector(".scroller")
          .classList.replace("shadow-none", "shadow-md");
      } else if (
        window.scrollY < 21 &&
        document.querySelector(".scroller").classList.contains("shadow-md")
      ) {
        document
          .querySelector(".scroller")
          .classList.replace("shadow-md", "shadow-none");
        document
          .querySelector(".scroller")
          .classList.replace("bg-white/60", "bg-transparent");
      }
    });
  }, []);

  return (
    <nav className="w-screen flex z-[1000]  justify-center">
      <Container
        className={`Navbar fixed rounded-[30px] duration-200 shadow-none bg-transparent z-[1000] scroller backdrop-blur-xl py-3 fx top-3`}
      >
        <div className=" flex-1 pl-4">
          <span className="logo">
            <span className=" text-slate-400">
              <span className="text-blue-600 ">{"<"}</span>
              <span className="">rabah</span>
            </span>
            <span className="text-blue-600 ">tech{"/>"}</span>
          </span>
        </div>

        <div className="fx gap-6">
          <div className="items-center flex none pt-1 gap-4 px-2">
            {links.map((item, key) => (
              <>
                {key ? <span className="opacity-20">|</span> : <></>}
                <span key={key} className="nav-item">
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-link cursor-pointer active:scale-90 duration-300 scale-100 capitalize"
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
