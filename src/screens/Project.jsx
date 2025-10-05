import React from "react";
import Header from "../components/shared/Header";
import ProjectCards from "../components/ProjectCard";

function Project() {
  return (
    <>
      <section className="flex gradient-bg pt-32 flex-col justify-center">
        <div className="container overflow-hidden">
          <Header className={"text-white"}>Projects</Header>
          <div className="text-center text-c2 mb-2 -mr-6">
            Click on any project topic to get started
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center">
        <div className="container pt-6 pb-32 min-h-[80vh]">
          <ProjectCards />
        </div>
      </section>
    </>
  );
}

export default Project;
