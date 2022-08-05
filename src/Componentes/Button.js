function Button(props) {
  return (
    <button
      id="agregar"
      className={props.className}
      onClick={props.onClick}
      style={props.style}
      disabled={props.disabled}>
      {props.text}
    </button>
  );
}
export default Button;
