import styled, { css, keyframes } from "styled-components";

const styCompPink = "#DB7092";
const styCompPink80 = "#db99ae";

const setTransition = (time) => `all ${time} ease-in-out`;

const fadeIn = keyframes`
    0%{
        opacity: 0%;
    }
    100%{
        opacity: 100%;
    }
`;

const StyledSubTitulo = styled.h1`
  background-color: ${styCompPink};
  color: ${({ color }) => color || "blue"};
  font-size: 30px;
  font-weight: ${({ weight }) => weight || "normal"};
  padding: 15px;
  text-align: center;
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "normal")};
  transition: ${setTransition("0.35s")};
  animation: ${fadeIn} 2s ease-in-out;

  ${({ isButton }) =>
    isButton &&
    css`
      margin: 40px;
      border-radius: 20px;
    `}

  &:hover {
    background-color: ${styCompPink80};
  }
`;

export default StyledSubTitulo;

// styled no permite generar un elemento html

// css nos permite incorporar más código css dentro de un styled
