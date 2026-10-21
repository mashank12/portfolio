import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <p className="text-primary text-sm font-medium mb-4">Who I Am</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              3D Is my Passion,
              <br />
              Creativity is my Drive,
              <br />
              Excellence is my Goal.
            </h2>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <p className="text-lg md:text-xl text-foreground">
              Third-year Animation and Visual Effects student with a strong foundation in user-centered visual design. Experienced in translating complex ideas into high-fidelity 3D assets and interactive environments. Passionate about applying Design Thinking and iterative prototyping to create intuitive digital experiences. Adept at collaborating in multidisciplinary teams to align visual quality with functional user requirements.
            </p>

            <div className="flex items-center gap-8">
              <div>
                <p className="text-xs text-muted-foreground">Let&apos;s Build Something</p>
                <p className="text-xs text-muted-foreground">Meaningful Together</p>
              </div>
              <a
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                href="https://www.linkedin.com/in/mariia-velykodna-aab743350"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
