import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <h2 style={{ fontVariant: "small-caps" }} className="purple">
              Full Stack Web Developer
            </h2>
            <p>
              Hallo, mein Name ist{" "}
              <span className="purple">Sebastian Peinelt</span> und ich bin{" "}
              <span className="purple">41 Jahre</span> alt. Ich lebe in Drei
              Gleichen, was im Grünen Herzen von Deutschland liegt. Auch bekannt
              als Thüringen. Wahrscheinlich sind Sie auf meine Webseite
              gestoßen, weil ich mich bei Ihrer Firma beworben habe. Ich suche
              derzeit nach einer passenden Möglichkeit für einen Direkteinstieg
              in die Welt der Webentwicklung.
            </p>
            <p>
              Das Entwickeln und Programmieren habe ich schon direkt nach meiner
              ersten Ausbildung zum Bürokaufmann entdeckt und es hat sich zu
              meiner Leidenschaft entwickelt. Anfangs habe ich mir das
              Programmieren selbstständig durch Online-Kurse, Bücher und
              Tutorials beigebracht. Habe mich aber immer wieder in
              Weiterbildungen begeben, wo ich meine Fähigkeiten weiterentwickeln
              konnte.
            </p>
            <p>
              Derzeit mache ich eine Weiterbildung zum Full Stack Web Developer.
              Gewählt habe ich diese, weil ich schon einige Vorkenntnisse in
              diesem Bereich hatte und mir dahingehend altes Wissen Auffrischen
              und festigen möchte, so wie auch neues Wissen mir aneignen möchte.
              Für mich war von Anfang an klar, dass praktische Erfahrung
              unbezahlbar ist. Deshalb suche ich nach einer Praktikumsstelle,
              bei der ich meine Kenntnisse erweitern und gleichzeitig mein
              Wissen aktiv anwenden kann. Für die Zeit von 12.07.24 bis 06.09.24
              benötige ich eine Praktikumsstelle (Remote oder Regional) die auch
              Teil der Weiterbildung ist. Bei Interesse einfach anschreiben,
              oder anrufen!
            </p>
            <h2 style={{ fontVariant: "small-caps" }} className="purple">
              Was habe ich vorher gemacht?
            </h2>
            <p>
              Ursprünglich bin ich ein Bürokaufmann mit gutem IHK-Abschluss.
              Meine Interessen gingen aber gleich schon nach der Ausbildung
              weiter in die IT. Habe dann also in einer Weiterbildung die
              Fachkraft für Internet und Intranet gemacht, auch mit
              IHK-Abschluss. Dann habe ich zwischendurch einige verschiedene
              Jobs gemacht. 2009 habe ich dann zu einer Umschulung zum
              Fachinformatiker für Systemintegration entschlossen, und auch
              beendet, jedoch ohne adäquaten IHK-Abschluss. Das Wissen dieser
              Umschulung ist aber nach wie vor noch vorhanden.
            </p>
            <p>
              Jetzt stecke ich mein vollstes Interesse und meine ganze Energie
              in diese Weiterbildung zum Full Stack Web Developer. Vielleicht
              habe ich sogar Ihr Interesse an meine Kenntnisse und Fähigkeiten
              geweckt. Dann bin ich Ihr Mann in Sachen Full Stack Web
              Development!
            </p>
          </p>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Sebastian</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
