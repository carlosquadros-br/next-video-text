import React from "react";

import NextVideoText from "./next-video-text/index";

const story = {
  title: "next-video-text",
  component: NextVideoText,
};

export const Default = () => (
  <NextVideoText pathVideoInsideText="https://www.w3schools.com/html/mov_bbb.mp4">
    <h1>Next Video: any Text: any</h1>
  </NextVideoText>
);

export default story;
