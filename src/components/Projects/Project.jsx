import React from "react";
import "./Project.css";
import Header from "../shared/Header";

export default function Collection() {
  const collections = [
    {
      name: "Landing pages",
      profileImg: require("../../images/04.jpg"),
      image1: require("../../images/04.jpg"),
      image2: require("../../images/08.jpg"),
      image3: require("../../images/18.jpg"),
    },
    {
      name: "Ecommerce",
      profileImg: require("../../images/19.jpg"),
      image1: require("../../images/03.jpg"),
      image2: require("../../images/01.jpg"),
      image3: require("../../images/19.jpg"),
    },
    {
      name: "Blog",
      profileImg: require("../../images/05.jpg"),
      image1: require("../../images/05.jpg"),
      image2: require("../../images/11.jpg"),
      image3: require("../../images/09.jpg"),
    },
    {
      name: "Wordpress",
      profileImg: require("../../images/03.jpg"),
      image1: require("../../images/13.jpg"),
      image2: require("../../images/12.jpg"),
      image3: require("../../images/15.jpg"),
    },
    {
      name: "Business",
      profileImg: require("../../images/01.jpg"),
      image1: require("../../images/16.jpg"),
      image2: require("../../images/17.jpg"),
      image3: require("../../images/14.jpg"),
    },
    {
      name: "Fishy",
      profileImg: require("../../images/10.jpg"),
      image1: require("../../images/10.jpg"),
      image2: require("../../images/02.jpg"),
      image3: require("../../images/06.jpg"),
    },
  ];

  return (
    <section className="collection">
      <div className="container-fluid">
        <div className="fx">
          <Header spanItem={"Projects"} item={"Our"} />
        </div>
        <div className="row">
          {collections.map((collection, index) => (
            <div className="col-md-4" key={index}>
              <div className="collection-card">
                <div className="collection-card-header">
                  <img src={collection.profileImg} alt="Profile" />
                  <div className="collection-card-header-info">
                    <h3>{collection.name}</h3>
                  </div>
                </div>
                <div className="collection-card-images">
                  <div className="collection-card-left-image">
                    <img src={collection.image1} alt="Image1" />
                  </div>
                  <div className="collection-card-right-images">
                    <img src={collection.image2} alt="Image2" />
                    <img src={collection.image3} alt="Image3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
