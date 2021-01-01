import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { ProfileSection } from "./ProfileSection";
import { SettingsSection } from "./SettingsSection";

export const Body = () => {
  return (
    <Flex h="full" py="8" px="3" flex="6">
      <Box bg="gray.50" w="25%" borderLeftRadius="12px">
        <ProfileSection />
      </Box>
      <Box w="75%" borderRightRadius="12px">
        <SettingsSection />
      </Box>
    </Flex>
  );
};
