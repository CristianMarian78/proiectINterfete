import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Activitate = (props) => {
  const { nume, prenume, dataNasterii, dataAngajarii, functie, id, sterge } =
    props;

  const stil = {
    borderBottom: "1px solid #777",
    paddingTop: "10px",
  };

  return (
    <Container>
      <Row style={stil}>
        <Col xs={9}>
          <h4>
            Nume Prenume:
            {nume} - {prenume}
          </h4>
          <h6>Data nasterii: {dataNasterii}</h6>
          <h6>Data angajarii: {dataAngajarii}</h6>
          <h6>Functie: {functie}</h6>
        </Col>
        <Col xs={3} className="d-flex align-items-center">
          <Button variant="primary" onClick={() => sterge(id)}>
            Sterge
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Activitate;
