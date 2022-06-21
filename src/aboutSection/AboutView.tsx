import { Flex, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const AboutView = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      maxW="1200px"
      h="100%"
      mx="auto"
    >
      <Heading fontSize={{ base: "2xl", md: "3xl", "2xl": "4xl" }}>
        {t("about")}
      </Heading>
    </Flex>
  );
};

