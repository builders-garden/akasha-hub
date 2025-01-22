"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { CubeIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import {
  ChevronRightIcon,
  CircuitBoardIcon,
  FileBarChartIcon,
  LayoutIcon,
  PlayIcon,
} from "lucide-react";

import { GridSection } from "@/components/landing/fragments/grid-section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  UnderlinedTabs,
  UnderlinedTabsContent,
  UnderlinedTabsList,
  UnderlinedTabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

function HeroPill(): React.JSX.Element {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0, y: -20 }}
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center"
    >
      <Link href="/blog">
        <Badge
          variant="outline"
          className="group h-8 rounded-full px-3 text-xs font-medium shadow-sm duration-200 hover:bg-accent/50 sm:text-sm"
        >
          <div className="w-fit py-0.5 text-center text-xs text-blue-500 sm:text-sm">
            New!
          </div>
          <Separator orientation="vertical" className="mx-2" />
          Introducing Hubs 🎉
          <ChevronRightIcon className="ml-1.5 size-3 shrink-0 text-foreground transition-transform group-hover:translate-x-0.5" />
        </Badge>
      </Link>
    </motion.div>
  );
}

function HeroTitle(): React.JSX.Element {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <h1 className="mt-6 text-center text-[48px] font-bold leading-[54px] tracking-[-1.2px] [font-kerning:none] sm:text-[56px] md:text-[64px] lg:text-[76px] lg:leading-[74px] lg:tracking-[-2px]">
        Akasha Hub
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
      className="mx-auto mt-3 max-w-[560px] text-balance text-center text-lg leading-[26px] text-muted-foreground sm:text-xl lg:mt-6"
    >
      Akasha Hub is a platform for creating and managing hubs for your Akasha
      hub.
    </motion.p>
  );
}

function HeroButtons(): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="mx-auto flex w-full flex-col gap-2 px-7 sm:w-auto sm:flex-row sm:px-0"
    >
      <Link
        href={"#"}
        className={cn(
          buttonVariants({
            variant: "default",
          }),
          "h-10 rounded-xl sm:h-9"
        )}
      >
        Start for free
      </Link>
      <Link
        href={"#"}
        className={cn(
          buttonVariants({
            variant: "outline",
          }),
          "h-10 rounded-xl sm:h-9"
        )}
      >
        Talk to sales
      </Link>
    </motion.div>
  );
}

function MainDashedGridLines(): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
    >
      <svg className="absolute left-[16.85%] top-0 hidden h-full w-px [mask-image:linear-gradient(to_bottom,#0000,#000_128px,#000_calc(100%-24px),#0000)] lg:block">
        <line
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="100%"
          strokeLinecap="round"
          strokeDasharray="5 5"
          stroke="hsl(var(--border))"
        />
      </svg>
      <svg className="absolute right-[16.85%] top-0 hidden h-full w-px [mask-image:linear-gradient(to_bottom,#0000,#000_128px,#000_calc(100%-24px),#0000)] lg:block">
        <line
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="100%"
          strokeLinecap="round"
          strokeDasharray="5 5"
          stroke="hsl(var(--border))"
        />
      </svg>
      <svg className="absolute bottom-[64px] left-[calc(50%-50vw)] hidden h-px w-screen [mask-image:linear-gradient(to_right,#0000,#000_100px,#000_calc(100%-100px),#0000)] lg:block">
        <line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          strokeLinecap="round"
          strokeDasharray="5 5"
          stroke="hsl(var(--border))"
        />
      </svg>
    </motion.div>
  );
}

function SupportiveDashedGridLines(): React.JSX.Element {
  return (
    <>
      <svg className="absolute left-[calc(50%-50vw)] top-[59px] z-10 hidden h-px w-screen [mask-image:linear-gradient(to_right,#0000,#000_100px,#000_calc(100%-100px),#0000)] lg:block">
        <line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          strokeLinecap="round"
          strokeDasharray="5 5"
          stroke="hsl(var(--border))"
        />
      </svg>
      <svg className="absolute left-[calc(50%-50vw)] top-0 z-10 hidden h-px w-screen [mask-image:linear-gradient(to_right,#0000,#000_100px,#000_calc(100%-100px),#0000)] lg:block">
        <line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          strokeLinecap="round"
          strokeDasharray="5 5"
          stroke="hsl(var(--border))"
        />
      </svg>
    </>
  );
}

