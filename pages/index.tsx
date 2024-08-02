"use client";
import { css } from "@emotion/react";
import { NexProvider, Button } from "@nex-ui/react";
import { useMemo } from "react";

const Home = () => {
  const a = useMemo(() => {
    return 123;
  }, []);
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        color: red;
      `}
    >
      <NexProvider>
        <Button>123123</Button>
      </NexProvider>
    </div>
  );
};

export default Home;
