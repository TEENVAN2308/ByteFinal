import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg:'rgb(86, 143, 223)',
        

      },
    }),
  },
});
export default theme;