"use client";

import * as React from "react";
import Link from "next/link";

import { ExternalLink } from "@/components/landing/fragments/external-link";
import { ThemeSwitcher } from "@/components/landing/fragments/theme-switcher";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/components/landing/landing-links";
import { Logo } from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator";
import { AppInfo } from "@/constants/app-info";

export function Footer(): React.JSX.Element {
  return (
    <footer className="px-4 pb-10 pt-20 sm:container sm:mx-auto">
      <h2 className="sr-only">Footer</h2>
      <div className="container">
        <div className="sm:grid sm:grid-cols-5 sm:gap-8">
          <div className="col-span-2">
            <Logo />
            <p className="mt-3 text-xs text-muted-foreground">
              Akasha Hub is a platform for hubs.
            </p>
          </div>
          <div className="grid grid-cols-2 mt-6 sm:mt-0 gap-8 md:grid-cols-3 lg:col-span-3">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-foreground">
                  {group.title}
                </h3>
                <ul role="list" className="mt-6 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        title={link.name}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="relative text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.name}
                        {link.external && (
                          <ExternalLink className="absolute right-[-10px] top-[2px] opacity-80" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {AppInfo.APP_NAME}. All rights
              reserved.
            </p>
            <div className="flex flex-row items-center gap-4">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.name}
                  title={link.name}
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </Link>
              ))}
              <Separator orientation="vertical" className="h-4" />
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
