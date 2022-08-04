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
      <Button
        text="LogIn"
        disabled={name !== "" ? false : true}
        onClick={() => navigate("/todolist")}
      />
      <div>
        <Button text="Ejercicio 1" onClick={() => navigate("/ejerciciouno")} />
      </div>
    </div>
  );
}
export default Home;
