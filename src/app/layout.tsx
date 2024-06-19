import React from "react";
import type { Metadata } from "next";
import * as AppStyle from "@/styles/app";
import StyleSheet from "@/components/style-sheet";

export const metadata: Metadata = {
  title: "James FS Craig",
  description: "Tech lead, with over a decade of digital agency experience in London",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <head>
        <title>James FS Craig</title>
        <link rel="icon" href="/favicon.ico" />
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
