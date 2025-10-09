import { useEffect } from "react";
import Container from "./shared/Container";
import { BiLogoWhatsapp, BiLogoFacebook, BiLogoYoutube } from "react-icons/bi";
import Logo from "./shared/Logo";

function Navbar() {
  const links = ["services", "projects & seminars", "Testimonials", "team"];
  const icons = [
    {
      icon: <BiLogoFacebook />,
      className: "bg-blue-500",
      link: "https://www.facebook.com/profile.php?id=61564479796384",
    },
    {
      icon: <BiLogoWhatsapp />,
      className: "bg-green-500",
      link: "https://wa.me/2347036869758?text=Hi%20there!%20I%27d%20like%20to%20chat%20with%20you.",
    },
    {
      icon: <BiLogoYoutube className="text-red-600" />,
      className: "bg-white",
      link: "https://www.youtube.com/@RabahTechDev",
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
        className={`rounded-[30px] duration-200 shadow-none bg-transparent scroller py-[11px] flex justify-between sm:justify-around lg:justify-between items-center`}
      >
        <div className=" md:pl-4">
          <a href={"/#"} style={{ textDecoration: "none" }}>
            <Logo />
          </a>
        </div>
        <div className="fx gap-6">
          <div className="lg:flex hidden justify-center items-center none pt-1 gap-4 px-2">
            {links.map((item, key) => (
              <>
                {key ? <span className="opacity-20">|</span> : <></>}
                <span key={key} className="nav-item">
                  <a
                    href={`/#${item.split(" ")[0]}`}
                    className="nav-link cursor-pointer rbh active:text-blue-600 text-white duration-300 scale-100 capitalize"
                  >
                    {item}
                  </a>
                </span>
              </>
            ))}
          </div>
          <div className="fx gap-3">
            {icons.map((i, key) => (
              <a
                href={i.link ?? "google.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={`w-7 h-7 duration-150 hover:scale-105 active:scale-75 active:rotate-2 hover:rotate-2 relative rounded-lg fx text-white text-xl overflow-hidden ${i.className}`}
                  key={key}
                >
                  {i.icon}
                  <span className="absolute h-1/2 w-full bg-black/10 z-10 bottom-0"></span>
                </button>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
