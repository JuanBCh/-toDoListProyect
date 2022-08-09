function Input(props) {

  
  return (
    <input
      id={props.id}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onInput={props.onInput}
    />
  );
}
export default Input;
