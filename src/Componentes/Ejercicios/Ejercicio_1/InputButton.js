import {useState} from "react";
import Button from "../../Button";
import Input from "../../Display/Input";

function InputButton(props) {
  const [input, setInput] = useState("");

  const manageInputValue = (e) => {
    setInput(e.target.value);
  };
  const click = () => {
    props.addValue(input);
  };

  return (
    <>
      <Input type="text" value={input} onInput={manageInputValue} />
      <Button text="Submit" onClick={click} />
    </>
  );
}
export default InputButton;
