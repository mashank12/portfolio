import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link className="text-lg font-semibold" href="/">
              Mariia Velykodna
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              A professional 3D artist and creative director specializing in creating stunning 3D visuals and immersive brand experiences. With a passion for creativity and a keen eye for detail, I bring ideas to life through innovative design and cutting-edge technology.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  href="#home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  href="#about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  href="#featured"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  href="#projects"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Social</h4>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  href="https://www.linkedin.com/in/mariia-velykodna-aab743350"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  href="https://mariiavelykodna.artstation.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Art Station
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <a
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              href="mailto:mariavelikodna2006@gmail.com"
            >
              mariavelikodna2006@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mariia Velykodna. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed with passion. Built with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
