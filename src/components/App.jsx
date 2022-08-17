import Titulo from "./Titulo";
import SubTitulo from "./SubTitulo";
import { Box } from "./Box";
import RoundedBox from "./RoundedBox/RoundedBox";

import GlobalStyle, { Theme } from "theme/global";

function App() {
  return (
    <Theme>
      <div className="App">
        <GlobalStyle />
        <Titulo msg="Styled Components" color="green" weight="bold" uppercase />
        <h6>Muy bueeeno che...</h6>
        <SubTitulo
          msg="probando un poco..."
          color="SaddleBrown"
          weight="bold"
        />
        <SubTitulo color="blue" weight="bold" uppercase isButton />
        <Box />
        <RoundedBox />
      </div>
    </Theme>
  );
}

export default App;
