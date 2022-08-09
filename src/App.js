import {Route, Routes} from "react-router-dom";
import "./App.css";
import EjercicioUno from "./Componentes/Ejercicios/Ejercicio_1";
import EjercicioDos from "./Componentes/Ejercicios/Ejercicio_2";
import EjercicioTres from "./Componentes/Ejercicios/Ejercicio_3";
import EjercicioCuatro from "./Componentes/Ejercicios/Ejercicio_4";
import EjercicioCinco from "./Componentes/Ejercicios/Ejercicio_5";
import Home from "./Componentes/HomePage";
import ToDoList from "./ToDoList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/ejerciciouno" element={<EjercicioUno />} />
        <Route path="/ejerciciodos" element={<EjercicioDos />} />
        <Route path="/ejerciciotres" element={<EjercicioTres />} />
        <Route path="/ejerciciocuatro" element={<EjercicioCuatro />} />
        <Route path="/ejerciciocinco" element={<EjercicioCinco />} />
      </Routes>
    </div>
  );
}

export default App;
