import React from "react";
import Header from "./shared/Header";
import Container from "./shared/Container";
import Image from "./Image";
import { BiArrowToTop, BiUpArrow, BiUpArrowAlt } from "react-icons/bi";

function Projects() {
  let projects = [
    {
      title: "Agrohub",
      content:
        "Agripreneurship webapp for selling agri-courses, viewing agricultural news updates and more",
    },
    {
      title: "Care pulse",
      content:
        "Full healthcare appointment app built on ethereum blockchain network",
    },
  ];
  return (
    <section id="projects" className="spad text-white gradient-bg">
      <Header>Projects & Seminars</Header>
      <Container>
        <div className="grid mt-20 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-5">
          {projects.map((p, k) => (
            <div
              key={k}
              className=" row-span-1 col-span-1 p-1 bg-white/10 rounded-xl"
            >
              <div className=" rounded-md flex flex-col h-full">
                <div className="p-4 flex-1 text-center">
                  <h3 className="text-2xl">{p.title}</h3>
                  <span className="opacity-55">{p.content}</span>
                </div>
                <Image
                  src={`/img/projects/img(${k ? "1" : "3"}).png`}
                  loading={
                    <div className="rounded-xl bg-black/15 h-60 w-full"></div>
                  }
                  className="rounded-xl w-full"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div className="text-center w-full gap-5 fx mt-6">
        <a
          href="/project-topics"
          className="bg-white/15 fx hover:bg-white/25 hover:no-underline hover:text-white hover:scale-105 active:scale-95 duration-150 py-3 rounded-full px-5"
        >
          Projects topics <BiUpArrowAlt className="rotate-45" />
        </a>
        <a
          href="/seminar-topics"
          className="bg-white/15 fx hover:bg-white/25 hover:no-underline hover:text-white hover:scale-105 active:scale-95 duration-150 py-3 rounded-full px-5"
        >
          Seminar topics <BiUpArrowAlt className="rotate-45" />
        </a>
      </div>
    </section>
  );
}

export default Projects;
