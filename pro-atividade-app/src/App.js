import { useState } from "react";

// import Atividade from "./components/Atividade";
import AtividadeForm from "./components/AtividadeForm";
import AtividadesLista from "./components/AtividadesLista";

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

      <AtividadesLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
      />
    </>
  );
}

export default App;
