import React from "react";
import { Mail, Linkedin, GitHub } from "react-feather";

function ContactForm() {
  return (
    <section className="container d-flex contactCont justify-content-center">
      <div className="row">
        <div className="col-12 p-4">
          <h1 className="d-flex mainFont justify-content-center">
            Get in Touch!
          </h1>
        </div>
        <div className="col-12 p-4">
          <p className="d-flex justify-content-center contactInfo">
            <a
              href="tel:480-321-7571"
              rel="nofeferrer"
              target="blank"
              className="contactValue mainFont"
            >
              {" "}
              480.321.7571
            </a>
          </p>
        </div>
        <div className="col-12 p-4">
          <p className="d-flex justify-content-center contactInfo">
            <a
              href="mailto: gmwarzecha@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="contactValue mainFont"
            >
              {" "}
              gmwarzecha@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
