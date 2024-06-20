import React from "react";
import * as AppStyle from "@/styles/app";
import StyleSheet from "@/components/style-sheet";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <head>
        <title>James FS Craig</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Tech lead, with over a decade of digital agency experience in London" />
      </head>
      <body>
        <StyleSheet>
          <AppStyle.Reset />
          {props.children}
        </StyleSheet>
      </body>
    </html>
  );
}
