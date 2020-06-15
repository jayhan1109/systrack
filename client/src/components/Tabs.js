import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Tabs.scss";

const Tabs = ({ getCPU, getGraphic, getMemory, getDisk }) => {
  return (
    <Fragment>
      <Container>
        <Row className="tabRow mt-5 mb-5">
          <Button
            className="btnWidth ml-2 mr-2 px-0 mt-1"
            variant="secondary"
            onClick={() => getCPU()}
          >
            CPU
          </Button>
          <Button
            className="btnWidth ml-2 mr-2 px-0 mt-1"
            variant="secondary"
            onClick={() => getGraphic()}
          >
            Graphic
          </Button>
          <Button
            className="btnWidth ml-2 mr-2 px-0 mt-1"
            variant="secondary"
            onClick={() => getMemory()}
          >
            Memory
          </Button>
          <Button
            className="btnWidth ml-2 mr-2 px-0 mt-1"
            variant="secondary"
            onClick={() => getDisk()}
          >
            Disk
          </Button>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Tabs;
