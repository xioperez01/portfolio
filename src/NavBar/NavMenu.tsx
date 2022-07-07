import { Button, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export const NavMenu = ({
  isMovile,
  handleClick,
}: {
  isMovile: boolean;
  handleClick?: () => void;
}): JSX.Element => {
  const { t, i18n } = useTranslation();
  const color = useColorModeValue("white", "black");
  return (
    <>
      <Button
        as={NavLink}
        to="home"
        fontWeight="semibold"
        fontSize={isMovile ? "8vw" : "md"}
        color={useColorModeValue("white", "black")}
        variant="link"
        onClick={() => isMovile && handleClick && handleClick()}
        _hover={{
          transition: "0.3s ease-out",
          color: "primary.600",
          _after: {
            transform: "scaleX(1)",
            transformOrigin: "bottom left",
          },
        }}
        _after={{
          content: '""',
          position: "absolute",
          width: "100%",
          transform: "scaleX(0)",
          height: "2px",
          bottom: "0",
          left: "0",
          backgroundColor: "primary.600",
          transformOrigin: "bottom right",
          transition: "transform 0.3s ease-out",
        }}
      >
        {t("home")}
      </Button>

      <Button
        as={NavLink}
        to="about"
        fontWeight="semibold"
        fontSize={isMovile ? "8vw" : "md"}
        color={useColorModeValue("white", "black")}
        variant="link"
        onClick={() => isMovile && handleClick && handleClick()}
        _hover={{
          transition: "0.3s ease-out",
          color: "primary.600",
          _after: {
            transform: "scaleX(1)",
            transformOrigin: "bottom left",
          },
        }}
        _after={{
          content: '""',
          position: "absolute",
          width: "100%",
          transform: "scaleX(0)",
          height: "2px",
          bottom: "0",
          left: "0",
          backgroundColor: "primary.600",
          transformOrigin: "bottom right",
          transition: "transform 0.3s ease-out",
        }}
      >
        {t("about")}
      </Button>
      <Button
        as={NavLink}
        to="works"
        fontWeight="semibold"
        fontSize={isMovile ? "8vw" : "md"}
        color={useColorModeValue("white", "black")}
        variant="link"
        onClick={() => isMovile && handleClick && handleClick()}
        _hover={{
          transition: "0.3s ease-out",
          color: "primary.600",
          _after: {
            transform: "scaleX(1)",
            transformOrigin: "bottom left",
          },
        }}
        _after={{
          content: '""',
          position: "absolute",
          width: "100%",
          transform: "scaleX(0)",
          height: "2px",
          bottom: "0",
          left: "0",
          backgroundColor: "primary.600",
          transformOrigin: "bottom right",
          transition: "transform 0.3s ease-out",
        }}
      >
        {t("works")}
      </Button>

      <Button
        as={NavLink}
        to="contactme"
        fontWeight="semibold"
        fontSize={isMovile ? "8vw" : "md"}
        color={useColorModeValue("white", "black")}
        variant="link"
        onClick={() => isMovile && handleClick && handleClick()}
        _hover={{
          transition: "0.3s ease-out",
          color: "primary.600",
          _after: {
            transform: "scaleX(1)",
            transformOrigin: "bottom left",
          },
        }}
        _after={{
          content: '""',
          position: "absolute",
          width: "100%",
          transform: "scaleX(0)",
          height: "2px",
          bottom: "0",
          left: "0",
          backgroundColor: "primary.600",
          transformOrigin: "bottom right",
          transition: "transform 0.3s ease-out",
        }}
      >
        {t("contact")}
      </Button>

      {!isMovile && (
        <>
          <Button
            color={color}
            variant="link"
            onClick={async () => {
              const currentLanguage = i18n.language;
              await i18n.changeLanguage(currentLanguage === "en" ? "es" : "en");
            }}
          >
            {t("lang")}
          </Button>
          <ColorModeSwitcher justifySelf="flex-end" />{" "}
        </>
      )}
    </>
  );
};

