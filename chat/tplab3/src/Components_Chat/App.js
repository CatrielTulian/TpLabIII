import "../App.css";
import Sidebar from "./Sidebar.js";
import Cabecera_chat from "./Cabecera_chat.js";
import Chat_activo from "./Chat_activo.js";
import Entrada_texto from "./Entrada_texto.js";

function App() {
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <main className="chat-container">
        <Cabecera_chat></Cabecera_chat>
        <Chat_activo></Chat_activo>
        <Entrada_texto></Entrada_texto>
      </main>
    </div>
  );
}

export default App;
