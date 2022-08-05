import {useState} from "react";
import InputButton from "./InputButton";
import Textarea from "./Textarea";
import "./Ejercicio_1.css";
import Button from "../../Button";
import {useNavigate} from "react-router-dom";

function EjercicioUno() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const setTextArea = (i) => {
    setText(i);
  };

  return (
    <>
      <div className="ej-1">
        <h3>Ejercicio 1</h3>
        <InputButton addValue={setTextArea} />
        <Textarea value={text} />
      </div>
      <Button
        text="Volver"
        style={{position: "relative", bottom: "20em"}}
        onClick={() => navigate("/")}
      />
    </>
  );
}
export default EjercicioUno;
