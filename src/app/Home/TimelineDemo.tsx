import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "2025",
            content: (
                <div>
                    <p className="mb-4 text-xl md:text-2xl font-semibold text-neutral-800  dark:text-neutral-200">
                        Software Engineer at UXDLab
                    </p>
                    <p className="mb-8 text-sm font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
                        Designing and implementing responsive, interactive UIs using React, TailwindCSS, and modern frontend tools.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/projectImage/maxpod.png"
                            alt="maxPOD Dashboard"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="/projectImage/beetennis.png"
                            alt="beetennis"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="/projectImage/cdc.png"
                            alt="CDC "
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                      
                    </div>
                </div>
            ),
        },
        {
            title: "2024 – 2025",
            content: (
                <div>
                    <p className="mb-4 text-xl md:text-2xl font-semibold text-neutral-800  dark:text-neutral-200">
                        Backend Developer Intern at CRIS (Centre for Railway Information Systems)
                    </p>
                    <p className="mb-8 text-sm font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
                        Worked on backend systems in Java & Spring Boot, contributing to API integration and data management for
                        large-scale applications.
                    </p>

                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <p className="mb-4 text-xl font-normal text-neutral-800 md:text-2xl dark:text-neutral-200">
                        🏆 Smart India Hackathon – 1st Place (College Level)
                    </p>
                    <p className="mb-4 text-sm font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
                        Developed a web app to translate resources into Indian regional languages, making them more
                        accessible for students and educators.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                       
                    </div>
                </div>
            ),
        },
        {
            title: "2021 - 2025",
            content: (
                <div>
                    <p className="mb-8 text-xl font-normal text-neutral-800 md:text-2xl dark:text-neutral-200">
                        Graduated B.Tech in Computer Science from Dr. APJ Abdul kalam Technical University, Lucknow.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/projectImage/twogood.png"
                            alt="two good co"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="/projectImage/luke.png"
                            alt="Luke Mikic"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="/projectImage/shayarify.png"
                            alt="Shayarify"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                      
                    </div>

                </div>
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}
