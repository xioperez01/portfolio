import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { HashRouter } from "react-router-dom";
import { Body } from "./Body";
import { AngieTheme } from "./CustomTheme";
import i18n from "./locale/i18n";

i18n.init();

export const App = (): JSX.Element => {
  return (
    <HashRouter>
      <ChakraProvider theme={AngieTheme}>
        <ColorModeProvider>
          <Body />
        </ColorModeProvider>
      </ChakraProvider>
    </HashRouter>
  );
};

