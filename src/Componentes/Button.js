function Button(props) {
  return (
    <button
      id="agregar"
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}>
      {props.text}
    </button>
  );
}
export default Button;
