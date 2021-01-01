import { Flex } from "@chakra-ui/react";
import { Body } from "./Body";
import { Header } from "./Header";

export const Main = () => {
  return (
    <Flex
      w="full"
      direction="column"

      // color={["white", "white", "primary.700", "primary.700"]}
    >
      <Header />
      <Body />
    </Flex>
  );
};
