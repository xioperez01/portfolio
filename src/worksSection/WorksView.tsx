import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Wrap,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { works } from "./contents";
import { WorkCard } from "./WorkCard";

export const WorksView = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Flex
      direction="column"
      alignItems="center"
      w="100%"
      maxW="1200px"
      h="100%"
      mx="auto"
    >
      <Heading fontSize={{ base: "2xl", md: "3xl", "2xl": "4xl" }}>
        {t("works")}
      </Heading>
      <Box w="100%" h="100%" pt={10}>
        <Tabs variant="unstyled" w="100%">
          <TabList justifyContent="center">
            <Tab
              fontWeight="semibold"
              px={4}
              py={1}
              _selected={{
                color: "white",
                bg: "primary.500",
                _hover: { bg: "primary.600" },
              }}
            >
              Code
            </Tab>
            <Tab
              fontWeight="semibold"
              px={4}
              py={1}
              _selected={{
                color: "white",
                bg: "primary.500",
                _hover: { bg: "primary.600" },
              }}
            >
              Mokups
            </Tab>
          </TabList>

          <TabPanels h="100%" display="flex" justifyContent="center">
            <TabPanel w="100%" h="calc(100vh - 210px)" p={0} pt={4}>
              <Wrap spacing="30px" h="calc(100vh - 210px)" justify="center">
                {works.map((w, index) => (
                  <WorkCard key={w.name + index} work={w} />
                ))}
              </Wrap>
            </TabPanel>

            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

