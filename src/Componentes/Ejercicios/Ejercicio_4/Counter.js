import {useState} from "react";
import Button from "../../Button";

function Counter({text}) {
  const [num, setNum] = useState(0);

  const addNum = () => {
    setNum(num + 1);
  };
  const restNum = () => {
    setNum(num - 1);
  };

  return (
    <div className="contDiv">
      <div className="divDiv" onClick={addNum}>
        <span>{num}</span>
        <p>{text}</p>
      </div>
      <Button text="-" onClick={restNum} className="restBtn" />
    </div>
  );
}
export default Counter;
