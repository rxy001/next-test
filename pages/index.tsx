"use client";
import { Profiler } from "react";
import { NexProvider, Button, defineBasicTheme } from "@nex-ui/react";

const theme = defineBasicTheme({
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

type ExtraTheme = typeof theme;

declare module "@nex-ui/react" {
  interface Theme extends ExtraTheme {}
}

const Home = () => {
  return (
    <NexProvider theme={theme}>
      <Profiler
        id="button"
        onRender={(...a) => {
          console.log(a);
        }}
      >
        {new Array(1000).fill(undefined).map((_, i) => (
          <Button color="custom" key={i}>
            123123
          </Button>
        ))}
      </Profiler>
    </NexProvider>
  );
};

export default Home;
