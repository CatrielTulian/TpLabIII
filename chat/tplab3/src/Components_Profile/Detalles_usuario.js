import React, { useState, useEffect } from "react";
import Imagenes from "../Img/Imagenes.js";

function Detalles_usuario(props) {
  // Estado para manejar los valores del formulario como un objeto
  const [Values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    profilePicture: Imagenes.profile,
  });

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

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a un servidor o hacer alguna validación
    console.log("Formulario enviado con:", Values);
  };

  return (
    <>
      <header className="settings-header">
        <h2>Información de Usuario</h2>
      </header>
      <div className="settings-content">
        <form id="user-form" onSubmit={handleSubmit}>
          <div className="form-body">
            <div className="form-group">
              <label htmlFor="username">Nombre de Usuario</label>
              <input
                type="text"
                id="username"
                value={Values.username}
                onChange={handleInputChange}
                placeholder="Nombre de usuario"
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
              />
            </div>
            <div className="picture-container">
              <img id="picture" src={Values.profilePicture} alt="Profile" />
              <input
                type="file"
                id="picture-selection"
                onChange={handlePictureChange}
                placeholder="../Img/profile"
              />
            </div>
          </div>
          <button type="submit" id="save-btn">
            Guardar Cambios
          </button>
        </form>
      </div>
    </>
  );
}

export default Detalles_usuario;
