import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";

interface IProps {
  href: string;
  text: string;
}

const Link: FC<IProps> = ({ href, text }) => {
  return (
    <ChakraLink
      as={NextLink}
      href={href}
      _hover={{
        textDecoration: "none",
      }}
    >
      {text}
    </ChakraLink>
  );
};

export default Link;
