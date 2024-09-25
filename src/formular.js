import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Formular = (props) => {
  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");
  const [dataNasterii, setdataNasterii] = useState("");
  const [dataAngajarii, setdataAngajarii] = useState("");
  const [functie, setfunctie] = useState("");

  console.log("reapelare");
  const stil = {
    h2: { textAlign: "center" },
  };

  const tratezSubmit = (evt) => {
    evt.preventDefault();
    const activitate = { nume, prenume, dataNasterii, dataAngajarii, functie };
    props.transmit(activitate); //  Transmit spre App obiectul "activitate"
    //  Golesc controalele formularului
    setNume("");
    setPrenume("");
    setdataNasterii("");
    setdataAngajarii("");
    setfunctie("");
  };

  return (
    <>
      <h2 className="mt-4" style={stil.h2}>
        Adauga angajat
      </h2>
      <hr />
      <Form onSubmit={tratezSubmit}>
        <Form.Group>
          <Form.Label>Nume:</Form.Label>
          <Form.Control
            type="text"
            value={nume}
            onChange={(e) => setNume(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Prenume:</Form.Label>
          <Form.Control
            type="text"
            value={prenume}
            onChange={(e) => setPrenume(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Data nasterii:</Form.Label>
          <Form.Control
            type="text"
            value={dataNasterii}
            onChange={(e) => setdataNasterii(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Data angajarii:</Form.Label>
          <Form.Control
            type="text"
            value={dataAngajarii}
            onChange={(e) => setdataAngajarii(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Functie:</Form.Label>
          <Form.Control
            type="text"
            value={functie}
            onChange={(e) => setfunctie(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Inregistreaza
        </Button>
      </Form>
    </>
  );
};

export default Formular;
