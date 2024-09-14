import "../styles.css"; // Styles.css son los estilos del perfil
import Sidebar from "./Sidebar";
import Detalles_usuario from "./Detalles_usuario";

function App() {
  return (
    <div class="container">
      <Sidebar></Sidebar>
      <main class="settings-container">
        <Detalles_usuario></Detalles_usuario>
      </main>
    </div>
  );
}
export default App;
