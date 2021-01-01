import {
  Avatar,
  Box,
  Button,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex bg="gray.100" justify="space-between" p="4">
      <Box>Logo</Box>
      <Box>
        <Text
          as={Link}
          fontWeight="600"
          fontSize="0.8em"
          mr="4"
          _hover={{ color: "blue.600", textDecoration: "none" }}
        >
          DOCS
        </Text>
        <Text
          as={Link}
          fontWeight="600"
          fontSize="0.8em"
          mr="4"
          _hover={{ color: "blue.600", textDecoration: "none" }}
        >
          API REFERENCE
        </Text>
        <Text
          as={Link}
          fontWeight="600"
          fontSize="0.8em"
          mr="4"
          _hover={{ color: "blue.600", textDecoration: "none" }}
        >
          SHOWCASE
        </Text>
      </Box>
      <Box>
        <Menu>
          <MenuButton as={Button} size="sm" colorScheme="transparent">
            <Avatar size="xs" />
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Notifications</MenuItem>

            <MenuItem>Coupons</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};
