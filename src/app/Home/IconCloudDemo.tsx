import { IconCloud } from "@/components/magicui/icon-cloud";
import { TypingAnimation } from "@/components/magicui/typing-animation";

const slugs = [
    // 🌐 Languages
    "typescript",
    "javascript",
    "java",
    "html5",
    "css3",

    // ⚛️ Frontend
    "react",
    "nextdotjs",
    "tailwindcss",
    "shadcnui",
    "gsap",
    "framer",

    // 🖥️ Backend & APIs
    "spring",
    "express",
    "nodejs",
    "json",
    "ajax",


    "mysql",
    "postgresql",
    "firebase",

    // ⚙️ Tools & Platforms
    "git",
    "github",
    "gitlab",
    "postman",        // API testing
    "visualstudiocode",
    "figma",
    "linux",
    "windows",
];


export function IconCloudDemo() {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );

    return (
        <>
            <h2 className="text-lg md:text-4xl  text-black dark:text-white max-w-4xl p-4 font-semibold">
                <TypingAnimation startOnView={true}>
                    Technical Skills:
                </TypingAnimation>
            </h2>
            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 px-4 py-2">
                {slugs.map((slug) => (
                    <span
                        key={slug}
                        className="text-neutral-100 dark:text-black dark:text-semibold text-sm px-3 py-1 border rounded-md border-black bg-black dark:bg-white dark:border-white"
                    >
                        {slug.charAt(0).toUpperCase() + slug.slice(1)}
                    </span>
                ))}
            </div>
            <div className="relative flex size-full items-center justify-center overflow-hidden">

                <IconCloud images={images} />
            </div>
        </>
    );
}
