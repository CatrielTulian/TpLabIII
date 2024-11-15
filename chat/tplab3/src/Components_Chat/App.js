import "./App.css";
import Sidebar from "./Sidebar.js";
import Cabecera_chat from "./Cabecera_chat.js";
import Entrada_texto from "./Entrada_texto.js";
import Inicio from "./Inicio.js";
import Detalles_usuario from "../Components_Profile/Detalles_usuario.js";
import { useState, useEffect } from "react";
import Imagenes from "../Img/Imagenes.js";

const paginas = ["inicio", "chats", "configuraciones"];

function App() {
  const [pagina, setPagina] = useState(paginas[0]);
  const [seleccionarChat, setSeleccionarChat] = useState("chat1");
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
      .then((data) => setMjs(data))
      .catch((error) => console.error("Error al cargar los mensajes:", error));
  }, []);

  const filtrarMjs = mjs.filter((msg) => msg.contacto === seleccionarChat);

  return (
    <div className="container-app">
      <Sidebar setPagina={setPagina} setSeleccionarChat={setSeleccionarChat} />
      <main className="chat-container">
        {pagina == "inicio" ? <Inicio></Inicio> : <></>}

        {pagina == "chats" ? (
          <>
            <Cabecera_chat />
            <div className="chat-messages">
              {filtrarMjs.length !== 0 ? (
                filtrarMjs.map((msg) => (
                  <div key={msg.id} className="message bot">
                    <p>{msg.mensaje}</p>
                  </div>
                ))
              ) : (
                <p>No hay mensajes para mostrar.</p>
              )}
            </div>
            <Entrada_texto />
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
