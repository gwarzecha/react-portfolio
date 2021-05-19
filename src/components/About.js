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
            I am a Full-Stack Developer from PHX, AZ. Initially finding myself
            in the medical field with a background in Biomedical Sciences, a
            transition in focus to web development became the spark to realizing
            my potential as an individual. I've built responsive web
            applications using JavaScript, React, Node.js, MongoDB, and Express.
            I am working harder each day towards setting the bar higher by
            venturing outside of my comfort zone to build upon a steadily
            growing foundation of skill and team collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
