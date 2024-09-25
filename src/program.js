import React from "react";
import Activitate from "./activitate";

const Program = (props) => {
  const { activitati, sterge } = props;
  const lista = activitati.map((item) => (
    <Activitate
      nume={item.nume}
      dprenume={item.prenume}
      dataNasterii={item.dataNasterii}
      dataAngajarii={item.dataAngajarii}
      functie={item.functie}
      id={item.id}
      key={item.id}
      sterge={sterge}
    />
  ));
  const stil = {
    h2: { textAlign: "center" },
  };
  return (
    <>
      <h2 className="mt-4" style={stil.h2}>
        Lista angajati activi
      </h2>
      <hr />
      <div>{lista}</div>
    </>
  );
};

export default Program;