function HeroIllustration(): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="relative mt-3 lg:mt-6"
    >
      <SupportiveDashedGridLines />
      <UnderlinedTabs defaultValue="feature1" className="mt-3">
        <ScrollArea className="max-w-[100vw] lg:max-w-none">
          <UnderlinedTabsList className="relative z-20 mb-6 flex h-fit flex-row flex-wrap justify-center md:flex-nowrap">
            <UnderlinedTabsTrigger
              value="feature1"
              className="mx-1 px-2.5 sm:mx-2 sm:px-3"
            >
              <CubeIcon className="mr-2 size-4 shrink-0" />
              Feature 1
            </UnderlinedTabsTrigger>
            <UnderlinedTabsTrigger
              value="feature2"
              className="mx-1 px-2.5 sm:mx-2 sm:px-3"
            >
              <PlayIcon className="mr-2 size-4 shrink-0" />
              Feature 2
            </UnderlinedTabsTrigger>
            <UnderlinedTabsTrigger
              value="feature3"
              className="mx-1 px-2.5 sm:mx-2 sm:px-3"
            >
              <CircuitBoardIcon className="mr-2 size-4 shrink-0" />
              Feature 3
            </UnderlinedTabsTrigger>
            <UnderlinedTabsTrigger
              value="feature4"
              className="mx-1 px-2.5 sm:mx-2 sm:px-3"
            >
              <LayoutIcon className="mr-2 size-4 shrink-0" />
              Feature 4
            </UnderlinedTabsTrigger>
            <UnderlinedTabsTrigger
              value="feature5"
              className="mx-1 px-2.5 sm:mx-2 sm:px-3"
            >
              <FileBarChartIcon className="mr-2 size-4 shrink-0" />
              Feature 5
            </UnderlinedTabsTrigger>
          </UnderlinedTabsList>
          <ScrollBar orientation="horizontal" className="invisible" />
        </ScrollArea>
        <div className="relative mb-1 w-full rounded-xl dark:border-none dark:bg-background">
          <SupportiveDashedGridLines />
          <div className="relative z-20 bg-background">
            <UnderlinedTabsContent value="feature1">
              <Image
                quality={100}
                src="/landing/hero/light-feature1.webp"
                width="1328"
                height="727"
                alt="Feature 1 screenshot"
                className="block rounded-xl border shadow dark:hidden"
              />
              <Image
                quality={100}
                src="/landing/hero/dark-feature1.webp"
                width="1328"
                height="727"
                alt="Feature 1 screenshot"
                className="hidden rounded-xl border shadow dark:block"
              />
            </UnderlinedTabsContent>
            <UnderlinedTabsContent value="feature2">
              <Image
                quality={100}
                src="/landing/hero/light-feature2.webp"
                width="1328"
                height="727"
                alt="Feature 2 screenshot"
                className="block rounded-xl border shadow dark:hidden"
              />
              <Image
                quality={100}
                src="/landing/hero/dark-feature2.webp"
                width="1328"
                height="727"
                alt="Feature 2 screenshot"
                className="hidden rounded-xl border shadow dark:block"
              />
            </UnderlinedTabsContent>
            <UnderlinedTabsContent value="feature3">
              <Image
                quality={100}
                src="/landing/hero/light-feature3.webp"
                width="1328"
                height="727"
                alt="Feature 3 screenshot"
                className="block rounded-xl border shadow dark:hidden"
              />
              <Image
                quality={100}
                src="/landing/hero/dark-feature3.webp"
                width="1328"
                height="727"
                alt="Feature 3 screenshot"
                className="hidden rounded-xl border shadow dark:block"
              />
            </UnderlinedTabsContent>
            <UnderlinedTabsContent value="feature4">
              <Image
                quality={100}
                src="/landing/hero/light-feature4.webp"
                width="1328"
                height="727"
                alt="Feature 4 screenshot"
                className="block rounded-xl border shadow dark:hidden"
              />
              <Image
                quality={100}
                src="/landing/hero/dark-feature4.webp"
                width="1328"
                height="727"
                alt="Feature 4 screenshot"
                className="hidden rounded-xl border shadow dark:block"
              />
            </UnderlinedTabsContent>
            <UnderlinedTabsContent value="feature5">
              <Image
                quality={100}
                src="/landing/hero/light-feature5.webp"
                width="1328"
                height="727"
                alt="Feature 5 screenshot"
                className="block rounded-xl border shadow dark:hidden"
              />
              <Image
                quality={100}
                src="/landing/hero/dark-feature5.webp"
                width="1328"
                height="727"
                alt="Feature 5 screenshot"
                className="hidden rounded-xl border shadow dark:block"
              />
            </UnderlinedTabsContent>
          </div>
        </div>
      </UnderlinedTabs>
    </motion.div>
  );
}

export function Hero(): React.JSX.Element {
  return (
    <GridSection className="overflow-x-hidden">
      <MainDashedGridLines />
      <div className="mx-auto mt-16 flex flex-col gap-6 px-2 sm:mt-20 sm:px-1 md:mt-24 lg:mt-32">
        <div className="gap-2">
          <HeroPill />
          <HeroTitle />
        </div>
        <HeroDescription />
        <HeroButtons />
        <HeroIllustration />
      </div>
    </GridSection>
  );
}
