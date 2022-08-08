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
    <div>
      <Button text={`${text} +${num}`} onClick={addNum} className="" />
      <Button text="-" onClick={restNum} className="" />
    </div>
  );
}
export default Counter;
