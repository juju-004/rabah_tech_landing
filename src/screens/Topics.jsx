import React from "react";
import Header from "../components/shared/Header";
import ProjectCards from "../components/ProjectCard";

function Topics({ header, data, isSeminar = false }) {
  return (
    <>
      <section className="flex gradient-bg pt-32 flex-col justify-center">
        <div className="container overflow-hidden">
          <Header className={"text-white"}>{header}</Header>
        </div>
      </section>
      <section className="flex flex-col justify-center">
        <div className="container pt-6 pb-32 min-h-[80vh]">
          <ProjectCards projects={data} isSeminar={isSeminar} />
        </div>
      </section>
    </>
  );
}

export default Topics;
