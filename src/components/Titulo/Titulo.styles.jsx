import styled from "styled-components";

const StyledTitulo = styled.h1`
  color: ${({ color }) => color || "red"};
  font-size: 40px;
  font-weight: ${({ weight }) => weight || "normal"};
  padding: 15px;
  text-align: center;
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "normal")};
`;

export default StyledTitulo;
