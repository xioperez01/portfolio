/* eslint-disable max-len */
import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import "./helper.css";

export interface WorkType {
  image: string;
  name: string;
  description: string;
  ghLink: string;
  deployLink: string;
}

interface WorkCardProps {
  work: WorkType;
}

export const WorkCard = ({ work }: WorkCardProps): JSX.Element => {
  const { t } = useTranslation();

  const { name, image, description, ghLink, deployLink } = work;

  const handleDisplay = (): void => {
    const element = document.getElementById(`box-${name}`);
    element?.classList.add("workCardInformationDisplay");
  };

  const handleRemove = (): void => {
    const element = document.getElementById(`box-${name}`);
    element?.classList.remove("workCardInformationDisplay");
  };

  return (
    <Box
      w="100%"
      maxW="20vw"
      minW="200px"
      position="relative"
      onMouseEnter={handleDisplay}
      onMouseLeave={handleRemove}
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        top={0}
        left={0}
        p={4}
        className="workCardInformation"
        id={`box-${name}`}
        bg="whiteAlpha.600"
        shadow="md"
        textAlign="center"
      >
        <Heading color={useColorModeValue("primary.500", "black")}>
          {name}
        </Heading>
      </Box>

      <Image w="100%" h="100%" src={image} />
    </Box>
  );
};

