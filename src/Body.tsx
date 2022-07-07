import { Box, useColorModeValue } from "@chakra-ui/react";
import { HomeView } from "./homeSection/HomeWiew";
import { NavBar } from "./NavBar/NavBar";
import { Switch, Route, Redirect } from "react-router-dom";
import { AboutView } from "./aboutSection/AboutView";
import { WorksView } from "./worksSection/WorksView";

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
          <Redirect from="/" to="/portfolio/home" exact />
          <Redirect from="/portfolio" to="/portfolio/home" exact />

          <Route exact path="/portfolio/home">
            <HomeView />
          </Route>

          <Route exact path="/portfolio/about">
            <AboutView />
          </Route>

          <Route exact path="/portfolio/works">
            <WorksView />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
};

