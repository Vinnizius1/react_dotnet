import React from "react";
import Atividade from "./Atividade";

export default function AtividadesLista({ atividades, deletarAtividade }) {
  return (
    <div className="m-3">
      {atividades.map(atividade => (
        <Atividade
          key={atividade.id}
          atividade={atividade}
          deletarAtividade={deletarAtividade}
        />
      ))}
    </div>
  );
}
