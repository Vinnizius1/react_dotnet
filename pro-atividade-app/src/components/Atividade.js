import React from "react";
import faceSmile from "../assets/img/faceSmile.svg";
import faceMeh from "../assets/img/faceMeh.svg";
import faceFrown from "../assets/img/faceFrown.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function Atividade({ atividade, deletarAtividade }) {
  // estilos especiais
  const facestyle = {
    width: "20px",
    margin: "3px",
  };

  const h6style = {
    display: "flex",
    alignItems: "center",
  };

  // funções
  function prioridadeText(param) {
    switch (param) {
      case "1":
        return (
          <span key={crypto.randomUUID()} style={{ color: "green" }}>
            Baixa
          </span>
        );
      case "2":
        return (
          <span key={crypto.randomUUID()} style={{ color: "blue" }}>
            Normal
          </span>
        );
      case "3":
        return (
          <span key={crypto.randomUUID()} style={{ color: "red" }}>
            Alta
          </span>
        );
      default:
        return "Não definido";
    }
  }
  function prioridadeFace(param) {
    switch (param) {
      case "1":
        return faceSmile;
      case "2":
        return faceMeh;
      case "3":
        return faceFrown;
      default:
        return "Não definido";
    }
  }

  function cardBorder(param) {
    switch (param) {
      case "1":
        return "green";
      case "2":
        return "blue";
      case "3":
        return "red";
      default:
        return "black";
    }
  }

  return (
    <div
      id="cardBorder"
      style={{ borderColor: cardBorder(atividade.prioridade) }}
      className="card mb-2 shadow-sm"
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge text-bg-secondary me-1">{atividade.id}</span>
            {atividade.titulo}
          </h5>
          <h6 style={h6style}>
            Prioridade:
            <img
              src={prioridadeFace(atividade.prioridade)}
              alt={prioridadeFace(atividade.prioridade)}
              style={facestyle}
            />
            {prioridadeText(atividade.prioridade)}
          </h6>
        </div>
        <p className="card-text">{atividade.descricao}</p>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button className="btn btn-outline-primary me-2 btn-sm">
            <FontAwesomeIcon icon={faPencil} />
            <i className="me-1"></i>
            Editar
          </button>
          <button
            className="btn btn-outline-danger me-2 btn-sm"
            onClick={() => deletarAtividade(atividade.id)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
            <i className="me-1"></i>
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}
