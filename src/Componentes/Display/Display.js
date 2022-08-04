import {useState} from "react";
import Input from "./Input";
import Select from "./Select";
import "./Display.css";
import Button from "../Button";

function Display(props) {
  const [data, setData] = useState({task: "", priority: ""});

  const handleData = (e) => {
    const change = e.target.id;
    const newValue = e.target.value;
    setData({...data, [change]: newValue});
  };
  const registerTask = (e) => {
    e.preventDefault();
    props.addTask(data);
    reset();
  };
  const reset = () => setData({task: "", priority: ""});

  let invalid = data.task === "" || data.priority == "";

  return (
    <form>
      <Input
        id="task"
        name="tarea"
        type="text"
        value={data.task}
        onInput={handleData}
        placeholder="Descripción de la tarea"
      />
      <Select value={data.priority} onChange={handleData} />
      <Button onClick={registerTask} disabled={invalid} text="Agregar!" />
    </form>
  );
}
export default Display;
