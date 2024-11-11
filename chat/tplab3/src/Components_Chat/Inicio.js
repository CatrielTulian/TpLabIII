import "./App.css";

function Inicio(props) {
  return (
    <div className="modal" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title">Bienvenidos al chat</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>App Chat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
