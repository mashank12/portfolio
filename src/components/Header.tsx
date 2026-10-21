import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-background/80 backdrop-blur-sm">
      <Link className="text-lg font-semibold tracking-tight" href="/">
        Portfolio
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        <Link
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          href="#home"
        >
          Home
        </Link>
        <Link
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          href="#about"
        >
          About
        </Link>
        <Link
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          href="#projects"
        >
          Projects
        </Link>
      </nav>
      <a
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
        href="https://www.linkedin.com/in/mariia-velykodna-aab743350"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get in touch
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </header>
  );
}
