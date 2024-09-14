function Sidebar(props) {
  return (
    <aside className="sidebar">
      <div className="menu">
        <h2>Menú</h2>
        <ul>
          <li>
            <a href="#">Chat 1</a>
          </li>
          <li>
            <a href="#">Chat 2</a>
          </li>
          <li>
            <a href="#">Chat 3</a>
          </li>
          <li>
            <a href="../profile.js">Configuración</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
export default Sidebar;
