import React from "react";
import headshot from "../assets/images/updatedHeadshot.png";

const About = () => {
  return (
    <section className="container d-flex justify-content-center">
      <div className="row aboutSection">
        <div className="col-md-12 col-sm-12 col-lg-4 d-flex justify-content-center align-self-center">
          <img src={headshot} className="headshot" alt="headshot"></img>
        </div>
        <div className="col-md-12 col-sm-12 col-lg-8 d-flex p-2 mt-4">
          <p className="d-flex align-self-center secondaryFont">
            I am a Full-Stack Developer from PHX, AZ. I am currently a Technical
            Support Specialist for ClickUp, providing client support and
            solutions for various bugs and other issues they encounter. I've
            built responsive web applications using JavaScript and technologies
            such as React, Node.js, MongoDB, and Express. I am working harder
            each day towards setting the bar higher by venturing outside of my
            comfort zone to build upon a steadily growing foundation of skill
            and team collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
