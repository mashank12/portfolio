import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";
import { About } from "@/components/About";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Solutions />
      <About />
      <FeaturedProject />
      <Projects />
      <Footer />
    </main>
  );
}
