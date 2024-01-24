import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Web-Entwickler",
          "MERN Stack Entwickler",
          "Open Source Mitwirkender",
          "Software Entwickler",
          "Fachinformatiker Systemintegration",
          "Microsoft Certified Professional",
          "System-Administrator",
          "Netzwerk-Administrator",
          "Linux-Administrator",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
