function ToDo(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      <button>x</button>
      <p>{props.description}</p>
    </section>
  );
}
export default ToDo;
