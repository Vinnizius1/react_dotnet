import { useState } from "react";
import faceSmile from "./assets/img/faceSmile.svg";
// import faceMeh from "./assets/img/faceMeh.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [atividades, setAtividades] = useState([]);

  const facestyle = {
    width: "20px",
    margin: "3px",
    // height: "10px",
  };

  const h6style = {
    display: "flex",
    alignItems: "center",
  };

  function addAtividade(e) {
    e.preventDefault();
    const atividade = {
      id: document.getElementById("id").value,
      descricao: document.getElementById("descricao").value,
    };
    setAtividades([...atividades, { ...atividade }]);
  }

  return (
    <>
      <form className="row g-3 m-2">
        <div className="col-md-6">
          <label for="id" className="form-label">
            Id
          </label>
          <input id="id" type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label for="descricao" className="form-label">
            Descrição
          </label>
          <input id="descricao" type="text" className="form-control" />
        </div>
        <hr />
        <div class="col-12">
          <button className="btn btn-outline-secondary" onClick={addAtividade}>
            + Atividade
          </button>
        </div>
      </form>
      <div className="m-3">
        {atividades.map(atividade => {
          return (
            <>
              <div key={atividade.id} className="card mb-2 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">
                      <span className="badge text-bg-secondary me-1">
                        {atividade.id}
                      </span>
                      - título
                    </h5>
                    <h6 style={h6style}>
                      Prioridade:
                      <img src={faceSmile} alt={faceSmile} style={facestyle} />
                      Normal
                    </h6>
                  </div>
                  <p className="card-text">{atividade.descricao}</p>
                  <div className="d-flex justify-content-end pt-2 m-0 border-top">
                    <button className="btn btn-outline-primary me-2 btn-sm">
                      <FontAwesomeIcon icon={faPencil} />
                      <i className="me-1"></i>
                      editar
                    </button>
                    <button className="btn btn-outline-danger me-2 btn-sm">
                      <FontAwesomeIcon icon={faTrashCan} />
                      <i className="me-1"></i>
                      deletar
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
