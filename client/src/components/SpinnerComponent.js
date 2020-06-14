import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const SpinnerComponent = () => {
  return (
    <Container>
      <Row className="mt-5 justify-content-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Row>
    </Container>
  );
};

export default SpinnerComponent;
