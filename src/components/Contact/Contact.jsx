import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineSkype,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineMobile,
} from "react-icons/ai";
import { FaXing } from "react-icons/fa";

const Contact = () => {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container
        style={{
          marginTop: "7em",
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
                color: "#eeeeee",
              }}
            >
              Treten Sie mit mir in <strong className="purple">Kontakt</strong>!
            </h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:Sebastian.Peinelt@live.de?subject=Ihr%20Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  title="E-Mail"
                >
                  <AiOutlineMail />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="tel:+4936256153888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  title="Festnetznummer"
                >
                  <AiOutlinePhone />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="tel:+491795330537"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  title="Handynummer"
                >
                  <AiOutlineMobile />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sebastian-peinelt-01b7524a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                  title="LinkedIn"
                >
                  <AiOutlineLinkedin />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/bulletstormxt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://wa.me/491795330537"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  title="WhatsApp"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://join.skype.com/invite/dCOsdtuK1oWT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  title="Skype"
                >
                  <AiOutlineSkype />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.xing.com/profile/Sebastian_Peinelt2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                  title="Xing"
                >
                  <FaXing />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
