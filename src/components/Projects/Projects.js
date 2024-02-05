import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/img/portfolio/portfolio001/portfolio001-details-1.png"; //* OK 01
import clock from "../../Assets/img/portfolio/portfolio005/portfolio-details-1-clock169.png"; //* OK 02
import tfc from "../../Assets/img/portfolio/portfolio002/portfolio002-details-1.png"; //* OK 03
import crc from "../../Assets/img/portfolio/portfolio003/portfolio003-details-1.png"; //* OK 04
import bhsvlsz from "../../Assets/img/portfolio/portfolio004/portfolio004-details-1.png"; //* OK 05

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meine bisherigen <strong className="purple">Projekte </strong>
        </h1>
        <p style={{ color: "white" }}>
          Einige Projekte, an denen ich in der Vergangenheit gearbeitet habe.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Ein Portfolio, welches im Rahmen der Weiterbildung bei der DCI entstanden ist. Hier wurde HTML, CSS und Bootstrap verwendet. Das Portfolio ist responsiv und hat eine gute Performance. Es ist ein OnePager und hat kein Kontaktformular, Welches auch meines erachtens nicht nötig ist, da man sich ja eh vorher schon kennt, oder schriftlich beworben hat."
              ghLink="https://github.com/bulletstormxt/portfolio"
              demoLink="https://bulletstormxt.github.io/portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clock}
              isBlog={false}
              title="Digitale Uhr"
              description="Dies ist ein kleines DOM-Manipulation-Projekt meinerseits gewesen während der Weiterbildung zum Full Stack Web- / Software Developer."
              ghLink="https://github.com/bulletstormxt/portfolio/tree/main/subpages/clock"
              demoLink="https://bulletstormxt.github.io/portfolio/subpages/clock/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tfc}
              isBlog={false}
              title="TFC"
              description="Mein erstes Projekt für einen Freund, der einen Film-Club betrieben hat. Zu diesem Zeitpunkt habe ich sogar auch in einen seiner Filme mitgespielt. Ich habe auch viel im Hintergrund z. B. Kamera, Beleuchtung, Location und Videoschnitt mitgewirkt. Tatsächlich wollte mein Bekannter eine weitere Idee, hatte dann aber dankend abgelehnt, da er es sich nicht wirklich leisten konnte. Heute wäre die Seite etwas underscored."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crc}
              isBlog={false}
              title="CRC"
              description="Diese Seite ist nie Online gegangen, da ich während der Zeit, die ich diese Webseite im CRC erstellt habe, den Unternehmer zu viel gekostet hat. Und ausserdem hatte ich zu viele Nebenaufgaben in diesem kleinen Geschäft, so, dass es nicht fertiggestellt werden konnte."
              // ghLink="https://github.com/bulletstormxt/portfolio"
              // demoLink="https://bulletstormxt.github.io/portfolio/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Language Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in suicide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bhsvlsz}
              isBlog={false}
              title="Behindertensportverein Bad Langensalza"
              description="Hier habe ich während meiner Ausbildung bzw. Weiterbildung zur Fachkraft für Internet und Intranet eine Webseite mit einer jungen Dame für die Behindertensportgemeinschaft Bad Langensalza, in welcher Sie Mitglied war, erstellt.
              Diese Seite war von 2002 bis 2007 online."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
