import Image from "next/image";

const skills = [
  { id: "#01", title: "UI/UX Design" },
  { id: "#02", title: "3D Modeling & Texturing" },
  { id: "#03", title: "3D Animation" },
  { id: "#04", title: "Vector Graphics" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mariia.png"
          alt="Creative Director"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div>
            <p className="text-muted-foreground mb-2">Hey, I&apos;m</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              Mariia
              <br />
              Velykodna
            </h1>
          </div>

          <div className="flex flex-col items-start lg:items-end justify-center gap-4">
            <h2 className="text-xl md:text-2xl font-medium text-balance">
              Professional 3D Artist &amp; Creative Director
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs text-balance lg:text-right">
              Your imagination is the limit. I create stunning 3D visuals and immersive brand
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {skills.map((skill) => (
            <div key={skill.id} className="group">
              <p className="text-primary text-sm mb-1">{skill.id}</p>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
