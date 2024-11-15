import "./App.css";
import Sidebar from "./Sidebar.js";
import Cabecera_chat from "./Cabecera_chat.js";
import Chat_activo from "./Chat_activo.js";
import Entrada_texto from "./Entrada_texto.js";
import Inicio from "./Inicio.js";
import Detalles_usuario from "../Components_Profile/Detalles_usuario.js";
import { useState, useRef, useEffect } from "react";
import Imagenes from "../Img/Imagenes.js";

const paginas = ["inicio", "chats", "configuraciones"];

function App() {
  const [pagina, setPagina] = useState(paginas[0]);
  const [config, setConfig] = useState([]);
  const valoresIniciales = {
    username: "",
    email: "",
    password: "",
    profilePicture: Imagenes.profile,
  };
  const [Values, setValues] = useState(valoresIniciales);
  const [mjs, setMjs] = useState([]);

  useEffect(() => {
    fetch("/Mensajes.json")
      .then((response) => response.json())
      .then((data) => setMjs(data));
  }, []);

  return (
    <div className="container-app">
      <Sidebar setPagina={setPagina}></Sidebar>
      <main className="chat-container">
        {pagina == "inicio" ? <Inicio></Inicio> : <></>}
        {pagina == "chats" ? (
          <>
            <Cabecera_chat></Cabecera_chat>
            {/*<Chat_activo></Chat_activo> */}
            <div className="chat-messages">
              {" "}
              {mjs.length !== 0 ? (
                mjs.map((msg) => (
                  <div key={msg.id} className="message bot">
                    {" "}
                    <p>{msg.mensaje}</p>{" "}
                  </div>
                ))
              ) : (
                <p>No hay mensajes para mostrar.</p>
              )}{" "}
            </div>
            <Entrada_texto></Entrada_texto>
          </>
        ) : (
          <></>
        )}
        {pagina === "configuraciones" ? (
          <Detalles_usuario Values={Values} setValues={setValues} />
        ) : (
          <></>
        )}
      </main>
    </div>
  );
}

export default App;
