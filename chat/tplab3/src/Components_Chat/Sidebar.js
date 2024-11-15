import { useState, useRef, useEffect } from "react";
import { MdSettingsSuggest } from "react-icons/md";

function Sidebar(props) {
  const { setPagina, setSeleccionarChat } = props;

  return (
    <aside className="sidebar">
      <div className="menu">
        <h2>Menú</h2>
        <ul>
          <li>
            <a
              onClick={() => {
                setPagina("chats");
                setSeleccionarChat("chat1");
              }}
              className="navbar-nav"
              href="#"
              id="1"
            >
              Chat 1
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setPagina("chats");
                setSeleccionarChat("chat2");
              }}
              className="navbar-nav"
              href="#"
              id="2"
            >
              Chat 2
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setPagina("chats");
                setSeleccionarChat("chat3");
              }}
              className="navbar-nav"
              href="#"
              id="3"
            >
              Chat 3
            </a>
          </li>
        </ul>
      </div>
      <div className="config">
        <a
          onClick={() => setPagina("configuraciones")}
          className="navbar-nav"
          href="#"
        >
          <li>
            Configuración <MdSettingsSuggest />
          </li>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
