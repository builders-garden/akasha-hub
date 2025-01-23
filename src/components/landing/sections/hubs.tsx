"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function HubsTitle(): React.JSX.Element {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="flex flex-row items-center gap-6 px-2 sm:px-1 justify-between"
    >
      <h2 className="flex items-center text-3xl font-bold">
        Our hubs{" "}
        <span className="hidden ml-2 sm:block">{" across Europe"}</span>
      </h2>
      <Link
        href="/hubs"
        className={cn(buttonVariants({ variant: "outline" }), "text-lg px-4")}
      >
        <span>View all</span>
      </Link>
    </motion.div>
  );
}

function HubCard({
  title,
  subtitle,
  link,
}: {
  title: string;
  subtitle: string;
  link: string;
}): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="relative mt-6 mx-auto rounded-2xl"
    >
      <Image
        quality={100}
        src="/landing/hubs/default-hub.png"
        width="630"
        height="340"
        alt="Default Akasha Hub illustration"
        className="rounded-2xl rounded-b-none"
      />
      <div className="flex flex-row gap-2 px-2 sm:px-4 justify-between border-gray-200 border-b border-x rounded-b-2xl">
        <div className="flex flex-col px-2 sm:px-1 justify-center py-4">
          <p className="text-left text-md text-muted-foreground">
            <span>{subtitle}</span>
          </p>
          <h3 className="text-left text-2xl font-bold py-0 my-0">{title}</h3>
        </div>
        <div className="flex flex-col px-2 sm:px-1 justify-center">
          <Link href={link} className={buttonVariants({ variant: "outline" })}>
            <span>Know more</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function HubDetails(): React.JSX.Element {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="flex flex-col sm:flex-row gap-4 px-2 sm:px-1"
    >
      <HubCard title="Barcelona" subtitle="Akasha Hub" link="/hubs/barcelona" />
      <HubCard title="Roma" subtitle="Akasha x Urbe Hub" link="/hubs/roma" />
    </motion.div>
  );
}

export function Hubs(): React.JSX.Element {
  return (
    <div className="overflow-x-hidden px-2 sm:container sm:mx-auto flex flex-col mt-12 sm:mt-16 md:mt-20 lg:mt-24">
      <HubsTitle />
      <HubDetails />
    </div>
  );
}
