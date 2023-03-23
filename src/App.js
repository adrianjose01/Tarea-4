import React, { useState } from "react";
import Contactos from "./components/Contactos";
import AddContactForm from "./components/AddContactForm";
import contactImage from "./images/icons8-contacts-94.png";

export default function App() {
  const agregarContactoHandler = () => {
    setAddingNewContact(true);
  };

  const verContactoHandler = () => {
    setAddingNewContact(false);
  };

  const [addingNewContact, setAddingNewContact] = useState(false);
  return (
    <div className="app_container">
      <header>
        <h1>Todos los Contactos</h1>
        <img src={contactImage} alt="imagen de contacto" />
        {!addingNewContact ? (
          <button
            className="add_contact_button"
            onClick={agregarContactoHandler}
          >
            Agregar Contacto
          </button>
        ) : (
          <button className="add_contact_button" onClick={verContactoHandler}>
            Ver Contactos
          </button>
        )}
      </header>
      {!addingNewContact ? (
        <Contactos />
      ) : (
        <AddContactForm onResetpage={verContactoHandler} />
      )}
    </div>
  );
}
