import styled from "styled-components";

export const StyledImage = styled.img`
  display: block;
  width: ${width => width ? width : "500px"};
  border: ${border => border ? border : "0px"};
`

