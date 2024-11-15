import React, { useState, useEffect, useRef } from "react";

import "./styles.css";

function Detalles_usuario({ Values, setValues }) {
  // El readOnly es medio confuso porque abajo estamos usando disabled
  // digamos que el componente cuando hace el render arranca con disabled en true
  const [editar, setEditar] = useState();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  // Función para manejar el cambio en la selección de imagen
  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValues((prevValues) => ({
          ...prevValues,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setEditar(false);
    console.log("Guardar cambios con:", Values);
  };

  const handleApplyChanges = (e) => {
    e.preventDefault();
    setEditar(true);
  };

  return (
    <>
      <header className="settings-header">
        <h2>Información de Usuario</h2>
      </header>
      <div className="settings-content">
        <form id="user-form">
          <div className="form-body">
            <div className="form-group">
              <label htmlFor="username">Nombre de Usuario</label>
              <input
                type="text"
                id="username"
                value={Values.username}
                onChange={handleInputChange}
                placeholder="Nombre de usuario"
                className={editar ? "form-control" : "form-control-plaintext"}
                readOnly={editar ? false : true}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                value={Values.email}
                onChange={handleInputChange}
                placeholder="Correo electrónico"
                className={editar ? "form-control" : "form-control-plaintext"}
                readOnly={editar ? false : true}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                value={Values.password}
                onChange={handleInputChange}
                placeholder="Contraseña"
                className={editar ? "form-control" : "form-control-plaintext"}
                readOnly={editar ? false : true}
              />
            </div>
            <div className="picture-container">
              <img id="picture" src={Values.profilePicture} alt="Profile" />
              {editar ? (
                <input
                  type="file"
                  id="picture-selection"
                  onChange={handlePictureChange}
                  placeholder="../Img/profile"
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          {editar ? (
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Guardar Cambios
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={handleApplyChanges}
            >
              Realizar cambios
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default Detalles_usuario;
