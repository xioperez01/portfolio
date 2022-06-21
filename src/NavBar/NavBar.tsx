import {
  Box,
  Button,
  Flex,
  HStack,
  Slide,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { NavMenu } from "./NavMenu";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export const NavBar = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const { isOpen, onToggle } = useDisclosure();
  const isMobileBreakpoint = useBreakpointValue({ base: true, md: false });

  React.useEffect(() => {
    if (!isMobileBreakpoint) {
      isOpen && onToggle();
    }
  }, [isMobileBreakpoint, isOpen, onToggle]);
  return (
    <>
      <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
        <Box w="100%" h="100vh" position="relative">
          <Box
            as="button"
            position="absolute"
            top="16px"
            left="16px"
            onClick={onToggle}
            fontSize="4vw"
            color={useColorModeValue("white", "black")}
            _hover={{
              transition: "0.3s ease-out",
              color: "primary.600",
            }}
          >
            <Box aria-hidden as={isOpen ? HiX : HiOutlineMenu} />
            <Box srOnly>{isOpen ? "Cerrar menu" : "Abrir menu"}</Box>
          </Box>
          <VStack
            alignItems="center"
            justifyContent="right"
            w="100%"
            h="100%"
            bg={useColorModeValue("black", "white")}
            spacing="auto"
            py={20}
            px={6}
          >
            <NavMenu isMovile={true} handleClick={onToggle} />
          </VStack>
        </Box>
      </Slide>

      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        bg={useColorModeValue("black", "white")}
        display={{ base: "flex", md: "none" }}
        h="22px"
      >
        <Box
          as="button"
          onClick={onToggle}
          fontSize="2xl"
          color={useColorModeValue("white", "black")}
          _hover={{
            transition: "0.3s ease-out",
            color: "primary.600",
          }}
        >
          <Box aria-hidden as={isOpen ? HiX : HiOutlineMenu} />
          <Box srOnly>{isOpen ? "Cerrar menu" : "Abrir menu"}</Box>
        </Box>
        <Flex dir="row" alignItems="center">
          <Button
            color={useColorModeValue("white", "black")}
            variant="link"
            onClick={async () => {
              const currentLanguage = i18n.language;
              await i18n.changeLanguage(currentLanguage === "en" ? "es" : "en");
            }}
          >
            {t("lang")}
          </Button>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
      </Flex>

      <HStack
        alignItems="center"
        justifyContent="right"
        w="100%"
        h="22px"
        bg={useColorModeValue("black", "white")}
        spacing={6}
        display={{ base: "none", md: "flex" }}
        mt={0}
      >
        <NavMenu isMovile={false} />
      </HStack>
    </>
  );
};

