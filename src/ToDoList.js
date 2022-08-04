import {useState} from "react";
import Display from "./Componentes/Display/Display";
import TaskList from "./Componentes/Task list/TaskList";
import "./ToDoList.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((previousState) => {
      const res = [...previousState, task];
      return res;
    });
  };

  return (
    <main>
      <h1>Lista de tareas!</h1>
      <Display addTask={addTask} />
      <h3>Tareas</h3>
      {tasks.length === 0 ? (
        <p id="mensaje-lista-vacia">Parece que no hay nada por aquí!</p>
      ) : (
        <TaskList tasks={tasks} setTasks={setTasks} />
      )}
      <p class="tips">Tip: Pueden borrar tareas clickeando en ellas</p>
    </main>
  );
}
export default ToDoList;
