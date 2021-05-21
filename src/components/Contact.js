import React, { Component } from "react";
import { Mail, Linkedin, GitHub } from "react-feather";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ContactForm() {
  return (
    <div className="container d-flex justify-content-center">
      <Card
        className="text-center"
        style={{ width: "32rem" }}
        bg="light"
        border="secondary"
      >
        {/* <Card.Header className="contactHeader mainFont">
          Get in Touch!
        </Card.Header> */}
        <Card.Body>
          <Card.Text className="contactValue secondaryFont">
            <a
              href="tel:480-321-7571"
              rel="nofeferrer"
              target="blank"
              className="contactValue secondaryFont"
            >
              480.321.7571
            </a>
          </Card.Text>
          <Card.Text className="contactValue secondaryFont">
            <a
              href="mailto: gmwarzecha@gmail.com"
              rel="nofeferrer"
              target="blank"
              className="contactValue secondaryFont"
            >
              gmwarzecha@gmail.com
            </a>
          </Card.Text>
          <Button
            variant="info"
            size="lg"
            href="mailto: gmwarzecha@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="contactValue secondaryFont"
          >
            Send me an email
          </Button>
          <Card.Text className="secondaryFont pt-4">
            Please check out my GitHub and Linkedin via the icons below.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );

  /*
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
  */
}

export default ContactForm;
