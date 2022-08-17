import StyledSubTitulo from "./SubTitulo.styles";

const SubTitulo = ({ msg, color, weight, uppercase, isButton }) => {
  return (
    <StyledSubTitulo {...{ color, weight, uppercase, isButton }}>
      {msg || "Hola soy un subtitulo"}
    </StyledSubTitulo>
  );
};

export default SubTitulo;
