import { ThemeProvider, createGlobalStyle } from "styled-components";

import colors from "./colors";
import sizes from "./sizes";

const theme = {
  colors,
  sizes,
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const GlobalStyle = createGlobalStyle`
	h6{
		background-color: #000;
		color: red;
		font-size: 35px;
		padding: 2rem;
		text-align: center;
	}
`;

export default GlobalStyle;
