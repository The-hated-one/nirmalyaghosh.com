import { Box, HStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

interface NavLink {
  url: string;
  title: string;
}

const LINKS = [
  {
    url: "/projects",
    title: "Projects",
  },
  {
    url: "/articles",
    title: "Articles",
  },
  {
    url: "/guides",
    title: "Guides",
  },
  {
    url: "/about",
    title: "About",
  },
];

const Navbar: FC = () => {
  const menuNode = () => {
    const socialLinksNode = () => {
      return (
        <Box display="flex" alignItems="center" fontSize="sm">
          <HStack spacing={4}>
            <Link
              px={4}
              py={2}
              href="https://github.com/ghoshnirmalya"
              rounded="sm"
              fontSize="sm"
              borderWidth={1}
              borderColor="transparent"
              _hover={{
                textDecoration: "none",
                bgColor: "gray.900",
              }}
              _focus={{ outline: "none" }}
            >
              Github
            </Link>
            <Link
              px={4}
              py={2}
              href="https://www.linkedin.com/in/ghoshnirmalya/"
              rounded="sm"
              fontSize="sm"
              borderWidth={1}
              borderColor="transparent"
              _hover={{
                textDecoration: "none",
                bgColor: "gray.900",
              }}
              _focus={{ outline: "none" }}
            >
              LinkedIn
            </Link>
          </HStack>
        </Box>
      );
    };

    return (
      <HStack
        isInline
        spacing={[0, 4]}
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
      >
        {[
          LINKS.map((link: NavLink) => {
            return (
              <Box key={link.url}>
                <Link
                  as={NextLink}
                  px={4}
                  py={2}
                  href={link.url}
                  rounded="sm"
                  fontSize="sm"
                  borderWidth={1}
                  borderColor="transparent"
                  _hover={{
                    textDecoration: "none",
                    bgColor: "gray.900",
                  }}
                  _focus={{ outline: "none" }}
                >
                  {link.title}
                </Link>
              </Box>
            );
          }),
        ]}
        {socialLinksNode()}
      </HStack>
    );
  };

  return (
    <Box as="header" zIndex={1} borderTopWidth={5} borderColor="blue.400">
      <Box mx="auto" px={4}>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          py={4}
          flexDir={["column", "column", "row"]}
          gridGap={[4, 4, 0]}
        >
          <Box display="flex" alignItems="center">
            <Link
              href="/"
              display="flex"
              _focus={{ outline: "none" }}
              aria-label="Logo"
              as={NextLink}
              _hover={{
                textDecoration: "none",
              }}
            >
              <svg
                height={32}
                width={32}
                viewBox="0 0 250 250"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="125"
                  cy="125"
                  r="121"
                  fill="white"
                  stroke="black"
                  strokeWidth="8"
                />
                <path
                  d="M106.503 84.8457L107.303 95.9541C114.175 87.3636 123.388 83.0684 134.94 83.0684C145.131 83.0684 152.714 86.0602 157.69 92.0439C162.667 98.0277 165.215 106.974 165.333 118.882V181H139.65V119.504C139.65 114.053 138.465 110.114 136.096 107.685C133.726 105.196 129.786 103.952 124.276 103.952C117.049 103.952 111.628 107.033 108.014 113.194V181H82.3311V84.8457H106.503Z"
                  fill="black"
                />
              </svg>
            </Link>
          </Box>
          {menuNode()}
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;