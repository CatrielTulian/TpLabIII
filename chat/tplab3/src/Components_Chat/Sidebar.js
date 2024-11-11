import { useState, useRef, useEffect } from "react";

function Sidebar(props) {
  return (
    <aside className="sidebar">
      <div className="menu">
        <h2>Menú</h2>
        <ul>
          <li>
            <a className="navbar-nav" href="#">
              Chat 1
            </a>
          </li>
          <li>
            <a className="navbar-nav" href="#">
              Chat 2
            </a>
          </li>
          <li>
            <a className="navbar-nav" href="#">
              Chat 3
            </a>
          </li>
          <li>
            <a className="navbar-nav" href="#">
              Configuración
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
export default Sidebar;
