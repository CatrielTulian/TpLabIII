import "./App.css";

import Sidebar from "./Sidebar.js";
import Cabecera_chat from "./Cabecera_chat.js";
import Chat_activo from "./Chat_activo.js";
import Entrada_texto from "./Entrada_texto.js";
import Inicio from "./Inicio.js";
import Detalles_usuario from "../Components_Profile/Detalles_usuario.js";
import { useState, useRef } from "react";

const paginas = ["inicio", "chats", "configuraciones"];

function App() {
  const [pagina, setPagina] = useState(paginas[0]);

  return (
    <div className="container-app">
      <Sidebar setPagina={setPagina}></Sidebar>
      <main className="chat-container">
        {pagina == "inicio" ? <Inicio></Inicio> : <></>}
        {pagina == "chats" ? (
          <>
            <Cabecera_chat></Cabecera_chat>
            <Chat_activo></Chat_activo>
            <Entrada_texto></Entrada_texto>
          </>
        ) : (
          <></>
        )}
        {pagina === "configuraciones" ? (
          <Detalles_usuario></Detalles_usuario>
        ) : (
          <></>
        )}
      </main>
    </div>
  );
}

export default App;
