import {useState} from "react";
import Button from "../../Button";
import Inputs from "./Inputs";

function EjercicioCinco() {
  const [arrays, setArrays] = useState([
    {
      name: "",
      lastName: "",
      favColor: "",
      age: "",
    },
  ]);
  const [input, setInput] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const manageInputs = (e) => {
    const setThis = e.target.id;
    const toThis = e.target.value;
    setInput({...input, [setThis]: toThis});
  };

  const addPerson = () => {
    const array = {
      name: input.first,
      lastName: input.second,
      favColor: input.third,
      age: input.fourth,
    };
    if (arrays[0].name === "") {
      setArrays([array]);
    } else {
      setArrays([...arrays, array]);
    }
    setInput({
      first: "",
      second: "",
      third: "",
      fourth: "",
    });
  };

  return (
    <main>
      <Inputs input={input} manageInputs={manageInputs} />
      <Button text="Añadir" onClick={addPerson} />
      {arrays[0].name === "" ? (
        <p>Nada por aqui</p>
      ) : (
        arrays.map((array) => {
          return (
            <div style={{background: `${array.favColor}`}}>
              <p>Nombre: {array.name}</p>
              <p>Apellido: {array.lastName}</p>
              <p>Edad: {array.age}</p>
            </div>
          );
        })
      )}
    </main>
  );
}
export default EjercicioCinco;
