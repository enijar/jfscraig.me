"use client";

import styled from "styled-components";

export const ProfileHeroWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(150px, 250px) auto;
  align-items: center;
  gap: 1rem;

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 50%;
  }
`;
