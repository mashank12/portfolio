import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const projects: ProjectItem[] = [
  {
    id: "1",
    title: "Aged Male Head",
    description: "This is my realistic 3D portrait study of an elderly male character.",
    image: "/images/mariia-velykodna-9.webp",
    href: "https://mariiavelykodna.artstation.com/projects/4NYzzk",
  },
  {
    id: "2",
    title: "Asuka Langley - Character Adaptation (3D Fan Art)",
    description: "This is my 3D adaptation of Asuka Langley from Neon Genesis Evangelion.",
    image: "/images/mariia-velykodna-14.jpg",
    href: "https://mariiavelykodna.artstation.com/projects/P633En",
  },
  {
    id: "3",
    title: "Remake of Onyxia from the Warcraft",
    description: "This is my remake of Onyxia from Warcraft.",
    image: "/images/mariia-velykodna-img-9659.jpg",
    href: "https://mariiavelykodna.artstation.com/projects/EzKzZK",
  },
  {
    id: "4",
    title: "Victorian Lounge Interior",
    description: "A richly detailed Victorian-style interior created with a focus on mood, lighting, and texture.",
    image: "/images/mariia-velykodna-6.jpg",
    href: "https://mariiavelykodna.artstation.com/projects/V24Lrg",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <a
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            href="https://mariiavelykodna.artstation.com/projects/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-shrink-0 w-[280px] md:w-[calc(25%-18px)] min-w-[280px]"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-5 h-5 text-background" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold mb-1 text-white">{project.title}</h3>
                <p className="text-sm text-white/70">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
