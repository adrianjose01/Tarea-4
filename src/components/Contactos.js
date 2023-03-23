import React, { useEffect, useState } from "react";
import Contacto from "./Contacto";

export default function Contactos() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://www.raydelto.org/agenda.php")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
      });
  }, []);
  return (
    <>
      {contacts.map((c) => (
        <Contacto
          name={c.nombre}
          lastName={c.apellido}
          phoneNumber={c.telefono}
        />
      ))}
    </>
  );
}
