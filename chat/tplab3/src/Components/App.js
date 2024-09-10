import "../App.css";
import Sidebar from "./Sidebar.js";

function App() {
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <main className="chat-container">
        <header className="chat-header">
          <h2>Chat Activo</h2>
        </header>
        <div className="chat-messages">
          <div className="message user">Hola, ¿cómo estás?</div>
          <div className="message bot">Hola, estoy bien, ¿y tú?</div>
        </div>
        <footer className="chat-input">
          <input type="text" placeholder="Escribe un mensaje..."></input>
          <button>Enviar</button>
        </footer>
      </main>
    </div>
  );
}

export default App;
