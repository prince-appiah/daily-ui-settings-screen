import { Flex, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import analytics from "./icons/Activity.svg";
import discover from "./icons/Discovery.svg";
import receipts from "./icons/Document.svg";
import mail from "./icons/Message.svg";
import settings from "./icons/Setting.svg";
import coupon from "./icons/Ticket Star.svg";

export const Sidebar = () => {
  const sideIcons = {
    discover,
    analytics,
    mail,
    receipts,
    coupon,
    settings,
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="start"
      w="7%"
      bg="gray.900"
      color="white"
    >
      <UnorderedList
        listStyleType="none"
        mt="8rem"
        display="flex"
        flexDirection="column"
      >
        {Object.values(sideIcons).map((icon) => (
          <ListItem as={Link} my="4" p="0">
            {/* <ListIcon as={icon} boxSize="1.8em" /> */}
            <img src={icon} alt="" width="24" height="24" />
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
};
