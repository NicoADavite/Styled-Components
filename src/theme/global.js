import { ThemeProvider } from "styled-components";

import colors from "./colors";
import sizes from "./sizes";

const theme = { 
	colors,
	sizes
}

export const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>
		{children}
	</ThemeProvider>
)