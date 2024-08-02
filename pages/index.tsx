"use client";
import { NexProvider, Button, createTheme } from "@nex-ui/react";

const theme = createTheme({
  colors: {
    custom: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
      contrastText: "#fff",
    },
  },
});

type Config = typeof theme;

declare module "@nex-ui/react" {
  export interface UserConfig extends Config {}
}

const Home = () => {
  return (
    <NexProvider theme={theme}>
      <Button color="custom">123123</Button>
    </NexProvider>
  );
};

export default Home;
