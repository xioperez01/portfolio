import { Heading, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const WorksView = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <VStack alignItems="center" w="100%" maxW="1200px" h="100%" mx="auto">
      <Heading fontSize={{ base: "2xl", md: "3xl", "2xl": "4xl" }}>
        {t("works")}
      </Heading>
    </VStack>
  );
};

