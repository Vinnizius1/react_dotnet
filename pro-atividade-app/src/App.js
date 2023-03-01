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

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            {atividades[0].id} {atividades[0].descricao}
          </li>
          <li onClick={() => console.log("olá!")}>
            {atividades[1].id} {atividades[1].descricao}
          </li>
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
  );
}

export default App;
