import React, { useRef } from "react";
import Header from "./shared/Header";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "./Image";

function Review() {
  // References for both sliders
  const reviewTextSlider = useRef(null);
  const reviewMetaSlider = useRef(null);

  const users = [
    {
      name: "Tito",
      title: "Graduate of computer science",
      img: "img/review/img(1).png",
    },
    { name: "Clara", title: "Founder", img: "img/review/img(2).png" },
    { name: "Jibril", title: "Technician", img: "img/review/img(3).png" },
  ];

  // Sync sliders on text slider change
  const onReviewTextChange = () => {
    if (reviewMetaSlider.current) {
      reviewMetaSlider.current.next();
    }
  };

  return (
    <section className="review-section bg-c2 spad">
      <div className="container">
        <Header className={"!mb-9"}>What our users say</Header>
        <div className="row">
          <div className="col-lg-8 push-8">
            <img src="img/quote.png" alt="" className="quote mb-5" />
            <OwlCarousel
              ref={reviewTextSlider}
              className="review-text-slider"
              items={1}
              loop
              nav
              dots={false}
              margin={20}
              onChange={onReviewTextChange}
              autoplay
              navText={["<", ">"]}
              animateOut="fadeOutDown"
              animateIn="fadeInDown"
            >
              <div className="review-text">
                <p>
                  "Creating my website felt daunting, but this service made it
                  effortless. The team understood my vision perfectly and
                  delivered a site that not only looks amazing but also performs
                  flawlessly. I couldn't be happier!"
                </p>
              </div>
              <div className="review-text">
                <p>
                  "The process was smooth, and the results exceeded my
                  expectations. My new website is modern, responsive, and easy
                  to navigate. The attention to detail was exceptional!"
                </p>
              </div>
              <div className="review-text">
                <p>
                  "What impressed me the most was how fast and affordable this
                  service is. My project was up and running in no time, and the
                  support team was always available to answer my questions."
                </p>
              </div>
            </OwlCarousel>
          </div>
          <div className="col-lg-4 pr-0 !pl-0 pull-3">
            <OwlCarousel
              className="review-meta-slider"
              items={3}
              ref={reviewMetaSlider}
              loop
              nav={false}
              dots
              center
              margin={20}
              autoplay
              mouseDrag={false}
            >
              {users.map((user, key) => (
                <div className="author-meta" key={key}>
                  <div className="author-avatar">
                    <Image
                      src={user.img}
                      loading={
                        <div className="w-full rounded-[3rem] h-full bg-black/15"></div>
                      }
                    />
                  </div>
                  <div className="author-name">
                    <h4>{user.name}</h4>
                    <p>{user.title}</p>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
