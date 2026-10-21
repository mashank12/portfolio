import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface CaseStudySlide {
  src: string;
  alt: string;
  priority?: boolean;
}

const caseStudy = {
  title: "SecureID - Improving User Trust Through Security Notifications",
  link: "https://www.figma.com/design/sChGDXiAvQrSbjsxkRLiaF/SecureID?node-id=5-51&t=qDZ2qUiAlG1LVeXJ-1",
  slides: [
    {
      src: "/images/main-project.webp",
      alt: "SecureID - Main Dashboard",
      priority: true,
    },
    {
      src: "/images/main-project-2.webp",
      alt: "SecureID - Security Notifications",
      priority: false,
    },
  ] as CaseStudySlide[],
};

export function FeaturedProject() {
  return (
    <section className="py-24 overflow-x-hidden">
      <div className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-sm font-medium mb-4">Featured Project</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance max-w-2xl">
              {caseStudy.title}
            </h2>
            <a
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors flex-shrink-0"
              href={caseStudy.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Case Study
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-6">
        {caseStudy.slides.map((slide, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[85vw] md:w-[70vw] lg:w-[60vw] flex-shrink-0 rounded-2xl overflow-hidden bg-secondary group"
            href={caseStudy.link}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={slide.priority}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-background" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
