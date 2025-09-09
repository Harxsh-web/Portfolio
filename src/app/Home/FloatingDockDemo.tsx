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
        <div className="flex items-center justify-center w-full fixed bottom-2  md:bottom-4">
            <FloatingDock
                desktopClassName="block"
                mobileClassName="translate-y-0"
                items={links}
            />
        </div>
    );
}
