"use client";

import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  html {
    color-scheme: light dark;
    font-family: system-ui, sans-serif;
    overscroll-behavior: none;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    line-height: 1.5;
  }

  main {
    padding: 1rem;
  }

  ul, ol {
    padding-left: 1em;
  }
`;
