"use client";
import { ChangeEvent, Profiler, useRef } from "react";
import type { MouseEvent } from "react";
import {
  NexProvider,
  Button,
  defineBasicTheme,
  defineComponentsTheme,
} from "@nex-ui/react";

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
      contrastText: "blue",
    },
  },
});

// const components = defineComponentsTheme({
//   button: {
//     defaultProps: {
//       color: "purple",
//       size: "lg",
//     },
//   },
// });

type ExtraTheme = typeof theme;

declare module "@nex-ui/react" {
  interface ThemeOverrides extends ExtraTheme {}
}

const Home = () => {
  return (
    <NexProvider theme={theme}>
      <Button color="red">123123</Button>
    </NexProvider>
  );
};

export default Home;
