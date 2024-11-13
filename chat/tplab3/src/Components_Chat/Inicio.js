import "./App.css";

function Inicio(props) {
  return (
    <div class="card text-center" id="container-card">
      <div class="card-header" id="titulo">
        <h3>Aplicación de Mensajes</h3>
      </div>
      <div class="card-body">
        <h5 class="rd-title">Esta es la pantalla de inicio.</h5>
        <p class="card-text">Ningún chat se ha seleccionado todavía...</p>
      </div>
    </div>
  );
}

export default Inicio;
