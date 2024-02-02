import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";

function ResumeNew() {
  return (
    <div>
      <Container
        fluid
        className="resume-section"
        style={{ textAlign: "left", width: "80%" }}
      >
        <Particle />
        <div>
          <h5>Résumé </h5>
          <br />
          <h1 className="purple" style={{ fontVariantCaps: "" }}>
            Mein CV .:. Lebenslauf .:. Curriculum Vitae
          </h1>
          <p>&nbsp;</p>
        </div>
        <Row style={{ justifyContent: "left", position: "relative" }}>
          <Col md={6} className="d-flex justify-content-left">
            <div>
              <h3>Letzte Position</h3>
              <h4 className="purple" style={{ fontVariant: "small-caps" }}>
                Bundesagentur für Arbeit
              </h4>
              <p>
                Als Fachassistent im Regionalen Infrastrukturmanagement (RIM)
                war ich zuständig für die Bestandsaufnahme von IT- und
                Mobilgeräten in allen Standorten von Thüringen. Aufgabe war es,
                die Technik in jeder Agentur aufzunehmen, zu erfassen und im
                dafür vorgesehenen IT-Bestandssystem abzugleichen.
              </p>
              <p>Dabei aufgebaute Kenntnisse</p>
              <ul>
                <li>IT-Assetmanagement</li>
                <li>IT-Bestandserfassung</li>
                <li>IT-Bestandsverwaltung</li>
                <li>SAP-Produkte</li>
                <li>Projekt-Management & Leadership</li>
                <li>Hardware- und Software-Enrollment</li>
              </ul>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-left">
            <h2>Berufserfahrung</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
