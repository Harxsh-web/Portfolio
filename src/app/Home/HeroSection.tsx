"use client";
import BlurFade from "@/components/ui/blur-fade";
import { HeroParallaxDemo } from "./HeroParallaxDemo";
import { IconCloudDemo } from "./IconCloudDemo";
import { ProjectCard } from "./ProjectCard";
import { TimelineDemo } from "./TimelineDemo";
import { Icons } from "@/components/ui/icons";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Contact } from "./Contact";
import { FloatingDockDemo } from "./FloatingDockDemo";
import { Pointer } from "@/components/magicui/pointer";

export const HeroSection = () => {
  const BLUR_FADE_DELAY = 0.1;
  const DATA = {
    projects: [
      {
        title: "MaxPOD Dashboard",
        description: "All-in-one project management built for construction teams.",
        dates: "2025",
        technologies: ["React", "Tailwind", "Firebase"],
        image: "/projectImage/maxpod.png",
        video: null,
        href: "https://maxpodteam.com/",
        links: [
          {
            type: "Website",
            href: "https://maxpodteam.com/",
            icon: <Icons.globe className="size-3" />,
          },
        ]
      },
      {
        title: "Bee Tennis",
        description: "Responsive website for Bee Tennis Studio showcasing training and player growth",
        dates: "2025",
        technologies: ["React", "Typescript", "Firebase"],
        image: "/projectImage/beetennis.png",
        video: null,
        href: "https://beetennis.pages.dev/",
        links: [{
          type: "Website",
          href: "https://beetennis.pages.dev/",
          icon: <Icons.globe className="size-3" />,
        },]
      },
      {
        title: "Shayarify",
        description: "Shayarify is a web platform I developed to connect poetry lovers and creators. Users can read, explore, and share Hindi poetry (shayari) across multiple categories such as love, friendship, and emotions.",
        dates: "2025",
        technologies: ["React", "Spring Boot", "MySQL"],
        image: "/projectImage/shayarify.png",
        video: null,
        href: "https://shayarify.netlify.app/",
        links: [{
          type: "Website",
          href: "https://shayarify.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/Harxsh-web/Shayarify_frontend",
          icon: <Icons.github className="size-3" />,
        },]
      },
      {
        title: "Luke Mikic",
        description: "Discover the proven strategies and blueprints I’ve developed, that will allow you to quit your [9-]5 and succeed on YouTube.",
        dates: "2025",
        technologies: ["React"],
        image: "/projectImage/luke.png",
        video: null,
        href: "https://lukemikic.com/",
        links: [{
          type: "Website",
          href: "https://lukemikic.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/Harxsh-web/Luke_mikic",
          icon: <Icons.github className="size-3" />,
        },]
      },
    ]
  };
  const words = [
    {
      text: "Check",
      className:"text-2xl md:text-5xl"
    },
    {
      text: "Out",
      className:"text-2xl md:text-5xl"
    },
    {
      text: "My",
      className:"text-2xl md:text-5xl"
    },
    {
      text: "Latest",
      className:"text-2xl md:text-5xl"
    },
    {
      text: "Work.",
      className: "text-blue-500 dark:text-blue-500 text-2xl md:text-5xl",
    },
  ];


  return (
    <div className="dark:bg-black">

      <HeroParallaxDemo />
      <TimelineDemo />
      <IconCloudDemo />
      {/* Projects Section */}
      <section id="projects">
        <div className="space-y-12 w-full py-12 dark:bg-black">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="font-bold px-3 py-1 text-3xl">
                  My Projects
                </div>

                <div  className=" flex justify-center ">
                  <TypewriterEffectSmooth words={words} className="text-2xl " />
                </div>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Project Cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto px-4 md:px-0">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <Contact/>
      <FloatingDockDemo/>
    </div>
  )
}
