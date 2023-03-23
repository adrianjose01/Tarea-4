import React from "react";

export default function Contacto(props) {
  return (
    <div className="contacto_container">
      <div style={{ display: "flex", gap: "10px" }}>
        <p>
          <b>Nombre: </b>
          {props.name}
        </p>
        <p>
          <b>Apellido: </b>
          {props.lastName}
        </p>
      </div>
      <p>
        <b>Telefono: </b>
        {props.phoneNumber}
      </p>
    </div>
  );
}
