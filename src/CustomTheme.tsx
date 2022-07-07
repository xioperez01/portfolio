import { Button, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const AngieTheme = extendTheme(
  {
    styles: {
      global: (props: Record<string, unknown>) => ({
        body: {
          color: mode("white", "black")(props),
        },
      }),
    },
    config: {
      initialColorMode: "light",
      useSystemColorMode: false,
    },
    colors: {
      primary: {
        DEFAULT: "#E900FF",
        "50": "#F9B8FF",
        "100": "#F7A3FF",
        "200": "#F47AFF",
        "300": "#F052FF",
        "400": "#ED29FF",
        "500": "#E900FF",
        "600": "#B600C7",
        "700": "#82008F",
        "800": "#4F0057",
        "900": "#1C001F",
      },
    },
    components: {
      Button,
    },
  },
  withDefaultColorScheme({
    colorScheme: "primary",
    components: ["Button"],
  })
);

