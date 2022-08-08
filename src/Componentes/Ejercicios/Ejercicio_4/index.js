import {useState} from "react";
import Button from "../../Button";
import Input from "../../Display/Input";
import InputButton from "../Ejercicio_1/InputButton";
import Counter from "./Counter";
import "./Counter.css";

function EjercicioCuatro() {
  const [input, setInput] = useState("");
  const [text, setText] = useState([]);

  const manageInput = (e) => {
    setInput(e.target.value);
  };
  const setCounterText = (i) => {
    setText(i);
  };
  const manageText = () => {
    if (input === "") {
      return;
    }
    setText((prevSt) => {
      const newSt = [...prevSt, input];
      return newSt;
    });
    setInput("");
  };

  return (
    <main className="contMain">
      <Input value={input} onInput={manageInput} placeholder="Contar..." />
      <Button onClick={manageText} text="Agregar!" />
      <div>
        {text.map((i) => {
          return <Counter text={i} />;
        })}
      </div>
    </main>
  );
}
export default EjercicioCuatro;
