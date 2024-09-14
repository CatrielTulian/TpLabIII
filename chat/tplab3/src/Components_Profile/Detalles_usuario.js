import Imagenes from "../Img/Imagenes.js";

function Detalles_usuario(props) {
  return (
    <>
      <header class="settings-header">
        <h2>Información de Usuario</h2>
      </header>
      <div class="settings-content">
        <form id="user-form">
          <div class="form-body">
            <div class="form-group">
              <label for="username">Nombre de Usuario</label>
              <input
                type="text"
                id="username"
                placeholder="Nombre de usuario"
              />
            </div>
            <div class="form-group">
              <label for="email">Correo Electrónico</label>
              <input type="email" id="email" placeholder="Correo electrónico" />
            </div>
            <div class="form-group">
              <label for="password">Contraseña</label>
              <input type="password" id="password" placeholder="Contraseña" />
            </div>
            <div class="picture-container">
              <img id="picture" src={Imagenes.profile} />
              <input
                type="file"
                id="picture-selection"
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
