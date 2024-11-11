import "./App.css";
import Sidebar from "./Sidebar.js";
import Cabecera_chat from "./Cabecera_chat.js";
import Chat_activo from "./Chat_activo.js";
import Entrada_texto from "./Entrada_texto.js";
import Inicio from "./Inicio.js";
import { useState, useRef, useEffect } from "react";

const paginas = ["inicio", "chats", "configuraciones"];

function App() {
  const [pagina, setPagina] = useState(paginas[0]);
  const [config, setConfig] = useState([]);
  const [chat, cambiarChat] = useState("chat1");
  const [tipoPouUp, cambiarTipo] = useState(null);

  return (
    <>
      <div className="container">
        <Sidebar></Sidebar>
        <main className="chat-container">
          {pagina === "inicio" ? (
            <>
              <Inicio tipoPouUp={tipoPouUp} cambiarTipo={cambiarTipo} />
            </>
          ) : (
            <></>
          )}
          {pagina === "chats" ? (
            <>
              <Cabecera_chat />
              <Chat_activo
                chat={chat}
                cambiarChat={cambiarChat}
                tipoPouUp={tipoPouUp}
                cambiarTipo
              />
              <Entrada_texto></Entrada_texto>
            </>
          ) : (
            <></>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
