"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { useQueryState } from "nuqs";

import { cn } from "@/lib/utils";

export type TabsElement = React.ElementRef<typeof TabsPrimitive.Root>;
export type TabsProps = React.ComponentProps<typeof TabsPrimitive.Root>;
const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export type UnderlinedTabsElement = React.ElementRef<typeof TabsPrimitive.Root>;
export type UnderlinedTabsProps = React.ComponentProps<
  typeof TabsPrimitive.Root
>;
const UnderlinedTabs = TabsPrimitive.Root;
UnderlinedTabs.displayName = "UnderlinedTabs";

export type UnderlinedTabsListElement = React.ElementRef<
  typeof TabsPrimitive.List
>;
export type UnderlinedTabsListProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.List
>;
const UnderlinedTabsList = React.forwardRef<
  UnderlinedTabsListElement,
  UnderlinedTabsListProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-12 items-center justify-start text-muted-foreground",
      className
    )}
    {...props}
  />
));
UnderlinedTabsList.displayName = "UnderlinedTabsList";

export type UnderlinedTabsTriggerElement = React.ElementRef<
  typeof TabsPrimitive.Trigger
>;
export type UnderlinedTabsTriggerProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
>;
const UnderlinedTabsTrigger = React.forwardRef<
  UnderlinedTabsTriggerElement,
  UnderlinedTabsTriggerProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "group relative mx-4 inline-flex h-12 items-center justify-center whitespace-nowrap rounded-none border-b border-b-transparent bg-transparent py-1 pb-3 pt-2 text-sm text-muted-foreground shadow-none ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-primary data-[state=active]:font-medium data-[state=active]:text-foreground data-[state=active]:shadow-none",
      className
    )}
    {...props}
  />
));
UnderlinedTabsTrigger.displayName = "UnderlinedTabsTrigger";

export type UnderlinedTabsContentElement = React.ElementRef<
  typeof TabsPrimitive.Content
>;
export type UnderlinedTabsContentProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Content
>;
const UnderlinedTabsContent = React.forwardRef<
  UnderlinedTabsContentElement,
  UnderlinedTabsContentProps
>((props, ref) => <TabsPrimitive.Content ref={ref} {...props} />);
UnderlinedTabsContent.displayName = "UnderlinedTabsContent";

// Add new types for query state tabs
export type TabsWithQueryStateProps = Omit<
  TabsProps,
  "value" | "onValueChange"
> & {
  queryKey: string;
  defaultValue: string;
};

const TabsWithQueryState = React.forwardRef<
  TabsElement,
  TabsWithQueryStateProps
>(({ queryKey, defaultValue, ...props }, ref) => {
  const [value, setValue] = useQueryState(queryKey, {
    defaultValue,
    parse: (value: string | null) => value ?? defaultValue,
  });

  return (
    <TabsPrimitive.Root
      ref={ref}
      value={value}
      onValueChange={setValue}
      {...props}
    />
  );
});
TabsWithQueryState.displayName = "TabsWithQueryState";

// Create an underlined version with query state
const UnderlinedTabsWithQueryState = React.forwardRef<
  UnderlinedTabsElement,
  TabsWithQueryStateProps
>(({ queryKey, defaultValue, ...props }, ref) => {
  const [value, setValue] = useQueryState(queryKey, {
    defaultValue,
    parse: (value: string | null) => value ?? defaultValue,
  });

  return (
    <TabsPrimitive.Root
      ref={ref}
      value={value}
      onValueChange={setValue}
      {...props}
    />
  );
});
UnderlinedTabsWithQueryState.displayName = "UnderlinedTabsWithQueryState";

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsWithQueryState,
  UnderlinedTabs,
  UnderlinedTabsContent,
  UnderlinedTabsList,
  UnderlinedTabsTrigger,
  UnderlinedTabsWithQueryState,
};
