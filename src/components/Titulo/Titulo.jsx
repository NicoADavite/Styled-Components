import StyledTitulo from "./Titulo.styles";

const Titulo = ({ msg, color, weight, uppercase }) => {
  return (
    <StyledTitulo {...{ color, weight, uppercase }}>{msg || "Hola Mundo"}</StyledTitulo>
  );
};

export default Titulo;
