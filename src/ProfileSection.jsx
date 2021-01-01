import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoShieldOutline } from "react-icons/io5";

export const ProfileSection = () => {
  return (
    <Box py="8" px="6">
      <Box mb="8">
        <Text fontSize="14px" color="gray.500" fontWeight="500">
          Good day,
        </Text>
        <Text fontSize="20px" fontWeight="700">
          Prince O. Appiah
        </Text>
      </Box>

      <Avatar size="2xl" />

      <Box mt="10">
        <Box display="flex" alignItems="center" my="3" color="gray.500">
          <HiOutlineLocationMarker />
          <Text ml="3" fontWeight="600">
            Accra, Ghana
          </Text>
        </Box>
        <Box display="flex" alignItems="center" my="3" color="gray.500">
          <IoShieldOutline />
          <Text ml="3" fontWeight="600">
            Verified Account
          </Text>
        </Box>
      </Box>

      <Box mt="10">
        <Text fontSize="14px" color="gray.500" fontWeight="600">
          Joined
        </Text>
        <Text fontSize="16px" fontWeight="800">
          2 years ago
        </Text>
      </Box>
    </Box>
  );
};
