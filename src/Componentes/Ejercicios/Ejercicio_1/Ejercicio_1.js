import {useState} from "react";
import InputButton from "./InputButton";
import Textarea from "./Textarea";

function EjercicioUno() {
  const [text, setText] = useState("");

  const setTextArea = (i) => {
    setText(i);
  };

  return (
    <>
      <InputButton addValue={setTextArea} />
      <Textarea value={text} />
    </>
  );
}
export default EjercicioUno;
