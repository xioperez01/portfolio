import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import image from "../images/Profile_bg_transparent.png";

export const HomeView = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-evenly"
      w="100%"
      maxW="1200px"
      h="100%"
      pt={4}
      mx="auto"
    >
      <Flex direction="column" alignItems="center">
        <Heading fontSize={{ base: "lg", md: "3vw", "2xl": "6xl" }}>
          {t("home_section_title")}
        </Heading>
        <Text fontSize={{ base: "md", md: "2vw", "2xl": "4xl" }}>{`<${t(
          "home_section_subtitle"
        )} />`}</Text>
        <Button colorScheme={useColorModeValue("primary", "blackAlpha")} mt={8}>
          {t("contact")}
        </Button>
      </Flex>
      <Image
        rounded="20%"
        w="25vw"
        h="25vw"
        minH="200px"
        minW="200px"
        src={image}
      />
    </Flex>
  );
};

