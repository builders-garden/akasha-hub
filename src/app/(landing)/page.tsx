import * as React from "react";

import { Hero } from "@/components/landing/sections/hero";
import { Hubs } from "@/components/landing/sections/hubs";

export default function IndexPage(): React.JSX.Element {
  return (
    <>
      <Hero />
      <Hubs />
    </>
  );
}
