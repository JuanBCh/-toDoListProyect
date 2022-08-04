import {useState} from "react";
import ToDo from "./ToDo";

function Conteiner(props) {
  const [todo, setTodo] = useState("");
  const [todes, setTodes] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodos = (props) => {
    setTodo(<ToDo title={title} description={description} />);
    setTodes([...todes, todo]);
  };
  return (
    <main>
      <header>
        <input
          placeholder="Activity"
          onInput={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Describe your activity"
          onKeyDown={(e) => {
            setDescription(e.target.value);
          }}></textarea>
        <button onClick={addTodos}>Submit</button>
      </header>
      <section>{todes}</section>
    </main>
  );
}

export default Conteiner;
