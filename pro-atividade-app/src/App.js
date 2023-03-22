import "./App.css";
import { useState } from "react";

function App() {
  const [atividades, setAtividades] = useState([]);

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
      <form className="row g-3">
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Id
          </label>
          <input id="id" type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
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
      <div className="mt-3">
        {atividades.map(atividade => {
          return (
            <>
              <div key={atividade.id} className="card mb-2 shadow-sm">
                <div className="card-body">
                  <p className="card-text">
                    {atividade.id} - {atividade.descricao}
                  </p>
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
