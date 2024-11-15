import { FaArrowAltCircleRight } from "react-icons/fa";
function Entrada_texto(props) {
  return (
    <footer className="chat-input">
      <input type="text" placeholder="Escribe un mensaje..."></input>
      <button>
        Enviar <FaArrowAltCircleRight />
      </button>
    </footer>
  );
}
export default Entrada_texto;
