import React from "react";

const Resume = () => {
  return (
    <section className="container resumeCont d-flex justify-content-center">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <h2 className="mainFont pb-4">
            <a
              href="https://docs.google.com/document/d/1fjfslIhiA87JXA_jZkCM74_DHdbwqm7DfytbZshHtFc/edit?usp=sharing"
              className="resume mainFont"
              target="_blank"
              rel="noreferrer"
            >
              Click to view my resume
            </a>
          </h2>
        </div>
        <div className="col-12 d-flex justify-content-center mb-1">
          <h3 className="mainFont pb-2 m-2">Skills and Proficiencies</h3>
        </div>

        <div className="row d-flex flex-direction-row flex-wrap justify-content-center m-4">
          {" "}
          <a
            className="devicon-link"
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="col-sm-4 col-md-2 p-3">
              <i className="devicon devicon-nodejs-plain-wordmark colored"></i>
            </div>
          </a>
          <a
            className="devicon-link"
            href="https://devcenter.heroku.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="col-sm-4 col-md-2 p-3">
              <i className="devicon devicon-heroku-plain-wordmark colored"></i>
            </div>
          </a>
          <a
            className="devicon-link"
            href="https://expressjs.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="col-sm-4 col-md-2 p-3">
              <i className="devicon devicon-express-original-wordmark colored"></i>
            </div>
          </a>
          <a
            className="devicon-link"
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="col-sm-4 col-md-2 p-3">
              <i className="devicon devicon-mongodb-plain-wordmark colored"></i>
            </div>
          </a>
          <a
            className="devicon-link"
            href="https://www.npmjs.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="col-sm-4 col-md-2 p-3">
              <i className="devicon devicon-npm-original-wordmark colored"></i>
            </div>
          </a>
          <a
            className="devicon-link"
            href="https://git-scm.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="col-sm-4 col-md-2 p-3">
              <i className="devicon devicon-git-plain-wordmark colored"></i>
            </div>
          </a>
          <a
            className="devicon-link"
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="col-sm-4 col-md-2 p-3">
              <i className="devicon devicon-visualstudio-plain-wordmark colored"></i>
            </div>
          </a>
          <a
            className="devicon-link"
            href="https://www.mysql.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="col-sm-4 col-md-2 p-3">
              <i className="devicon devicon-mysql-plain-wordmark colored"></i>
            </div>
          </a>
          <a
            className="devicon-link"
            href="https://handlebarsjs.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="col-sm-4 col-md-2 p-3">
              <i className="devicon devicon-handlebars-plain-wordmark colored"></i>
            </div>
          </a>
          <a
            className="devicon-link"
            href="https://sequelize.org/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="col-sm-4 col-md-2 p-3">
              <i className="devicon devicon-sequelize-plain-wordmark colored"></i>
            </div>
          </a>
          <a
            className="devicon-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="col-sm-4 col-md-2 p-3">
              <i className="devicon devicon-react-plain-wordmark colored"></i>
            </div>
          </a>
          <a
            className="devicon-link"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
          >
            <div className="col-sm-4 col-md-2 p-3">
              <i className="devicon devicon-css3-plain-wordmark colored"></i>
            </div>
          </a>
          <a
            className="devicon-link"
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="col-sm-4 col-md-2 p-3">
              <i className="devicon devicon-bootstrap-plain-wordmark colored"></i>
            </div>
          </a>
          <a
            className="devicon-link"
            href="https://jquery.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="col-sm-4 col-md-2 p-3">
              <i className="devicon devicon-jquery-plain-wordmark colored"></i>
            </div>
          </a>
          <a
            className="devicon-link"
            href="https://html.com/html5/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="col-sm-4 col-md-2 p-3">
              <i className="devicon devicon-html5-plain-wordmark colored"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
