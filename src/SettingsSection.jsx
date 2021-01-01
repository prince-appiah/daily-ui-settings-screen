import { Box, Grid } from "@chakra-ui/react";
import lock from "./icons/Lock.svg";
import notification from "./icons/Notification.svg";
import profile from "./icons/Profile.svg";
import wallet from "./icons/Wallet.svg";
import { SettingItem } from "./SettingItem";

export const SettingsSection = () => {
  return (
    <Box px="6">
      <Grid templateColumns="repeat(2,1fr)" gap="4">
        <SettingItem
          bgColor="blue.100"
          icon={profile}
          iconColor="red.400"
          title="Account Info"
        />
        <SettingItem
          bgColor="purple.100"
          icon={notification}
          iconColor="red.400"
          title="Notifications"
        />
        <SettingItem
          bgColor="green.100"
          icon={wallet}
          iconColor="red.400"
          title="Payments"
        />
        <SettingItem
          bgColor="cyan.100"
          icon={lock}
          iconColor="red.400"
          title="Security"
        />
      </Grid>
    </Box>
  );
};
