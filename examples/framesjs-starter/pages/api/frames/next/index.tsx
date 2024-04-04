/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next/pages-router";
import { frames } from "../../frames";

const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <span>
        This is next frame and you clicked button:{" "}
        {ctx.pressedButton ? "✅" : "❌"}
      </span>
    ),
    buttons: [
      <Button action="post" target="/">
        Previous frame
      </Button>,
    ],
  };
});

export default handleRequest;
