import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "./JumboComponent.scss";

const JumboComponent = () => {
  return (
    <Container>
      <Jumbotron className="jumbo">
        <h1>Tab the menus to check your system</h1>
      </Jumbotron>
    </Container>
  );
};

export default JumboComponent;
