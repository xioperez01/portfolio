import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Body } from "./Body";
import { AngieTheme } from "./CustomTheme";
import i18n from "./locale/i18n";

i18n.init();

export const App = (): JSX.Element => {
  return (
    <Router>
      <ChakraProvider theme={AngieTheme}>
        <ColorModeProvider>
          <Body />
        </ColorModeProvider>
      </ChakraProvider>
    </Router>
  );
};

