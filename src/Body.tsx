import { Box, useColorModeValue } from "@chakra-ui/react";
import { HomeView } from "./homeSection/HomeWiew";
import { NavBar } from "./NavBar/NavBar";
import { Switch, Route, Redirect } from "react-router-dom";
import { AboutView } from "./aboutSection/AboutView";

export const Body = (): JSX.Element => {
  return (
    <Box w="100%" h="100vh" p={6} bg={useColorModeValue("black", "white")}>
      <NavBar />
      <Box
        w="100%"
        h="calc(100vh - 70px)"
        pt={4}
        color={useColorModeValue("white", "primary.500")}
      >
        <Switch>
          <Redirect from="/" to="home" exact />
          <Redirect from="/portfolio" to="home" exact />

          <Route exact path="/home">
            <HomeView />
          </Route>

          <Route exact path="/about">
            <AboutView />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
};

