import {useState} from "react";
import Button from "../../Button";
import Input from "../../Display/Input";
import Counter from "./Counter";

function EjercicioCuatro() {
  const [input, setInput] = useState("");
  const [text, setText] = useState([]);

  const manageInput = (e) => {
    setInput(e.target.value);
  };

  const manageText = () => {
    setText((prevSt) => {
      const newSt = [...prevSt, input];
      return newSt;
    });
    setInput("");
  };

  return (
    <>
      <Input value={input} onInput={manageInput} />
      <Button onClick={manageText} />
      {text.map((i) => {
        return <Counter text={i} />;
      })}
    </>
  );
}
export default EjercicioCuatro;
