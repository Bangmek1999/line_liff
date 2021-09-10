import React from "react";

export default function Home() {
  return (
    <>
      {/* /HOME */}
      <section className="main-home" id="home">
        <div className="home-page-photo" /> {/* Background image */}
        <div className="home__header-content">
          <div id="main-home-carousel" className="owl-carousel">
            <div>
              <h1 className="intro-title">Start your own project</h1>
              <p className="intro-text">
                Lorem ipsum dolor sit amet consectetur adictum piscing elit
                fusce sit amet inerdum neque ultra icies <br /> pelentesque
                tempor justo a scelerisque placerat sit amet magna e.
              </p>
              <a className="btn btn-custom" href="#">
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* /End HOME */}
    </>
  );
}
