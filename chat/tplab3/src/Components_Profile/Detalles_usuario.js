import React, { useState, useEffect } from "react";
import Imagenes from "../Img/Imagenes.js";
import "./styles.css";

function Detalles_usuario(props) {
  // Estado para manejar los valores del formulario como un objeto
  const [Values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    profilePicture: Imagenes.profile,
  });

  const [readOnly, setReadOnly] = useState(false);

  // Función para manejar los cambios en los inputs
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
    setReadOnly(true);
    console.log("Guardar cambios con:", Values);
  };

  // Manejador para el botón "Realizar cambios"
  const handleApplyChanges = (e) => {
    e.preventDefault();
    setReadOnly(false);
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
                disabled={readOnly}
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
                disabled={readOnly}
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
                disabled={readOnly}
              />
            </div>
            <div className="picture-container">
              <img id="picture" src={Values.profilePicture} alt="Profile" />
              <input
                type="file"
                id="picture-selection"
                onChange={handlePictureChange}
                placeholder="../Img/profile"
                disabled={readOnly}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSave}
          >
            Guardar Cambios
          </button>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={handleApplyChanges}
          >
            Realizar cambios
          </button>
        </form>
      </div>
    </>
  );
}

export default Detalles_usuario;
