import Image from "next/image";

const tools = [
  { name: "Autodesk Maya", src: "/images/maya.webp" },
  { name: "ZBrush", src: "/images/zbrush.webp" },
  { name: "Adobe Illustrator", src: "/images/illustrator.webp" },
  { name: "Krita", src: "/images/krita.webp" },
  { name: "Adobe Photoshop", src: "/images/photoshop.webp" },
  { name: "Adobe Substance", src: "/images/substance.webp" },
  { name: "Blender", src: "/images/blender.webp" },
  { name: "Figma", src: "/images/figma.webp" },
];

export function Solutions() {
  return (
    <section className="py-8 px-6 border-y border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <p className="text-xs text-muted-foreground whitespace-nowrap">
          Solutions I&apos;ve
          <br />
          Worked with
        </p>
        <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center md:justify-start">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="relative w-24 h-10 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <Image
                src={tool.src}
                alt={tool.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
