function Select(props) {
  return (
    <select
      name="prioridad"
      id="priority"
      value={props.value}
      onChange={props.onChange}>
      <option value="" disabled selected>
        Prioridad
      </option>
      <option value="prioridad-baja">Baja</option>
      <option value="prioridad-media">Media</option>
      <option value="prioridad-alta">Alta</option>
    </select>
  );
}
export default Select;
