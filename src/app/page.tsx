import React from "react";
import pkg from "@/../package.json";

export default function Page() {
  return (
    <main>
      <p>{pkg.name}</p>
      <p>v{pkg.version}</p>
    </main>
  );
}
