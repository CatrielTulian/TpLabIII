import { useState, useRef, useEffect } from "react";
import { MdSettingsSuggest } from "react-icons/md";

function Sidebar(props, { setPagina }) {
  return (
    <aside className="sidebar">
      <div className="menu">
        <h2>Menú</h2>
        <ul>
          <li>
            <a
              onClick={() => props.setPagina("chats")}
              className="navbar-nav"
              href="#"
              id="1"
            >
              Chat 1
            </a>
          </li>
          <li>
            <a
              onClick={() => props.setPagina("chats")}
              className="navbar-nav"
              href="#"
              id="2"
            >
              Chat 2
            </a>
          </li>
          <li>
            <a
              onClick={() => props.setPagina("chats")}
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
          onClick={() => props.setPagina("configuraciones")}
          className="navbar-nav"
          href="#"
        >
          <li>
            {" "}
            Configuración <MdSettingsSuggest />
          </li>
        </a>
      </div>
    </aside>
  );
}
export default Sidebar;
