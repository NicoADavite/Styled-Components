import Titulo from "./Titulo";
import SubTitulo from "./SubTitulo";

import { Theme } from "theme/global"
import { Box } from "./Box";

function App() {
  return (
    <Theme>
      <div className="App">
        <Titulo msg="Styled Components" color="green" weight="bold" uppercase/>
        <SubTitulo msg="probando un poco..." color="SaddleBrown" weight="bold"/>
        <SubTitulo color="blue" weight="bold" uppercase isButton/>
        <Box/>
      </div>
    </Theme>
  );
}

export default App;