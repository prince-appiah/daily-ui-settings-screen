import { Flex } from "@chakra-ui/react";

import { Main } from "./Main";
import { Sidebar } from "./Sidebar";

function App() {
  return (
    <Flex w="100%" h="100vh">
      <Sidebar />
      <Main />
    </Flex>
  );
}

export default App;
