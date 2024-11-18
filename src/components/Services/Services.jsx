import React from "react";
import "./Services.css";
// import collectionImage from "";
import Header from "../shared/Header";

export default function About() {
  return (
    <section className="about">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 about-image">
            <img
              src={process.env.PUBLIC_URL + "/images/img(7).jpg"}
              className=""
              alt="Collection"
            />
          </div>
          <div className="col-md-6 flex flex-col items-start justify-center panel-content">
            <Header spanItem={"Services"} item={"Our"} br />
            <ul className="list-disc text-2xl text-slate-600">
              <li>School Projects</li>
              <li>Websites & Webapps</li>
              <li>IT Training</li>
              <li>Web development Training</li>
              <li>Tech Marketing</li>
            </ul>
          </div>

          <div className="row justify-content-center boxs">
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-layers"></i>
                <h2>400+</h2>
                <p>Projects</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-person-circle"></i>
                <h2>20+</h2>
                <p>Team Members</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-person-hearts"></i>
                <h2>1860+</h2>
                <p>Community members</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-rocket-takeoff-fill"></i>
                <h2>2.5x</h2>
                <p>Estimated value</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
