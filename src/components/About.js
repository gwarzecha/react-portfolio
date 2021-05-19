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
            I am a full-stack web developer from PHX, AZ. Web development
            provides an outlet for combinging my creative passions with
            practical problem solving abilities. Initially finding myself in the
            medical field with a background in Biomedical Sciences, a transition
            in focus to web development became the spark to realizing my
            potential as an individual. As a problem-solver with strong
            technical skills, accustomed to thriving in a highly collaborative
            and ever-evolving environment, I am working harder each day towards
            setting the bar higher, venturing outside of my comfort zone, and
            building upon a steadily growing foundation of skill and team
            collaboration.
            <br></br>
            <br></br>
            In my freetime I enjoy collecting vinyl, reading, drawing, being
            outdoors, and hanging out with my wife and two cats.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
