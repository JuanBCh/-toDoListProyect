import Button from "../Button";
import "./TaskList.css";

function TaskList({tasks, setTasks}) {
  const removeUser = (i) => {
    setTasks((previousState) => {
      const newList = [...previousState];
      newList.splice(i, 1);
      return newList;
    });
  };

  // const editTask = (i) =>{
  //   let previousTasks =
  // }

  return (
    <ul>
      {tasks.map((task, i) => {
        return (
          <div className="fragment">
            <li
              onClick={(e) => {
                removeUser(i);
              }}
              className={task.priority}>
              {task.task}
            </li>
            <Button text="Editar" disabled={false} className="listButton" />
          </div>
        );
      })}
    </ul>
  );
}
export default TaskList;
