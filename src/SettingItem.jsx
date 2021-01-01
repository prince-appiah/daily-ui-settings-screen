import { GridItem, Text } from "@chakra-ui/react";

export const SettingItem = ({ bgColor, icon, title, iconColor }) => {
  return (
    <GridItem bg={bgColor} w="100%" h="14em" px="8" py="6" borderRadius="12px">
      {/* <Icon as={Icon} width="8" height="8" color={iconColor} /> */}

      <img src={icon} width="30" height="30" alt={title} />
      <Text mt="4" fontWeight="800" letterSpacing="0.06em">
        {title}
      </Text>
      <Text mt="4" fontWeight="500" letterSpacing="0.025em">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eum
        esse blanditiis rem illum?
      </Text>
    </GridItem>
  );
};
