import React, { Fragment } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const Info = ({ keys, values }) => {
  return (
    <Fragment>
      <Container>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Target Info</th>
              <th>Your Laptop</th>
            </tr>
          </thead>
          <tbody>
            {keys.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item}</td>
                <td>{values[index]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Fragment>
  );
};

export default Info;
