import React, { useRef } from "react";

export default function AddContactForm(props) {
  const nameInputRef = useRef();
  const lastNameRef = useRef();
  const phoneInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const firstName = nameInputRef.current.value;
    const lastName = lastNameRef.current.value;
    const phoneNumber = phoneInputRef.current.value;

    console.log(
      JSON.stringify({
        nombre: firstName,
        apellido: lastName,
        telefono: phoneNumber,
      })
    );

    fetch("http://www.raydelto.org/agenda.php", {
      method: "POST",
      body: JSON.stringify({
        nombre: firstName,
        apellido: lastName,
        telefono: phoneNumber,
      }),
    }).then(() => {
      props.onResetpage();
    });
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <h1>Añadir Contacto</h1>
      <label>
        <span>Nombre</span>
        <input type="text" ref={nameInputRef} />
      </label>
      <label>
        <span>Apellido:</span>
        <input type="text" ref={lastNameRef} />
      </label>
      <label>
        <span>Telefono:</span>
        <input type="text" ref={phoneInputRef} />
      </label>
      <button className="submit_btn add_contact_button">
        Agregar contacto
      </button>
    </form>
  );
}
