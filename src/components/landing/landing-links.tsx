import { CubeIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import {
  BookIcon,
  BookOpenIcon,
  CircuitBoardIcon,
  CuboidIcon,
  FileBarChartIcon,
  PlayIcon,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/ui/brand-icons";
import { Routes } from "@/constants/routes";

export const MENU_LINKS = [
  {
    title: "Company",
    items: [
      {
        title: "How it works",
        description: "Short description here",
        icon: <CubeIcon className="size-5 shrink-0" />,
        href: "#",
        external: false,
      },
      {
        title: "Pricing",
        description: "Short description here",
        icon: <PlayIcon className="size-5 shrink-0" />,
        href: "#",
        external: false,
      },
      {
        title: "Demo",
        description: "Short description here",
        icon: <CircuitBoardIcon className="size-5 shrink-0" />,
        href: "#",
        external: false,
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Automation",
        description: "Short description here",
        icon: <PaperPlaneIcon className="size-5 shrink-0" />,
        href: "#",
        external: false,
      },
      {
        title: "Analytics",
        description: "Learn how to use our platform",
        icon: <BookOpenIcon className="size-5 shrink-0" />,
        href: "#",
        external: false,
      },
      {
        title: "Content Creation",
        description: "Short description here",
        icon: <BookOpenIcon className="size-5 shrink-0" />,
        href: "#",
        external: false,
      },
      {
        title: "Collaboration",
        description: "Short description here",
        icon: <FileBarChartIcon className="size-5 shrink-0" />,
        href: "#",
        external: false,
      },
    ],
  },
  {
    title: "About",
    items: [
      {
        title: "Terms of Use",
        description: "Short description here",
        icon: <PaperPlaneIcon className="size-5 shrink-0" />,
        href: Routes.TermsOfUse,
        external: false,
      },
      {
        title: "Privacy Policy",
        description: "Learn how to use our platform",
        icon: <BookOpenIcon className="size-5 shrink-0" />,
        href: Routes.PrivacyPolicy,
        external: false,
      },
      {
        title: "Cookie Policy",
        description: "Short description here",
        icon: <BookOpenIcon className="size-5 shrink-0" />,
        href: Routes.CookiePolicy,
        external: false,
      },
    ],
  },
  {
    title: "Blog",
    href: "#",
    external: false,
  },
  {
    title: "Story",
    href: "#",
    external: false,
  },
];

export const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { name: "How it works", href: "#", external: false },
      { name: "Pricing", href: "#", external: false },
      { name: "Demo", href: "#", external: false },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Automation", href: "#", external: false },
      { name: "Analytics", href: "#", external: false },
      { name: "Content Creation", href: "#", external: false },
      { name: "Collaboration", href: "#", external: false },
    ],
  },
  {
    title: "About",
    links: [
      { name: "Terms of Use", href: Routes.TermsOfUse, external: false },
      { name: "Privacy Policy", href: Routes.PrivacyPolicy, external: false },
      { name: "Cookie Policy", href: Routes.CookiePolicy, external: false },
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    name: "X (formerly Twitter)",
    href: "#",
    icon: <XIcon className="size-4 shrink-0" />,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: <LinkedInIcon className="size-4 shrink-0" />,
  },
  {
    name: "Facebook",
    href: "#",
    icon: <FacebookIcon className="size-4 shrink-0" />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: <InstagramIcon className="size-4 shrink-0" />,
  },
];

export const DOCS_LINKS = [
  {
    title: "Getting Started",
    icon: <CuboidIcon className="size-4 shrink-0 text-muted-foreground" />,
    items: [
      {
        title: "Introduction",
        href: "/docs",
        items: [],
      },
      {
        title: "Dependencies",
        href: "/docs/dependencies",
        items: [],
      },
    ],
  },
  {
    title: "Guides",
    icon: <BookIcon className="size-4 shrink-0 text-muted-foreground" />,
    items: [
      {
        title: "Using MDX",
        href: "/docs/using-mdx",
        items: [],
      },
    ],
  },
];
