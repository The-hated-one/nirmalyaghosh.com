import { Box, HStack, VStack } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
  src: string;
  alt: string;
}

const Image: FC<IProps> = ({ src, alt }) => {
  return (
    <VStack
      bgGradient="linear(to-b, #2d3848, #1a202c)"
      p={8}
      borderRadius="sm"
      mx={0}
      spacing={6}
    >
      <Box>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" />
      </Box>
      <HStack spacing={2} fontSize="sm">
        <Box as="span">{alt}</Box>
        <Box as="a" href={src}>
          (Large preview)
        </Box>
      </HStack>
    </VStack>
  );
};

export default Image;
