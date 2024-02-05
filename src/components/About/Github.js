import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

// const minimalTheme: ThemeInput = {
//   light: ["hsl(0, 0%, 92%)", "#18d26e"],
//   dark: ["hsl(0, 0%, 22%)", "#18d26e"],
// };

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1
        className="project-heading"
        style={{ paddingBottom: "20px", fontVariant: "small-caps" }}
      >
        Meine <strong className="purple">Coding</strong> Tage
      </h1>
      <GitHubCalendar
        style={{
          paddingBottom: "20px",
          color: "#18d26e",
        }}
        username="bulletstormxt"
        blockSize={15}
        blockMargin={5}
        blockRadius={5}
        color="#18d26e"
        fontSize={16}
        // colorScheme={"dark"}
        showWeekdayLabels={true}
        weekStart={1}
        // theme={"minimalTheme"}
      />
    </Row>
  );
}

export default Github;
