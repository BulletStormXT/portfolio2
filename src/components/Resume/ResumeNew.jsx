import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";

function ResumeNew() {
  return (
    <div style={{ marginTop: "3em", marginBottom: "3em", padding: "2em" }}>
      <Container
        fluid
        className="resume-section"
        style={{
          textAlign: "left",
          width: "80%",
          backgroundColor: "#000000C0",
        }}
      >
        <Particle />
        <div style={{ paddingLeft: "2em", paddingRight: "2em" }}>
          <h1
            className="purple"
            style={{ fontVariantCaps: "small-caps", textAlign: "center" }}
          >
            Mein CV .:. Lebenslauf .:. Curriculum Vitae
          </h1>
          <p>&nbsp;</p>
        </div>
        <Row
          style={{
            justifyContent: "left",
            position: "relative",
          }}
        >
          <Col md={6} className="d-flex justify-content-left">
            <section>
              {/* Letzte Position */}

              <div
                style={{
                  margin: "2em",
                }}
              >
                <h3>Letzte Position</h3>
                <h4
                  className="purple"
                  style={{ fontVariant: "small-caps", marginBottom: "1em" }}
                >
                  Bundesagentur für Arbeit
                </h4>
                <p>
                  <em>
                    Als Fachassistent im Regionalen Infrastrukturmanagement
                    (RIM) war ich zuständig für die Bestandsaufnahme von IT- und
                    Mobilgeräten in allen Standorten von Thüringen. Aufgabe war
                    es, die Technik in jeder Agentur aufzunehmen, zu erfassen
                    und im dafür vorgesehenen IT-Bestandssystem abzugleichen.
                  </em>
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

              {/* DCI */}

              <div style={{ margin: "2em" }}>
                <h3>Bildung</h3>
                <h4 className="purple" style={{ fontVariant: "small-caps" }}>
                  Full&nbsp;Stack&nbsp;Web&nbsp;Developer
                </h4>
                <h5>
                  <strong style={{ backgroundColor: "#282828" }}>
                    &nbsp;07/2023 - 09/2024&nbsp;
                  </strong>
                </h5>

                <p>
                  <em>DCI- Digital Career Institute, Berlin, DE</em>
                </p>

                <ul>
                  <li>Ubuntu, Linux Bash</li>
                  <li>Git, GitHub</li>
                  <li>HTML5 &amp; CSS3</li>
                  <li>SASS &amp; SCSS</li>
                  <li>BootStrap, TailwindCSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>NodeJS, ReactJS</li>
                </ul>
              </div>

              {/* WBS */}

              <div style={{ margin: "2em" }}>
                <h4 className="purple" style={{ fontVariant: "small-caps" }}>
                  Web-Design &amp; <br /> Cisco Certified Network Administrator
                  (CCNA)
                </h4>
                <h5>
                  <strong style={{ backgroundColor: "#282828" }}>
                    &nbsp;04/2021 - 07/2021&nbsp;
                  </strong>
                </h5>

                <p>
                  <em>WBS Training AG, Erfurt, DE</em>
                </p>

                <ul>
                  <li>HTML5 &amp; CSS3</li>
                  <li>PHP8</li>
                  <li>CCNA</li>
                </ul>
              </div>

              {/* IAD */}

              <div style={{ margin: "2em" }}>
                <h4 className="purple" style={{ fontVariant: "small-caps" }}>
                  Netzwerk- und Systemadministrator
                </h4>
                <h5>
                  <strong style={{ backgroundColor: "#282828" }}>
                    &nbsp;06/2014 - 12/2014&nbsp;
                  </strong>
                </h5>

                <p>
                  <em>
                    IAD - Informations- und angewandte Datentechnik, Erfurt, DE
                  </em>
                </p>

                <ul>
                  <li>
                    Installation, Konfiguration und Administration von Windows
                    und Linux
                  </li>
                  <li>
                    Installation, Konfiguration und Administration unter
                    Windows- und Linux-Netzwerken
                  </li>
                  <li>
                    Sicherungen: Voll &amp; inkrementell mit VeeAM, HyperV
                    Replica, Windows Backup
                  </li>
                  <li>Microsoft Certified Professional (MCP)</li>
                </ul>
              </div>

              {/* IAD SI NW */}

              <div style={{ margin: "2em" }}>
                <h4 className="purple" style={{ fontVariant: "small-caps" }}>
                  Systemingenieur für Netzwerke
                  <br />
                  Netzwerk- und Systemadministrator
                </h4>
                <h5>
                  <strong style={{ backgroundColor: "#282828" }}>
                    &nbsp;10/2011 - 10/2012&nbsp;
                  </strong>
                </h5>

                <p>
                  <em>
                    IAD - Informations- und angewandte Datentechnik, Erfurt, DE
                  </em>
                </p>

                <ul>
                  <li>
                    Installation, Konfiguration und Administration von Windows
                    und Linux
                  </li>
                  <li>
                    Installation, Konfiguration und Administration unter
                    Windows- und Linux-Netzwerken
                  </li>
                  <li>Homogene, so wie Heterogene Netzwerke</li>
                  <li>Backup von Datenbanken (MS SQL 2012)</li>
                  <li>
                    Virtuelle Maschinen: VSphere, VMWare, HyperV, Oracle VM
                    Virtual Box
                  </li>
                </ul>
              </div>

              {/* IAD FISI */}

              <div style={{ margin: "2em" }}>
                <h4 className="purple" style={{ fontVariant: "small-caps" }}>
                  Fachinformatiker Systemintegration
                </h4>
                <h5>
                  <strong style={{ backgroundColor: "#282828" }}>
                    &nbsp;2009 - 2011&nbsp;
                  </strong>
                </h5>

                <p>
                  <em>
                    IAD - Informations- und angewandte Datentechnik, Erfurt, DE
                  </em>
                </p>

                <ul>
                  <li>
                    Konfiguration und Migration von Windows Server (2003-2016)
                  </li>
                  <li>
                    Konfigurieren von Microsoft Threat Management Gateway (TMG)
                  </li>
                  <li>Installation und Konfiguration von MS SharePoint</li>
                  <li>Installation und Konfiguration von Exchange Server</li>
                  <li>
                    Konfiguration von AD, AD LDS, IIS, WMS, DA, CA und mehr
                  </li>
                  <li>
                    6 Monate Praktikum bei "BCS Beratung-Computer-Software"
                  </li>
                </ul>
              </div>

              {/* SA RS */}
              <div style={{ margin: "2em" }}>
                <h4 className="purple" style={{ fontVariant: "small-caps" }}>
                  Realschul-Abschluss
                </h4>
                <h5>
                  <strong style={{ backgroundColor: "#282828" }}>
                    &nbsp;2004 - 2005&nbsp;
                  </strong>
                </h5>

                <p>
                  <em>Volkshochschule (vhs), Gotha, DE</em>
                </p>
                <p>Erwerb der Mittleren Reife (Realschule)</p>
              </div>

              {/* DIKE Robotron */}

              <div style={{ margin: "2em" }}>
                <h4 className="purple" style={{ fontVariant: "small-caps" }}>
                  Digitaler Interkultureller Kompetenzexport (DIKE, IHK)
                </h4>
                <h5>
                  <strong style={{ backgroundColor: "#282828" }}>
                    &nbsp;2003 - 2004&nbsp;
                  </strong>
                </h5>

                <p>
                  <em>Robotron Bildungszentrum, Erfurt, DE</em>
                </p>
                <p>
                  Aufbau von Digitalen und Interkulturellen Kompetenzen und
                  verkaufen dieser an ausländische interessierte Unternehmen
                </p>
                <ul>
                  <li>Web-Design (HTML &amp; CSS)</li>
                  <li>CMS-Systeme</li>
                  <li>
                    Business-English B1 für Kommunikation mit anderen Nationen
                  </li>
                  <li>
                    Vektorgrafiken erstellen mit Adobe Illustrator und CorelDraw
                  </li>
                </ul>
              </div>

              {/* FK Intranet Tertia */}

              <div style={{ margin: "2em" }}>
                <h4 className="purple" style={{ fontVariant: "small-caps" }}>
                  Fachkraft f&uuml;r Internet/Intranet (IHK)
                </h4>
                <h5>
                  <strong style={{ backgroundColor: "#282828" }}>
                    &nbsp;2001 - 2002&nbsp;
                  </strong>
                </h5>

                <p>
                  <em>Tertia Training &amp; Consulting GmbH, Gotha, DE</em>
                </p>
                <p>
                  Web-Design, Bürokommunikation, Büro-Organisation,
                  Grafikdesign, Photoshop, Banner-Design, Werbe-Design
                </p>
                <ul>
                  <li>Web-Design (HTML &amp; CSS)</li>
                  <li>Bürokommunikation</li>
                  <li>Büro-Organisation</li>
                  <li>Grafikdesign</li>
                  <li>Photoshop</li>
                  <li>Banner-Design</li>
                  <li>Werbe-Design</li>
                </ul>
              </div>

              {/* Bük VHS BW */}

              <div style={{ margin: "2em" }}>
                <h4 className="purple" style={{ fontVariant: "small-caps" }}>
                  Bürokaufmann (IHK)
                </h4>
                <h5>
                  <strong style={{ backgroundColor: "#282828" }}>
                    &nbsp;1998 - 2001&nbsp;
                  </strong>
                </h5>

                <p>
                  <em>VHS-Bildungswerk, Gotha</em>
                </p>
                <ul>
                  <li>alle Stationen eines Bürokaufmann durchlaufen</li>
                  <li>Einkauf, Verkauf, Personal, Buchhaltung</li>
                  <li>12 Monate Praktikum in verschiedenen Bereichen</li>
                </ul>
              </div>
            </section>
          </Col>

          {/* END OF COL 1 */}

          {/* START OF COL 2 */}

          <Col md={6} className="d-flex justify-content-left">
            <section style={{ margin: "2em" }}>
              <h3>Berufserfahrung</h3>

              {/* Bundesagentur für Arbeit */}

              <div style={{ marginBottom: "2em", marginTop: "1em" }}>
                <h4 className="purple" style={{ fontVariant: "small-caps" }}>
                  Fachassistent im Regionalen Infrastrukturmanagement (RIM)
                </h4>
                <h5>
                  <strong style={{ backgroundColor: "#282828" }}>
                    &nbsp;09/2021 - 02/2022&nbsp;
                  </strong>
                </h5>

                <p>
                  <em>Bundesagentur f&uuml;r Arbeit, Erfurt, DE</em>
                </p>
                <ul>
                  <li>
                    Bestandsaufnahme von IT und Mobilgeräten in allen Standorten
                    in Thüringen
                  </li>
                  <li>Datenaufnahme und Datenerfassung im System</li>
                  <li>Auf- und Abbau von IT-Systemen</li>
                  <li>Rollout an verschiedenen Standorten begleitet</li>
                  <li>
                    Mitentwicklung bei Software für Handy zur Bestandsaufnahme
                  </li>
                </ul>
              </div>

              {/* IK H PH */}

              <div>
                <h4 className="purple" style={{ fontVariant: "small-caps" }}>
                  Produktionshelfer
                </h4>
                <h5>
                  <strong style={{ backgroundColor: "#282828" }}>
                    &nbsp;09/2021 - 02/2022&nbsp;
                  </strong>
                </h5>

                <p>
                  <em>Bundesagentur f&uuml;r Arbeit, Erfurt, DE</em>
                </p>
                <ul>
                  <li>
                    Bestandsaufnahme von IT und Mobilgeräten in allen Standorten
                    in Thüringen
                  </li>
                  <li>Datenaufnahme und Datenerfassung im System</li>
                  <li>Auf- und Abbau von IT-Systemen</li>
                  <li>Rollout an verschiedenen Standorten begleitet</li>
                  <li>
                    Mitentwicklung bei Software für Handy zur Bestandsaufnahme
                  </li>
                </ul>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
