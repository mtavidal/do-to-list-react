import { useState, useEffect } from "react";
import Botao from "./components/Botao";
import TaskContainer from "./components/TaskContainer";
import TaskItem from "./components/TaskItem";

interface Tarefa {
  titulo: string;
  done: boolean;
}

function App() {
  const listaAntiga: Tarefa[] = JSON.parse(
    localStorage.getItem("mykey") || "[]"
  );

  const [tarefas, setTarefas] = useState<Tarefa[]>(listaAntiga);
  const [tituloTarefa, setTituloTarefa] = useState<string>("");

  function adicionarTarefa(event: React.FormEvent) {
    event.preventDefault();
    const listTarefa = [
      ...tarefas,
      {
        titulo: tituloTarefa,
        done: false,
      },
    ];
    setTarefas(listTarefa);

    setTituloTarefa("");
    localStorage.setItem("mykey", JSON.stringify(listTarefa));
  }

  function concluirTarefa(posicao: number) {
    const novaLista = [...tarefas];

    novaLista[posicao].done = true;

    setTarefas(novaLista);
    localStorage.setItem("mykey", JSON.stringify(novaLista));
  }

  function deletarTarefa(posicao: number) {
    const novaLista = [...tarefas];
    novaLista.splice(posicao, 1);
    setTarefas(novaLista);
    localStorage.setItem("mykey", JSON.stringify(novaLista));
  }

  useEffect(() => {
    if (tarefas.length >= 10) {
      alert("Chegou a 10 tarefas");
    }
  }, [tarefas]);

  return (
    <main className="container">
      <h1 className="m-5">📋 Task Manager</h1>
      <form id="new-task" onSubmit={adicionarTarefa}>
        <input
          type="text"
          onChange={(event) => setTituloTarefa(event.target.value)}
          value={tituloTarefa}
        />
        <Botao texto="Adicionar" cor="success" />
      </form>
      <TaskContainer>
        {tarefas.map((tarefa: Tarefa, posicao: number) => {
          return (
            <TaskItem
              titulo={tarefa.titulo}
              done={tarefa.done}
              concluirTarefa={() => concluirTarefa(posicao)}
              deletarTarefa={() => deletarTarefa(posicao)}
            />
          );
        })}
      </TaskContainer>
    </main>
  );
}

export default App;
