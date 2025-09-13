import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
export function FloatingDockDemo() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/Harxsh-web",
        },
        {
            title: "Linkedin",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/harsh-21476b267/",
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.instagram.com/harshu___026/",
        },

        {
            title: "Theme",
            icon: (
                <AnimatedThemeToggler />
            ),
            href: "#",


        },
    ];
    return (
      <div className="fixed bottom-2 md:bottom-4 left-0 w-full flex items-center justify-center px-2">
  <div className="w-full md:w-auto flex justify-center">
    <FloatingDock
      desktopClassName="hidden md:flex"
      mobileClassName="flex md:hidden w-full justify-center gap-6 
          
         px-4 py-3 
        pb-[env(safe-area-inset-bottom)]"
      items={links}
    />
  </div>
</div>



    );
}
