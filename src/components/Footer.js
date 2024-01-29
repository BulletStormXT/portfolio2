import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaSkype, FaXing } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer sticky">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Sebastian Peinelt</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>© {year} S. Peinelt</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/bulletstormxt"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              >
                <AiFillGithub />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li> */}

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sebastian-peinelt-01b7524a"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.xing.com/profile/Sebastian_Peinelt2"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="Xing"
              >
                <FaXing />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://join.skype.com/invite/dCOsdtuK1oWT"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="Skype"
              >
                <FaSkype />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
