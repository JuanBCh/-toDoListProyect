import Input from "../../Display/Input";

function Inputs({input, manageInputs}) {
  return (
    <>
      <Input
        id="first"
        type="text"
        placeholder="Nombre"
        value={input.first}
        onInput={manageInputs}
      />
      <Input
        id="second"
        type="text"
        placeholder="Apellido"
        value={input.second}
        onInput={manageInputs}
      />
      <Input
        id="third"
        type="text"
        placeholder="Color favorito (en inglés ;))"
        value={input.third}
        onInput={manageInputs}
      />
      <Input
        id="fourth"
        type="text"
        placeholder="Edad"
        value={input.fourth}
        onInput={manageInputs}
      />
    </>
  );
}
export default Inputs;
