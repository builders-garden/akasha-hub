"use client";

import * as React from "react";
import Link from "next/link";

import { MobileMenu } from "@/components/landing/mobile-menu";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Routes } from "@/constants/routes";
import { cn } from "@/lib/utils";

export function Navbar(): React.JSX.Element {
  const loggedIn = false;

  return (
    <section className="sticky inset-x-0 top-0 z-40 border-b bg-background py-4">
      <div className="px-2 container mx-auto">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-x-9">
            <Link href={Routes.Root} className="flex items-center gap-2">
              <Logo />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle className="rounded-xl border-none shadow-none" />
            {loggedIn ? (
              <Link
                href={"#"}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "rounded-xl"
                )}
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href={"#"}
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                    }),
                    "rounded-xl"
                  )}
                >
                  Log in
                </Link>
                <Link
                  href={"#"}
                  className={cn(
                    buttonVariants({
                      variant: "default",
                    }),
                    "rounded-xl"
                  )}
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </nav>
        <MobileMenu className="lg:hidden" />
      </div>
    </section>
  );
}
