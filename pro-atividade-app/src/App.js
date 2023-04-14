import { useState } from "react";

import AtividadeForm from "./components/AtividadeForm";
import Atividade from "./components/Atividade";

function App() {
  const [atividades, setAtividades] = useState([]);

  function addAtividade(e) {
    e.preventDefault();

    const atividade = {
      id: document.getElementById("id").value,
      prioridade: document.getElementById("prioridade").value,
      titulo: document.getElementById("titulo").value,
      descricao: document.getElementById("descricao").value,
    };

    setAtividades([...atividades, { ...atividade }]);
  }

  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter(
      atividade => atividade.id !== id
    );
    setAtividades([...atividadesFiltradas]);
  }

  return (
    <>
      <AtividadeForm addAtividade={addAtividade} atividades={atividades} />

      <div className="m-3">
        {atividades.map(atividade => (
          <Atividade
            key={atividade.id}
            atividade={atividade}
            deletarAtividade={deletarAtividade}
          />
        ))}
      </div>
    </>
  );
}

export default App;
