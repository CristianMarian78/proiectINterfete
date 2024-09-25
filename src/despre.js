import React from "react";

const Despre = () => {
  const stil = {
    borderBottom: "2px solid red",
    display: "inline-block",
    width: "50%",
  };
  return (
    <>
      <h3 className="mt-5">Program evidenta angajati</h3>
      <div style={stil}></div>
      <h5>
        <em>
          Permite adaugarea, evidenta si stergerea angajatilor activi ai firmei
        </em>
      </h5>
      Contact la cristi.marian78@gmail.com , telefon 07527175693
    </>
  );
};

export default Despre;
