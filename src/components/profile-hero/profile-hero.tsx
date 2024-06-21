import React from "react";
import * as Style from "@/components/profile-hero/profile-hero.style";
import assets from "@/config/assets";

export default function ProfileHero() {
  return (
    <Style.ProfileHeroWrapper>
      <img
        src={assets.profile.src}
        width={assets.profile.width}
        height={assets.profile.height}
        alt="Profile picture of James FS Craig"
      />
      <div>
        <h1>James Frederick Stephen Craig</h1>
        <h2 aria-labelledby="development-list">I Develop</h2>
        <ul id="development-list">
          <li>Websites</li>
          <li>Web apps</li>
          <li>Games</li>
          <li>XR (VR/AR) experiences</li>
          <li>Touchscreens</li>
        </ul>
      </div>
    </Style.ProfileHeroWrapper>
  );
}
