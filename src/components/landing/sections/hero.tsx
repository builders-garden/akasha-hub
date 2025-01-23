"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function HeroTitle(): React.JSX.Element {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <h1 className="text-left mt-6 text-[48px] font-bold leading-[54px] tracking-[-1.2px] [font-kerning:none] sm:text-[56px] md:text-[64px] lg:text-[76px] lg:leading-[74px] lg:tracking-[-2px]">
        Spaces to connect <br /> with like-minded <br /> people
      </h1>
    </motion.div>
  );
}

function HeroDescription(): React.JSX.Element {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="mt-3 max-w-[560px] text-left text-lg leading-[26px] text-muted-foreground sm:text-xl lg:mt-6"
    >
      Explore our network of strategically located coworking spaces designed to
      meet your needs wherever you go.
    </motion.p>
  );
}

function HeroButtons(): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="justify-left flex w-full flex-col gap-2 px-0 sm:w-auto sm:flex-row "
    >
      <Link
        href={"#"}
        className={cn(
          buttonVariants({
            variant: "default",
          }),
          "rounded-full px-4 py-7 sm:px-8 sm:py-4 text-lg font-bold max-w-[200px]"
        )}
      >
        Sign up
      </Link>
    </motion.div>
  );
}

function HeroIllustration(): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="relative mt-6 mx-auto px-6"
    >
      <Image
        quality={100}
        src="/landing/hero/light-image.png"
        width="441"
        height="463"
        alt="Akasha Hub light illustration"
        className="block rounded-xl dark:hidden"
      />
      <Image
        quality={100}
        src="/landing/hero/dark-image.png"
        width="441"
        height="463"
        alt="Akasha Hub dark illustration"
        className="hidden rounded-xl dark:block"
      />
    </motion.div>
  );
}

export function Hero(): React.JSX.Element {
  return (
    <div className="overflow-x-hidden px-2 sm:container sm:mx-auto flex flex-col sm:flex-row mt-4 sm:mt-20 md:mt-24 lg:mt-32">
      <div className="flex flex-col gap-6 px-2 sm:px-1">
        <div className="gap-2">
          <HeroTitle />
        </div>
        <HeroDescription />
        <HeroButtons />
      </div>
      <HeroIllustration />
    </div>
  );
}
