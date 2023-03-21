import "./App.css";

function App() {
  const atividades = [
    {
      id: 1,
      descricao: "atividade",
    },
    {
      id: 2,
      descricao: "atividade",
    },
  ];

  function addAtividade(e) {
    e.preventDefault();

    const atividade = {
      id: document.getElementById("id").value,
      descricao: document.getElementById("descricao").value,
    };

    atividades.push(atividade);

    // console.log(atividades);
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
