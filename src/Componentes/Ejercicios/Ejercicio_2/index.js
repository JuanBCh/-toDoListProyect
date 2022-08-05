import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../../Button";
import "./index.css";

function EjercicioDos() {
  const [uno, setUno] = useState({backgroundColor: "red"});
  const [dos, setDos] = useState({backgroundColor: "blue"});
  const [tres, setTres] = useState({backgroundColor: "orange"});
  const [cuatro, setCuatro] = useState({backgroundColor: "yellow"});

  const navigate = useNavigate();

  const colors = `rgb(
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)}
  )`;

  return (
    <>
      <div className="ej-2">
        <div
          id="1"
          style={uno}
          onClick={() =>
            setUno({
              backgroundColor: colors,
            })
          }
          className="cuadrado-uno"></div>
        <div
          id="2"
          style={dos}
          onClick={() =>
            setDos({
              backgroundColor: colors,
            })
          }
          className="cuadrado-dos"></div>
        <div
          id="3"
          style={tres}
          onClick={() =>
            setTres({
              backgroundColor: colors,
            })
          }
          className="cuadrado-tres"></div>
        <div
          id="4"
          style={cuatro}
          onClick={() =>
            setCuatro({
              backgroundColor: colors,
            })
          }
          className="cuadrado-cuatro"></div>
      </div>
      <Button text="Volver" onClick={() => navigate("/")} />
    </>
  );
}
export default EjercicioDos;
