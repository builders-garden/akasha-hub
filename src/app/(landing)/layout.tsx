import * as React from "react";

import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { CookieBanner } from "@/components/landing/fragments/cookie-banner";

export default function MarketingLayout(
  props: React.PropsWithChildren
): React.JSX.Element {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
      <CookieBanner />
    </div>
  );
}
