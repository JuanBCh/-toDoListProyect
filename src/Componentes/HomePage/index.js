import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../Button";
import Input from "../Display/Input";
import "./Home.css";

function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const manageName = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="home-div">
      <h1>To Do List</h1>
      <Input placeholder="Name" value={name} onInput={manageName} type="text" />
      <Input placeholder="Password" type="password" />
      <div>
        <Button
          text="LogIn"
          disabled={name !== "" ? false : true}
          onClick={() => navigate("/todolist")}
        />
        <Button text="Invitado" onClick={() => navigate("/todolist")} />
      </div>
      <div style={{marginTop: "2em"}}>
        <h3 style={{textAlign: "center"}}>Ejercicios</h3>
        <Button text="Ejercicio 1" onClick={() => navigate("/ejerciciouno")} />
        <Button text="Ejercicio 2" onClick={() => navigate("/ejerciciodos")} />
        <Button text="Ejercicio 3" onClick={() => navigate("/ejerciciotres")} />
      </div>
    </div>
  );
}
export default Home;
