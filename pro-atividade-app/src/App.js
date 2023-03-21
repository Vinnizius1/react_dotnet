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
      <form>
        <input id="id" type="text" placeholder="id" />
        <input id="descricao" type="text" placeholder="descrição" />
        <button onClick={addAtividade}>+ Atividade</button>
      </form>
      <div className="mt-3">
        <header className="list-group">
          <ul>
            {atividades.map(atividade => {
              return (
                <li key={atividade.id} className="list-group-item">
                  {atividade.id} - {atividade.descricao}
                </li>
              );
            })}
          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
