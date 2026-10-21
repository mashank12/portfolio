"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

export interface CaseStudySlide {
  src: string;
  alt: string;
  caption?: string;
  aspectClass?: string;
  priority?: boolean;
}

export interface FeaturedProjectItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  isGithub?: boolean;
  slides: CaseStudySlide[];
}

export const featuredProjects: FeaturedProjectItem[] = [
  {
    id: "secureid",
    tag: "Featured Project #01",
    title: "SecureID - Improving User Trust Through Security Notifications",
    description:
      "A comprehensive UX/UI design case study focusing on user trust, authentication alerts, and intuitive notification patterns in security-critical flows.",
    link: "https://www.figma.com/design/sChGDXiAvQrSbjsxkRLiaF/SecureID?node-id=5-51&t=qDZ2qUiAlG1LVeXJ-1",
    linkText: "View Case Study",
    isGithub: false,
    slides: [
      {
        src: "/images/main-project.webp",
        alt: "SecureID - Main Dashboard",
        caption: "Main Dashboard UI",
        aspectClass: "aspect-square",
        priority: true,
      },
      {
        src: "/images/main-project-2.webp",
        alt: "SecureID - Security Notifications",
        caption: "Security Notification Workflows",
        aspectClass: "aspect-square",
      },
    ],
  },
  {
    id: "smart-home",
    tag: "Featured Project #02",
    title: "Smart Home - Mobile UI & Icon Component System",
    description:
      "Interactive mobile smart home prototype featuring multi-room device controls, lighting presets, temperature adjustments, and a custom icon set crafted across 3 optical sizes (16px, 24px, 32px).",
    link: "https://github.com/mashank12/smart-home",
    linkText: "View on GitHub",
    isGithub: true,
    slides: [
      {
        src: "/images/smart-home-preview.png",
        alt: "Smart Home - Mobile UI & Icon Component Documentation",
        caption: "Mobile UI Screens & Icon Component Documentation",
        aspectClass: "aspect-[16/10]",
      },
      {
        src: "/images/smart-home-living-room.png",
        alt: "Smart Home - 3D Living Room Environment",
        caption: "3D Living Room Environment Asset",
        aspectClass: "aspect-[16/10]",
      },
    ],
  },
  {
    id: "climate-control",
    tag: "Featured Project #03",
    title: "DriveSync - Connected Car Climate Control",
    description:
      "Connected-car climate control interface and design system for Accenture. Includes remote pre-conditioning, multi-zone HVAC controls, custom iconography guidelines, a 3-screen onboarding illustration set, and interactive micro-animations.",
    link: "https://github.com/mashank12/accenture-task",
    linkText: "View on GitHub",
    isGithub: true,
    slides: [
      {
        src: "/images/climate-control-mobile.png",
        alt: "DriveSync - Climate Control Mobile UI",
        caption: "Mobile Climate Control Interface",
        aspectClass: "aspect-[9/19]",
      },
      {
        src: "/images/climate-control-icons.png",
        alt: "DriveSync - Climate Control Icon Set & Component Documentation",
        caption: "Exercise 01: Icon Set & Design System Documentation",
        aspectClass: "aspect-[16/10]",
      },
      {
        src: "/images/climate-control-onboarding.png",
        alt: "DriveSync - Illustration Set & Onboarding Flow",
        caption: "Exercise 02: Illustration Set & Onboarding Flow",
        aspectClass: "aspect-[16/10]",
      },
      {
        src: "/images/climate-control-motion.png",
        alt: "DriveSync - Micro-Animation & Prototype Preview",
        caption: "Exercise 03: Micro-Animation & Prototype Preview",
        aspectClass: "aspect-[16/10]",
      },
    ],
  },
];

export function FeaturedProject() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const displayedProjects =
    selectedFilter === "all"
      ? featuredProjects
      : featuredProjects.filter((p) => p.id === selectedFilter);

  return (
    <section id="featured" className="py-24 overflow-x-hidden border-b border-border">
      {/* Section Header & Filter Tabs */}
      <div className="px-6 mb-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-primary text-sm font-medium mb-3">Case Studies</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Featured Case Studies
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                selectedFilter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              All ({featuredProjects.length})
            </button>
            {featuredProjects.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedFilter(p.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                  selectedFilter === p.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {p.id === "secureid"
                  ? "SecureID"
                  : p.id === "smart-home"
                  ? "Smart Home"
                  : "DriveSync"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-24">
        {displayedProjects.map((project) => (
          <div key={project.id} className="relative">
            {/* Project Details Bar */}
            <div className="px-6 mb-8">
              <div className="max-w-7xl mx-auto">
                <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                  {project.tag}
                </p>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-balance mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <a
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors flex-shrink-0"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.isGithub && <Github className="w-4 h-4" />}
                    {project.linkText}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Horizontal Scroll Gallery */}
            <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-6">
              {project.slides.map((slide, sIdx) => {
                const aspect = slide.aspectClass || "aspect-square";
                return (
                  <a
                    key={sIdx}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    className={`relative h-[320px] sm:h-[400px] md:h-[480px] lg:h-[520px] ${aspect} flex-shrink-0 rounded-2xl overflow-hidden bg-secondary group border border-border/40 hover:border-border transition-colors`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      priority={slide.priority}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient & Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

                    {/* Top Right Action Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      <ArrowUpRight className="w-5 h-5 text-background" />
                    </div>

                    {/* Bottom Caption Overlay */}
                    {slide.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <p className="text-xs md:text-sm font-medium text-white/90">
                          {slide.caption}
                        </p>
                      </div>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
