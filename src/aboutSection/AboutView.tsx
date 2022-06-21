import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useColorModeValue,
  Button,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import image from "../images/Img_2_Cartoon.png";
import { databases, frameworks, languajes, others } from "./contents";

export const AboutView = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <VStack alignItems="center" w="100%" maxW="1200px" h="100%" mx="auto">
      <Heading fontSize={{ base: "2xl", md: "3xl", "2xl": "4xl" }}>
        {t("about")}
      </Heading>

      <HStack alignItems="center" spacing={10} my="auto" h="100%">
        <Flex
          direction="column"
          w="50%"
          h="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            rounded="20%"
            w="20vw"
            h="20vw"
            minH="200px"
            minW="200px"
            src={image}
          />
          <Heading
            color={useColorModeValue("primary.500", "black")}
            my={4}
            fontSize={{ base: "xl", md: "2xl", "2xl": "3xl" }}
          >
            {t("who_i_am")}
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} textAlign="center">
            {t("who_i_am_description")}
          </Text>
        </Flex>

        <Flex
          direction="column"
          w="50%"
          h="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Heading
            color={useColorModeValue("primary.500", "black")}
            mb={6}
            fontSize={{ base: "xl", md: "2xl", "2xl": "3xl" }}
          >
            {t("skills")}
          </Heading>

          <Accordion allowToggle w="80%" defaultIndex={0}>
            <AccordionItem
              borderTop={useColorModeValue(
                "1px solid #E900FF",
                "1px solid #E900FF"
              )}
            >
              <h2>
                <AccordionButton
                  color={useColorModeValue("white", "black")}
                  _expanded={{
                    borderBottom: useColorModeValue(
                      "1px solid #E900FF",
                      "1px solid #E900FF"
                    ),
                    //bgColor: "primary.500",
                  }}
                >
                  <Box flex="1" textAlign="left">
                    {t("languajes")}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid columns={2} spacingX={20} spacingY={6}>
                  {languajes.map((l) => (
                    <HStack key={l.label} spacing={4} w="auto">
                      <Image
                        h="30px"
                        w="30px"
                        src={l.icon}
                        backgroundColor={l.needBg ? "white" : ""}
                      />
                      <Text fontWeight="semibold">{l.label}</Text>
                    </HStack>
                  ))}
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              borderTop={useColorModeValue(
                "1px solid #E900FF",
                "1px solid #E900FF"
              )}
            >
              <h2>
                <AccordionButton
                  color={useColorModeValue("white", "black")}
                  _expanded={{
                    borderBottom: useColorModeValue(
                      "1px solid #E900FF",
                      "1px solid #E900FF"
                    ),
                    //bgColor: "primary.500",
                  }}
                >
                  <Box flex="1" textAlign="left">
                    {t("libraries_and_frameworks")}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid columns={2} spacingX={20} spacingY={6}>
                  {frameworks.map((l) => (
                    <HStack key={l.label} spacing={4} w="auto">
                      <Image
                        h="30px"
                        src={l.icon}
                        backgroundColor={l.needBg ? "white" : ""}
                      />
                      <Text fontWeight="semibold">{l.label}</Text>
                    </HStack>
                  ))}
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              borderTop={useColorModeValue(
                "1px solid #E900FF",
                "1px solid #E900FF"
              )}
            >
              <h2>
                <AccordionButton
                  color={useColorModeValue("white", "black")}
                  _expanded={{
                    borderBottom: useColorModeValue(
                      "1px solid #E900FF",
                      "1px solid #E900FF"
                    ),
                    //bgColor: "primary.500",
                  }}
                >
                  <Box flex="1" textAlign="left">
                    {t("databases")}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid columns={2} spacingX={20} spacingY={6}>
                  {databases.map((l) => (
                    <HStack key={l.label} spacing={4} w="auto">
                      <Image
                        h="30px"
                        src={l.icon}
                        backgroundColor={l.needBg ? "white" : ""}
                      />
                      <Text fontWeight="semibold">{l.label}</Text>
                    </HStack>
                  ))}
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              borderY={useColorModeValue(
                "1px solid #E900FF",
                "1px solid #E900FF"
              )}
            >
              <h2>
                <AccordionButton
                  color={useColorModeValue("white", "black")}
                  _expanded={{
                    borderBottom: useColorModeValue(
                      "1px solid #E900FF",
                      "1px solid #E900FF"
                    ),
                    //bgColor: "primary.500",
                  }}
                >
                  <Box flex="1" textAlign="left">
                    {t("others")}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid columns={2} spacingX={20} spacingY={6}>
                  {others.map((l) => (
                    <HStack key={l.label} spacing={4} w="auto">
                      <Image
                        h="30px"
                        src={l.icon}
                        backgroundColor={l.needBg ? "white" : ""}
                      />
                      <Text fontWeight="semibold">{l.label}</Text>
                    </HStack>
                  ))}
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </HStack>
      <Button colorScheme={useColorModeValue("primary", "blackAlpha")} mt={8}>
        {t("Download CV")}
      </Button>
    </VStack>
  );
};

