"use client";

import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    color-scheme: light dark;
    font-family: system-ui, sans-serif;
    overscroll-behavior: none;
  }

  main {
    padding: 1rem;
  }
`;
