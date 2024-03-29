import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/img/me4.jpg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container
        style={{
          paddingLeft: "2em",
          paddingRight: "2em",
          backgroundColor: "#000000c0",
        }}
      >
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{
                fontSize: "2.1em",
                paddingBottom: "20px",
                fontVariant: "small-caps",
                textDecoration: "underline",
              }}
            >
              Wer bin <strong className="purple">ich</strong>?
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1
          className="project-heading purple"
          style={{ fontVariant: "small-caps", textDecoration: "underline" }}
        >
          Professionelles <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <h1
          className="project-heading"
          style={{ fontVariant: "small-caps", textDecoration: "underline" }}
        >
          Meine <strong className="purple">Tools</strong>
        </h1>

        <Toolstack />
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
