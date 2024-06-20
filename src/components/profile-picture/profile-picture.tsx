import React from "react";
import * as Style from "@/components/profile-picture/profile-picture.style";
import assets from "@/config/assets";

export default function ProfilePicture() {
  return (
    <Style.ProfilePictureWrapper>
      <img
        src={assets.profile.src}
        width={assets.profile.width}
        height={assets.profile.height}
        alt="Profile picture of James FS Craig"
      />
    </Style.ProfilePictureWrapper>
  );
}
